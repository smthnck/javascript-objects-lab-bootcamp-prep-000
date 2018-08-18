var recipes = {}
var updateObjectWithKeyAndValue = function(obj, key, value){
  return Object.assign({},obj,{ [key]:value })
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key]=value
  return object
}

var deleteFromObjectByKey = function(object, key){
  var obj = object
  delete obj[key]
  return obj
  console.log(obj)
}