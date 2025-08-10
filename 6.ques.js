
let nums = [1,2,3,4]
function productExceptSelf(nums) {
    let newa=[]
    for (let i = 0; i < nums.length; i++) {
         let newfil = nums.filter((x,y)=> {
            return x !== nums[i] || y!==i
        }) 
         let count = newfil[0]
         for (let x = 1; x < newfil.length; x++) {
              count = count * newfil[x]     
         }
         if (count === undefined) {
            newa.push(0)
         }else{
            newa.push(count)
         }
    }
    return newa
};
console.log(productExceptSelf(nums));
