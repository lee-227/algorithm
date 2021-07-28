## [跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)

1. 贪心，每次都走最大步数 时间复杂度o(n) 空间复杂度o(1)
```js
var jump = function (nums) {
  let max = 0
  let end = 0
  let step = 0
  for (let i = 0; i < nums.length-1; i++) {
    max = Math.max(max, i + nums[i])
    if (i === end) {
      step++
      end = max
    }
  }
  return step
};
```