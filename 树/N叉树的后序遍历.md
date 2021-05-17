## [N叉树的后序遍历](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)

1. 递归 时间复杂度O(n) 空间复杂度O(n)
```js
var postorder = function (root) {
  let res = []
  function dg(root) {
    if (!root) return
    for (let i = 0; i < root.children.length; i++) {
      dg(root.children[i])
    }
    res.push(root.val)
  }
  dg(root)
  return res
};
```

2. 迭代 时间复杂度O(n) 空间复杂度O(n)
```js
var postorder = function (root) {
  let res = []
  if(!root) return res
  let stack = [root]
  while (stack.length) {
    let node = stack.pop()
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i])
    }
    res.unshift(node.val)
  }
  return res
};
```