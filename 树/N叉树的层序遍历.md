## [N叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/) 

1. 时间复杂度O() 空间复杂度O(n)
```js
var levelOrder = function (root) {
  if (!root) return []
  let res = []
  let stack = [root]
  while (stack.length) {
    let n = stack.length
    let arr = []
    for (let i = 0; i < n; i++) {
      let node = stack.shift()
      arr.push(node.val)
      for (let j = 0; j < node.children.length; j++) {
        stack.push(node.children[j])
      }
    }
    res.push(arr)
  }
  return res
};
```

2. 递归 时间复杂度O(n) 空间复杂度O(n)
```js
var levelOrder = function (root) {
  if (!root) return []
  let res = []
  function dfs(root, level) {
    if (!root) return
    res[level] = res[level] || []
    res[level].push(root.val)
    root.children.forEach(i => {
      dfs(i, level + 1)
    })
  }
  dfs(root, 0)
  return res
};
```