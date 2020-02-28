const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let s=parseFloat(sampleActivity);
  if (typeof sampleActivity =="string" && s>0 && s<=15){
    let A=MODERN_ACTIVITY/s;
    let K=0.693/HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(A)/K);
  } else {
    return false;
  }
};
