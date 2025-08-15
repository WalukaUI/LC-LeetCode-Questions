let nums = [100,4,200,1,3,2]
function longestConsecutive(nums) {
    let newset = {1:[1]}
    let newNums=nums.sort()
    for (let i = 0; i < newNums.length; i++) {
        let currentNum = newNums[i]
        console.log(newset[currentNum-1]);
        
        if(newset[currentNum-1]){
            newset[currentNum]=newset[currentNum-1]
            delete newset[currentNum-1]
            newset[currentNum].push(currentNum)
        }
        
    }
    console.log(Object.);
    
}

console.log(longestConsecutive(nums));
