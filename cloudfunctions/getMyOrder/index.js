const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const collections = db.collection('myOrder')
const _ = db.command
const wxContext = cloud.getWXContext()
const MAX_LIMIT = 100
exports.main = async (event, context) => {
  // 先取出集合记录总数
  const countResult1 = await collections.where({
    open_id:wxContext.OPENID,
    movieTime:_.lte(new Date())
  }).count()
  const total1 = countResult1.total
  const batchTimes1 = Math.ceil(total1 / 100)
  const countResult2 = await collections.where({
    open_id: wxContext.OPENID,
    movieTime: _.gt(new Date())
  }).count()
  const total2 = countResult2.total
  // 计算需分几次取
  const batchTimes2 = Math.ceil(total2 / 100)
  // 承载所有读操作的 promise 的数组
  const tasks1 = []
  const tasks2 = []
  for (let i = 0; i < batchTimes1; i++) {
    const promise1 = collections.where({
      open_id: wxContext.OPENID,
      movieTime: _.lte(new Date())
    }).skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks1.push(promise1)
  }
  for (let i = 0; i < batchTimes2; i++) {
    const promise2 = collections.where({
      open_id: wxContext.OPENID,
      movieTime: _.gt(new Date())
    }).skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks2.push(promise2)
  }
  // 等待所有
  return {
    finished:  (await Promise.all(tasks1)).reduce((acc, cur) => ({
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    })),
    unfinished: (await Promise.all(tasks2)).reduce((acc, cur) => ({
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }))
  }
}