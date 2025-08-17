let nums = [100,4,200,1,3,2]
function longestConsecutive(nums) {
    let numSet = new Set(nums)
    var longest = 0
    for(const x of nums){  
        if(numSet.has(x-1) === false){
            var length = 0
            while (numSet.has(x+length)) {
                 length++
            }
           longest = Math.max(length, longest)
        }
    }

    return longest

    
}

console.log(longestConsecutive(nums));


    // let newset = {1:[1]}
    // let newNums=nums.sort()
    // for (let i = 0; i < newNums.length; i++) {
    //     let currentNum = newNums[i]
    //     if(newset[currentNum-1]){
    //         newset[currentNum]=newset[currentNum-1]
    //         delete newset[currentNum-1]
    //         newset[currentNum].push(currentNum)
    //     }
        
    // }
    // let keyasnum=Object.keys(newset).map(Number)
    // let highestkey=Math.max(...keyasnum)
    // return highestkey
    