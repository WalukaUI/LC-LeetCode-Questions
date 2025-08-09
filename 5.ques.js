
let nums = [1,1,4,1,2,2,3,7,7,7,7], k = 2

function topKFrequent(num, kk) {
    let newObj={}

    for(x of num){
        if(!newObj[x]){
            newObj[x]=[x]
        }else{
            newObj[x].push(x)
        }
    }
    return Object.values(newObj).sort((a,b)=> b.length - a.length).slice(0, kk)
}

console.log(topKFrequent(nums, k));
