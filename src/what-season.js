module.exports = function getSeason(date) {
  
  if (date==undefined){
    return('Unable to determine the time of year!');
  }else if(typeof date !== 'object' || date.hasOwnProperty('toString')){
    throw new Error;
  }else if(date.getMonth()>4 && date.getMonth()<=7){
    return('summer');
  }else if(date.getMonth()==0 || date.getMonth()==1 || date.getMonth()==11){
    return('winter');
  }else if(date.getMonth()>1 && date.getMonth()<=4){
    return('spring');
  }else if(date.getMonth()>7 && date.getMonth()<=10){
    return(/autumn|fall/);
  }
  // remove line with error and write your code here
};
