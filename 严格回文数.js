


// 自己写的1
var isStrictlyPalindromic = function(n) {
    for(let b = 2;b<n-1;b++){
        let arr = []
        let p = n
        while(p){
            let temp = p%b
            arr.unshift(temp)
            p = Math.floor(p/b)
        }
        for(let i = 0;i<arr.length/2;i++){
            for(let j = arr.length-i-1;j>i;j--){
                if(arr[i] == arr[j]){
                    break
                }else{
                    return false
                }
            }
        }
        arr = []
    }
    return true
};

// 1的基础上小改
var isStrictlyPalindromic = function(n) {
    for(let b = 2;b<n-1;b++){
        let arr = []
        let p = n
        while(p){
            let temp = p%b
            arr.unshift(temp)
            p = Math.floor(p/b)
        }
        for(let i = 0;i<Math.floor(arr.length/2);i++){
            if(arr[i] == arr[arr.length-i-1]){
                continue
            }else{
                return false
            }
        }
        arr = []
    }
    return true
};

// 大佬1
var isStrictlyPalindromic = function(n) {
    for (let i = 2; i <= n - 2; i++) {
        let tmp = n.toString(i);
        let l = 0;
        let r = tmp.length - 1;
        while (l <= r) {
            if (tmp[l] !== tmp[r]) {
                return false;
            }
            l++;
            r--;
        }
    }
    return true;
};

// 大佬2
var isStrictlyPalindromic = function(n) {
    let id = 2
    while(id <= n) {
        let a = n.toString(id)
        if(a.split('').reverse().join('') !== a) return false
        id++
    }
    return true
};

