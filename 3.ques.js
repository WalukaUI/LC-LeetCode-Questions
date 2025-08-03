let nums = [-1,-2,-3,-4,-5], target = -8

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if(target === 0){
            if(nums[i]===0){
                let newarray= nums.slice(i+1, nums.length)
                let checkRemainder = newarray.find((x)=>x === 0)
                let indexoftheNum= newarray.indexOf(0)
                if(checkRemainder !== undefined){
                    return [i, indexoftheNum+i+1]
                }
        }
        }
   
        var getRemainder= (target-nums[i])
        
        let newarray= nums.slice(i+1, nums.length)
        let checkRemainder = newarray.find((x)=>x === getRemainder)
        let indexoftheNum= newarray.indexOf(getRemainder)
        
        if(checkRemainder !== undefined){
            return [i, indexoftheNum+i+1]
        }
    
    }
    
};

console.log(twoSum(nums, target));
