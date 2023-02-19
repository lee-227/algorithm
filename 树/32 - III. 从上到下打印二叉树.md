## [32 - III. 从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

1. bfs 时间复杂度 o(n) 空间复杂度 o(n)
```ts
var levelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let nodeArr = [root];
    while (nodeArr.length) {
        let size = nodeArr.length;
        let arr = [];
        while(size) {
            let node = nodeArr.shift();
            if (res.length % 2) {
                arr.unshift(node.val)
            } else {
                arr.push(node.val)
            }
            if (node.left) {
                nodeArr.push(node.left)
            }
            if (node.right) {
                nodeArr.push(node.right)
            }
            size--;
        }
        res.push(arr);
    }
    return res;
};
```