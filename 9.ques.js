let str="0p"
function isPalindrome(s) {
   let newS = s.toLowerCase().replace(/[^a-z0-9]/gi,'').split('')
   let count = 0
   let rcount= newS.length-1
   let ans = true
for (let i = 0; i < newS.length; i++) {
    if(newS[count]==newS[rcount]){
        count++
        rcount = rcount-1
    }else{
        ans = false
    }
    
}
console.log(ans);
}

console.log(isPalindrome(str));



