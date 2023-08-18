// 给你一个数组 points ，其中 points[i] = [xi, yi] ，表示第 i 个点在二维平面上的坐标。多个点可能会有 相同 的坐标。

// 同时给你一个数组 queries ，其中 queries[j] = [xj, yj, rj] ，表示一个圆心在 (xj, yj) 且半径为 rj 的圆。

// 对于每一个查询 queries[j] ，计算在第 j 个圆 内 点的数目。如果一个点在圆的 边界上 ，我们同样认为它在圆 内 。

// 请你返回一个数组 answer ，其中 answer[j]是第 j 个查询的答案。
// 输入：points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
// 输出：[3,2,2]

// 解:
// 若求平方用math.pow效率就低
var countPoints = function(points, queries) {
    let answer = []
    queries.forEach((x)=>{
        let sum = 0
        points.forEach((y)=>{
            if((y[0]-x[0])*(y[0]-x[0])+(y[1]-x[1])*(y[1]-x[1])<=x[2]*x[2]){
                sum++
            }

        })
        answer.push(sum)
    })
    return answer
};


// 用for循环：  效率高
var countPoints = function(points, queries) {
    let res = [];
    for (let i = 0; i<queries.length;i++) {
      let count = 0;
      for (let j = 0; j < points.length; j++) {
        let dx = points[j][0] - queries[i][0];
        let dy = points[j][1] - queries[i][1];
        let r = queries[i][2];
        if ((dx * dx) + (dy * dy) <= (r * r)) {
          count++;
        }
      }
      res.push(count);
    }
    return res;
}