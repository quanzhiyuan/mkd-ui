function setArrayLocalStorage (array, value) {
  let localarray = localStorage.getItem(array)
  let localString = localarray ? localarray + ',' + value : value
  localStorage.setItem(array, localString)
}
function getArrayLocalStorage (array) {
  let localArray = localStorage.getItem(array)

  return localArray ? localArray.split(',') : []
}
function clearLocalStorage(value) {
  localStorage.clear(value)
}
export default {
  setArrayLocalStorage,
  getArrayLocalStorage,
  clearLocalStorage
}
