
let strss = ["eat","tea","tan","ate","nat","bat"]
let newset = new Set()
let sorted = []

function groupAnagrams(strs) {
    for (let i = 0; i < strs.length; i++) {
        let srt = strs[i].split('').sort().join('')
        let sortedd = srt
        let joined = sortedd
        console.log(joined);
        sorted.push(joined)
    }
    console.log(sorted);
    
};
console.log(groupAnagrams(strss));
