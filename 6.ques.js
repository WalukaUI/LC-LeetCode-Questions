
let nums = [1,2,3,4]

function productExceptSelf(nums) {
    let newa=[]
    let start = 1
    for (let i = 0; i < nums.length; i++) {
        newa.push(start)
        start = start*nums[i]
    }
    start2 = 1;
    for (let x = nums.length-1; x >= 0; x--) {
        newa[x]=start2*newa[x]
        start2= start2*nums[x]
    }
    return newa
};
console.log(productExceptSelf(nums));












// function productExceptSelf(nums) {
//     let newa=[]
//     for (let i = 0; i < nums.length; i++) {
//          let newfil = nums.filter((x,y)=> {
//             return x !== nums[i] || y!==i
//         }) 
//          let count = newfil[0]
//          for (let x = 1; x < newfil.length; x++) {
//               count = count * newfil[x]     
//          }
//          if (count === undefined) {
//             newa.push(0)
//          }else{
//             newa.push(count)
//          }
//     }
//     return newa
// };
// console.log(productExceptSelf(nums));
