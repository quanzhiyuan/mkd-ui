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
  let areaData =  areaData.find(function (value) {
    return value.t === province
  })
  let citys = []
  let v = cityData.o
  for (let i in v) {
    citys.push(v[i].t)
  }
  return citys
}
/**构造省市区的数据*/
function getAddressData () {
  let data = []
  let province = getProvince()
  let defaultProvince = province[0]
  let city = getCity(defaultProvince)
  let defaultCity = city[0]
  data.push(province)
  data.push(city)
  data.push(getArea(defaultCity))
  return data
}
export default {
  getProvince,
  getCity,
  getArea,
  getAddressData
}
