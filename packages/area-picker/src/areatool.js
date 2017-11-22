import areaData from './area.json'
/**获取所有省*/
function getProvince () {
  return areaData.filter((value) => {
    return value.area.split('#').length === 1
  }).map((value) => {
    return value.t
  })
}
/**根据省名称获取市列表*/
function getCity (province) {
 let cityData =  areaData.find(function (value) {
   return value.t === province
 })
 let citys = []
 let v = cityData.o
 for (let i in v) {
   citys.push(v[i].t)
 }
 return citys
}
/**根据省市国标码获取区列表*/
function getArea (city) {
  let area =  areaData.find(function (value) {
    return value.t === city
  })
  let areas = []
  let v = area.o
  for (let i in v) {
    areas.push(v[i].t)
  }
  return areas
}
/**构造省市区的数据*/
function getAddressData (p =  '北京') {
  let data = []
  let province = getProvince()
  let defaultProvince = p
  let city = getCity(defaultProvince)
  let defaultCity = city[0]
  data.push({
      flex: 1,
      values: province
    })
  data.push({
    flex: 1,
    values: city
  })
  data.push({
    flex: 1,
    values: getArea(defaultCity)
  })
  return data
}
export default {
  getProvince,
  getCity,
  getArea,
  getAddressData
}
