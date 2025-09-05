let nums = [3,2,4], target = 6

function twoSum(nums, target) {


    
   let newSet= new Set(nums)
   console.log(newSet);
   
   for(let i=0;i<nums.length;i++){
      let diff = target - nums[i]
      console.log(diff);
      
      if(newSet.has(diff) && nums.indexOf(diff) !== i){
        let idx = nums.indexOf(diff)
        console.log("-------------------");
        console.log(idx);
        console.log("...................");
        
        console.log([idx, i]);
        return
      }
   }



    // for (let i = 0; i < nums.length; i++) {
    //     if(target === 0){
    //         if(nums[i]===0){
    //             let newarray= nums.slice(i+1, nums.length)
    //             let checkRemainder = newarray.find((x)=>x === 0)
    //             let indexoftheNum= newarray.indexOf(0)
    //             if(checkRemainder !== undefined){
    //                 return [i, indexoftheNum+i+1]
    //             }
    //     }
    //     }
    //     var getRemainder= (target-nums[i])
    //     let newarray= nums.slice(i+1, nums.length)
    //     let checkRemainder = newarray.find((x)=>x === getRemainder)
    //     let indexoftheNum= newarray.indexOf(getRemainder)
        
    //     if(checkRemainder !== undefined){
    //         return [i, indexoftheNum+i+1]
    //     }
    // }
};
console.log(twoSum(nums, target));