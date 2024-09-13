// 1.自定义call函数
// call(Fn,obj,...args)  接受三个参数，调用call函数将执行Fn函数，并将Fn运行内部将this指向obj对象，...args为Fn参数
// 当obj未undefind或null，this指向全局对象
function call(Fn,obj,...args) {
  if(obj == undefined || obj == null) {
    obj = globalThis  // 全局对象 ES11 新特性
  }
  obj.temp = Fn
  const reslut =  obj.temp(...args)
  delete obj.temp
  return reslut
}

// 2.自定义apply函数
// apply函数同上call函数，区别是apply函数的第三个参数未一个数组
function apply(Fn,obj,args) {
  if(obj == undefined || obj == null) {
    obj = globalThis
  }
   obj.temp = Fn
   const result = obj.temp(...args)
   delete obj.temp
   return result
}