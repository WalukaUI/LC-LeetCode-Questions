let s = "anagram"
let t = "nagaram"
function isAnagram(s, t) {
    let lengthOfS= s.length
    let lengthOft= t.length
    
    if(lengthOfS === lengthOft){
        let splitOfS= s.split('').sort().join('')
        let splitOft= t.split('').sort().join('')
        if(splitOfS === splitOft){
            return true
        }   
    }
    return false
};

console.log(isAnagram(s,t));
