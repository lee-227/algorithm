## [Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)

1. 时间复杂度 O(logn) 空间复杂度O(logn)
```js
var myPow = function (x, n) {
  if (n == 0) return 1
  x = parseFloat(x)
  if (n < 0) {
    x = parseFloat(1 / x)
    n = -n
  }
  function helper(x, n) {
    if (n === 0) return 1
    let temp = helper(x, parseInt(n / 2))
    if (n % 2 == 1) {
      return temp * temp * x
    } else {
      return temp * temp
    }
  }
  return helper(x, n)
};
```

2. 时间复杂度 O(logn) 空间复杂度O(1)
```js
var myPow = function (x, n) {
  x = parseFloat(x)
  if (n < 0) {
    x = parseFloat(1 / x)
    n = -n
  }
  let ans = 1
  let temp = x
  while (n > 0) {
    if (n % 2 === 1) {
      ans = ans * temp
    }
    temp *= temp
    n = parseInt(n / 2)
  }
  return ans
};
```