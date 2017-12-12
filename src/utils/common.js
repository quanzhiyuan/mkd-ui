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

function siblings (elem) { // 获取兄弟节点
  let children = Array.prototype.slice.call(elem.parentNode.children)
  return children.filter(child => {
    return child !== elem
  })
}
export default {
  setArrayLocalStorage,
  getArrayLocalStorage,
  clearLocalStorage,
  siblings
}
