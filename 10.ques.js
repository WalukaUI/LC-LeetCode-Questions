
let numbers = [1,3,4,5,7,10,11], target = 11

function twoSum(sorted, tgt) {
  let start=0
  let end=sorted.length-1

  while (start < end) {
     let sum=sorted[start]+sorted[end]

     if(sum>target){
        end--
     }else if(target> sum){
        start++
     }else{
        return [sorted[start], sorted[end]]
     } 
  }   
}



// function twoSum(numbers, target) {
//     if(numbers.length <= 1){
//         return numbers
//     }
//     var ans =[]
//     let myset = new Set(numbers)
//     for (let i = 0; i < numbers.length; i++) {
//         let remainingNum = numbers[i]> target? numbers[i]-target : target - numbers[i]
//         console.log(remainingNum);
        
//         if(myset.has(remainingNum)){
//            let remainingNumIndex = numbers.indexOf(remainingNum)
           
//            ans = [i+1, remainingNumIndex+1]
//            break
//         }
        
//     }
//     return ans.sort()
    

// }
console.log(twoSum(numbers,target));
