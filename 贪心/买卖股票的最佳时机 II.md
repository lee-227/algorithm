## [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)

1. 动规 时间复杂度o(n) 空间复杂度o(1)
```js
var maxProfit = function (prices) {
  if (!prices.length || prices.length == 1) return 0
  let dp_i_0 = 0
  let dp_i_1 = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i])
  }
  return dp_i_0
};
```
2. 贪心算法 时间复杂度o(n) 空间复杂度o(1)
```js
var maxProfit = function (prices) {
  if (!prices.length || prices.length == 1) return 0
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      res+=prices[i] - prices[i - 1]
    }
  }
  return res
};
```

3. 暴力递归所有清空
```js
var maxProfit = function (prices) {
  let res = 0
  let len = prices.length
  function dfs(index, status, cr) {
    if (index === len) {
      return res = Math.max(res, cr)
    }
    dfs(index + 1, status, cr)
    if (status === 0) {
      dfs(index + 1, 1, cr - prices[index])
    } else {
      dfs(index + 1, 0, cr + prices[index])
    }
  }
  dfs(0, 0, 0)
  return res
};
```