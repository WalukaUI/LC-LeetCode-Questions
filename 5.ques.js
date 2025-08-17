
let nums = [1,1,4,1,2,2,3,7,7,7,7], k = 2


function topKFrequent(nums, kk) {
    let newObj={}
    for(let x of nums){
        if(!newObj[x]){
            newObj[x]=[x]
        }else{
            newObj[x].push(x)
        }
    }
    let valuesOfObj= Object.values(newObj).sort((a,b)=> b.length - a.length)
    let count=0
    let newa=[]
    while(count< kk){
        newa.push(valuesOfObj[count][0])
        count++
    }
    return newa
}


// function topKFrequent(num, kk) {
//     let newObj={}

//     for(x of num){
//         if(!newObj[x]){
//             newObj[x]=[x]
//         }else{
//             newObj[x].push(x)
//         }
//     }
//     let uniqVals = Object.values(newObj).sort((a,b)=> b.length - a.length).slice(0, kk)
//     let newarray= []
//     for (let i = 0; i < uniqVals.length; i++) {
//         newarray.push(uniqVals[i][0])
        
//     }
//     return newarray
    
// }

console.log(topKFrequent(nums, k));
