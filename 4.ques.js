
let strss = ["eat","tea","tan","ate","nat","bat"]


function groupAnagrams(strs) {
    let newobj = {}
    for ( let i of strs) {
        let srt = i.split('').sort().join('')
        if(!newobj[srt]){
            newobj[srt]=[i]
        }else{
            newobj[srt].push(i)
        }
    }

    // for(let x in newobj){
    //     newobj[x].push(x)
    // }
    return Object.values(newobj)
    
};
console.log(groupAnagrams(strss));
