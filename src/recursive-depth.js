module.exports = class DepthCalculator {
    calculateDepth(arr) {
        
        let n=0;
        if(Array.isArray(arr)){n++};
        let d=0;

        for(let a of arr){
            if (Array.isArray(a)){d++}
        }

        while(d>0){
            d=0
            n++;
            arr=arr.filter(i=>Array.isArray(i));
            arr=[].concat(...arr);
            for(let a of arr){
                if (Array.isArray(a)){d++}
            }
        }
        
        return n;
    
    };
}