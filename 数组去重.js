// 方法1
let arr = Array.from(new Set([1,2,3,3,4]))  //set构建的不是数组是类数组，Set没有索引，也没有数组的方法和属性。
console.log(arr === new Set([1,2,3,3,4]));

// 方法2
function removeDuplicate(arr) {
    const newArr = []
    arr.forEach(item => {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item)
      }
    })
    return newArr // 返回一个新数组
  }

  const result1 = removeDuplicate(arr)

//   方法3
function removeDuplicate(arr) {
    return arr.filter((item, index) => {
      return arr.indexOf(item) === index  //indexOf返回的是找到的第一个元素的下标
    })
  }
  
  const result2 = removeDuplicate(arr)

//   方法4
function removeDuplicate(arr) {
    const map = new Map()
    const newArr = []
  
    arr.forEach(item => {
      if (!map.has(item)) { // has()用于判断map是否包为item的属性值
        map.set(item, true) // 使用set()将item设置到map中，并设置其属性值为true
        newArr.push(item)
      }
    })
  
    return newArr
  }
  
  const result3 = removeDuplicate(arr)
 
