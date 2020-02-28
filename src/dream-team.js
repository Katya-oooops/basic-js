module.exports = function createDreamTeam(members) {
  let name=[];
  if (Array.isArray(members)){
    for (let i=0; i<members.length; i++){
      if (typeof members[i]=="string"){
        members[i]=members[i].replace(/\s+/,'');
        name.push(members[i].charAt(0).toLocaleUpperCase());
      }
    }
    return name.sort().join('');
  }else{
    return false;
  }
  // remove line with error and write your code here
};