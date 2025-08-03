let nums = [1,5,3,6,6]

function containsDuplicate(nums) {

// Best answer

    let aa=new Set()
    
    for(let x of nums){
        if(aa.has(x)){
          console.log(aa)
          return true
        }else{
          aa.add(x)
        } 
    }

  return false

// Answer 2

// let newarray = nums.filter((x,y)=> nums.indexOf(x) !== y)
// if(newarray.length !== 0){
//     return true
// }else{
//     return false
// }


// Answer 3 

//     for (let i = 0; i < nums.length; i++) {
//     let newarray= nums.slice(i+1, nums.length)
//     let dd= newarray.find((x)=> x === nums[i])
//     if(dd !== undefined){
//         return true
//     }
//    }
//    return false
    
};

console.log(containsDuplicate(nums));
