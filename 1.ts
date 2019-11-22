// 在一个打卡项目中 处理打卡的数据问题
// 20天的打卡时间
function getDate(day: number) {
  const l = 20
  const date = []
  for (let i = 0; i < l; i++) {
    date.push(`${day + i}`)
  }
  return date
}
const dateList = getDate(20191102)
//请求接口打卡以后的返回
let userDate: any[] = [ '20191116','20191117','20191119','20191120','20191121','20191122' ]

// 需要实现一个这样的数据结构
//  { '20191102': 0,
  // '20191103': 0,
  // '20191104': 0,
  // '20191105': 0,
  // '20191106': 0,
  // '20191107': 0,
  // '20191108': 0,
  // '20191109': 0,
  // '20191110': 0,
  // '20191111': 0,
  // '20191112': 0,
  // '20191113': 0,
  // '20191114': 0,
  // '20191115': 0,
  // '20191116': 1,
  // '20191117': 1,
  // '20191118': 0,
  // '20191119': 1,
  // '20191120': 1,
  // '20191121': 1 }
  interface LooseObject {
    [key: string]: any
  }
  // 将已打卡时间进行组合
  // 获取两个数组的交集
  const intersection = dateList.filter(v => userDate.includes(v))
  // 获取两个数组的差集 
  //const difference = dateList.concat(userDate).filter(v => !dateList.includes(v) || !userDate.includes(v))
  // 进行合并处理
  const l = dateList.length
  let gatherList: LooseObject = {}
  for (let i = 0; i < l; i++) {
    const newObj: LooseObject = {}
    newObj[dateList[i]] = 0
    gatherList = Object.assign(gatherList, newObj)
    if (intersection.includes(dateList[i])) {
      newObj[dateList[i]] = 1
      gatherList = Object.assign(gatherList, newObj)
    }
  }
