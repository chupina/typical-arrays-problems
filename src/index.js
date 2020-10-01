
exports.min = function min (array) {
if (!array || array.length == 0){return 0};
  const sortedArr = [...array].sort((a,b)=>a-b);
  return sortedArr[0];
  }

exports.max = function max (array) {
   if (!array || array.length == 0){return 0};
   const sortedArr = [...array].sort((a,b)=>b-a);
    return  sortedArr[0];
}

exports.avg = function avg (array) {
if (!array || array.length == 0){return 0};
 const reducedArray = [...array].reduce((acc,val)=>{
    return acc+val;  
  },0)
  const avgRes = reducedArray/array.length;
  return  avgRes;
 };
 
