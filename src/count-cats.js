module.exports = function countCats(arr) {
  let i=0;
  let n=0;
  for (i; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
      if (arr[i][j]=='^^' || arr[i][j]=="^^"){
       n++;
      }
    }
  }
  return n;
};
