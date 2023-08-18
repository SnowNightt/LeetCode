// 给你一座由 n x n 个街区组成的城市，每个街区都包含一座立方体建筑。给你一个下标从 0 开始的 n x n 整数矩阵 grid ，其中 grid[r][c] 表示坐落于 r 行 c 列的建筑物的 高度 。

// 城市的 天际线 是从远处观察城市时，所有建筑物形成的外部轮廓。从东、南、西、北四个主要方向观测到的 天际线 可能不同。

// 我们被允许为 任意数量的建筑物 的高度增加 任意增量（不同建筑物的增量可能不同） 。 高度为 0 的建筑物的高度也可以增加。然而，增加的建筑物高度 不能影响 从任何主要方向观察城市得到的 天际线 。

// 在 不改变 从任何主要方向观测到的城市 天际线 的前提下，返回建筑物可以增加的 最大高度增量总和 。
// 输入：grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// 输出：35
// 解释：建筑物的高度如上图中心所示。
// 用红色绘制从不同方向观看得到的天际线。
// 在不影响天际线的情况下，增加建筑物的高度：
// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]



// 解
var maxIncreaseKeepingSkyline = function (grid) {
    let n = grid.length
    // 从西边和东边看是一样的，从南边和北边看是一样的
    let west = []
    let south = []

    // 找出每行最大，完成从西边看的天际线
    for (let i = 0; i < n; i++) {
        let max = Math.max(...grid[i])
        // 当前行最大的放进数组
        west.push(max)
    }

    // 找出每列最大的，完成从南看的天际线
    for (let j = 0; j < n; j++) {
        let max = 0
        for (let i = 0; i < n; i++) {
            if (grid[i][j] > max) max = grid[i][j]
        }
        // 当前列最大的放进数组
        south.push(max)
    }
    // 从每行每列最大的中找出最小的减去每个城市高度（不会有负数）就是增幅
    let res = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += Math.min(west[i], south[j]) - grid[i][j]
        }
    }
    return res
};


// 更简洁
var maxIncreaseKeepingSkyline = function (grid) {
    let n = grid.length
    // 从西边和东边看是一样的，从南边和北边看是一样的
    let west = Array(n).fill(0)
    let south = Array(n).fill(0)

    // 找出每行最大，完成从西边看的天际线
    for (let i = 0; i < n; i++) {
        west[i] = Math.max(...grid[i])
    }

    // 找出每列最大的，完成从南看的天际线
    for (let j = 0; j < n; j++) {
        let max = 0
        for (let i = 0; i < n; i++) {
            max = Math.max(grid[i][j],max)
        }
        south[j] = max
    }
    // 从每行每列最大的中找出最小的减去每个城市高度（不会有负数）就是增幅
    let res = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res += Math.min(west[i], south[j]) - grid[i][j]
        }
    }
    return res
};