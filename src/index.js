/**
 * 簡單轉formData
 * @param {[Any]} data 資料，第一次須為物件
 * @param {[String]} property 屬性
 * @param {[Array]} newData 新的資料
 * @param {[Number]} depth 深度
 * @returns 
 */
 function easyFormData(data = {}, property = "",newData = [],depth = 0) {
  // 判斷型態
  const type = typeof data;
  let realType = ""; // 真正的型態
  if (type === "object") {
    //如果是物件，就要判斷事物件、陣列，還是檔案
    // 是陣
    if (Array.isArray(data)) realType = "array";
    // 是檔案
    else if (data instanceof Blob) realType = "file";
    // 是物件
    else realType = "object";
  } else {
    // 其他型態
    realType = type;
  }
  // 如果是第一次進來，型態必須為物件
  if (realType !== "object" && depth === 0) throw new Error("only object!!");
  const nextDepth = depth + 1;

  switch (realType) {
    case "array":
      dataIsArray(data,property,newData,nextDepth);
      break;
    case "object":
      dataIsObject(data,property,newData,nextDepth);
      break;
    default:
      newData.push({
        value: data, // 值
        formDataProperty: `${property}` // formdata屬性
      })
  }
  if(depth === 0){
    const formData = new FormData();
    newData.forEach(item => {
      formData.append(item.formDataProperty, item.value);
    })
    return formData
  }
}

// 資料是陣列
function dataIsArray(array = [], parentProperty, newData,depth) {
  array.forEach((item,index)=>{
    const newProperty = `${parentProperty}[${index}]`
    easyFormData(item,newProperty,newData,depth)
  })
}

// 資料是物件
function dataIsObject(object = {}, parentProperty = "", newData,depth) {
  Object.keys(object).forEach(property=>{
    const value = object[property] // 值
    const newProperty = parentProperty ? `${parentProperty}[${property}]` : property
    easyFormData(value,newProperty,newData,depth)
  })
}

module.exports = easyFormData;