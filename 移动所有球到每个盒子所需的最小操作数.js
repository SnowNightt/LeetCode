// 有 n 个盒子。给你一个长度为 n 的二进制字符串 boxes ，其中 boxes[i] 的值为 '0' 表示第 i 个盒子是 空 的，而 boxes[i] 的值为 '1' 表示盒子里有 一个 小球。

// 在一步操作中，你可以将 一个 小球从某个盒子移动到一个与之相邻的盒子中。第 i 个盒子和第 j 个盒子相邻需满足 abs(i - j) == 1 。注意，操作执行后，某些盒子中可能会存在不止一个小球。

// 返回一个长度为 n 的数组 answer ，其中 answer[i] 是将所有小球移动到第 i 个盒子所需的 最小 操作数。

// 每个 answer[i] 都需要根据盒子的 初始状态 进行计算。

 

// 示例 1：

// 输入：boxes = "110"
// 输出：[1,1,3]
// 解释：每个盒子对应的最小操作数如下：
// 1) 第 1 个盒子：将一个小球从第 2 个盒子移动到第 1 个盒子，需要 1 步操作。
// 2) 第 2 个盒子：将一个小球从第 1 个盒子移动到第 2 个盒子，需要 1 步操作。
// 3) 第 3 个盒子：将一个小球从第 1 个盒子移动到第 3 个盒子，需要 2 步操作。将一个小球从第 2 个盒子移动到第 3 个盒子，需要 1 步操作。共计 3 步操作。



// 解
var minOperations = function(boxes) {
    let arr = boxes.split("")
    let n = arr.length
    let answer = Array(n).fill(0)
    // 小球目的地的盒子
    for(let i = 0;i<n;i++){
        // 所有小球移动到第 i 个盒子所需的最小操作数
        for(let j = 0;j<n;j++){
            if(arr[j]!="0"){
                answer[i]+=Math.abs(j-i)
            }
        }
    }
    return answer
};

// 1.求出第一个盒子右侧一共有多少个小球。记作right，判断第一个盒子是否有小球
// 2.得到所有小球移到第一个盒子的操作数。记作left
// 3.接下来求所有小球移到第二个盒子的操作数：
//                                     因为第一次所有小球都从右侧移动到第一个盒子经过第二个盒子得到操作数x，
//                                     所以假设现在所有小球都在第一个盒子，可以将所有小球向右移动一格即可，即'x-right'得到第二个盒子的操作数n，
//                                     相当于所有小球多走了一格，从第二个盒子，到了第一个盒子
//                                     再判断第二个盒子是否有小球，若有则left+1，right-1,因为right初始是第一个盒子右侧的小球个数，若第二个盒子有小球，则减去自身，因为接下来要通过第二个盒子的操作数n来计算移动到第三个盒子的操作数
//                                     假设第二个盒子有小球则"n-第二个盒子右侧的小球个数*1+(第二个盒子左侧的小球个数,包括自身)*1"乘1表示走一格
//                                     以此类推......

// 官方
var minOperations = function(boxes) {
    let left = boxes[0] == '1'?1:0,right = 0, operations = 0;
    const n = boxes.length;
    for (let i = 1; i < n; i++) {
        if (boxes[i] === '1') {
            right++;
            operations += i;
        }
    }
    const res = new Array(n).fill(0);
    res[0] = operations;
    for (let i = 1; i < n; i++) {
        operations += left - right;
        if (boxes[i] === '1') {
            left++;
            right--;
        }
        res[i] = operations;
    }
    return res;
}

