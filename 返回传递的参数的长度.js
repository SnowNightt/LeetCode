// 请你编写一个函数 argumentsLength，返回传递给该函数的参数数量。
// 示例 1：
// 输入：argsArr = [5]
// 输出：1
// 解释：
// argumentsLength(5); // 1
// 只传递了一个值给函数，因此它应返回 1。

/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */