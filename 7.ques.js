let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

function isValidSudoku(board) {
    let row ={}
    let col = {}
    let box = {}

 for (let i = 0; i < board.length; i++) {
    for (let x = 0; x < board.length; x++) {
        let val = board[i][x]
       if(val !== "."){
        let boxid= Math.floor(i/3)*3 + Math.floor(x/3)
        if(row[`${i}-${val}`] || col[`${x}-${val}`] || box[`${boxid}-${val}`]){
            return false
        }
        row[`${i}-${val}`] = true
        col[`${x}-${val}`] = true
        box[`${boxid}-${val}`]= true
       }
    }
 }
return true
};
console.log(isValidSudoku(board));