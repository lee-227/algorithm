## [N叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)

1. 递归 时间复杂度O(n) 空间复杂度O(n)
```js
var preorder = function (root) {
  let res = []
  function dg(root) {
    if (!root) return
    res.push(root.val)
    for (let i = 0; i < root.children.length; i++) {
      dg(root.children[i])
    }
  }
  dg(root)
  return res
};
```

2. 迭代 时间复杂度O(n) 空间复杂度O(n)
```js
var preorder = function (root) {
  let res = []
  if(!root) return res
  let stack = [root]
  while (stack.length) {
    let node = stack.pop()
    res.push(node.val)
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i])
    }
  }
  return res
};
```