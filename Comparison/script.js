let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };
let areEqual = true;
let keys1=Object.keys(obj1);
let keys2=Object.keys(obj2);
if(keys1.length!=keys2.length){
    areEqual=false;
}
else {
  for (let key in obj1) {
    if (!(key in obj2)){
      areEqual = false;
      break;
    }
  }
}
console.log(areEqual); 
