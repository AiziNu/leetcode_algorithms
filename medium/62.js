const uniquePaths = function(m, n) {
    const grid = Array.from({ length: m}, ()=>Array(n).fill(1))

    for(let row = 1; row < m; row++){
        for(let colm = 1; colm < n; colm++){
            grid[row][colm] = grid[row-1][colm] + grid[row][colm - 1]
        }
    }
    return grid[m-1][n-1]
};

const output = uniquePaths(3,7)
console.log(output)