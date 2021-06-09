## [全排列 II](https://leetcode-cn.com/problems/permutations-ii/)

1. 时间复杂度：O(n×n!)  空间复杂度：O(n)
```js
var permuteUnique = function (nums) {
  let res = []
  let visited = new Array(nums.length).fill(false)
  function fn(idx, arr) {
    if (idx === nums.length) {
      res.push([...arr])
      return
    }
    for (let i = 0; i < nums.length; ++i) {
      if (visited[i] || (i > 0 && nums[i - 1] === nums[i] && !visited[i - 1])) continue
      arr.push(nums[i])
      visited[i] = true
      fn(idx + 1, arr)
      arr.pop()
      visited[i] = false
    }
  }
  nums.sort((a, b) => a - b)
  fn(0, [])
  return res
};
```