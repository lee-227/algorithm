## [剑指 Offer 33. 二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)

1. 时间复杂度o(n) 空间复杂度o(n)
```ts
function verifyPostorder(postorder: number[]): boolean {
    function traverse(left, right) {
        if (left > right) return true;
        let root = postorder[right];
        let l = left;
        while(l < right && postorder[l] < root) {
            l++;
        }
        let r = l;
        while(r < right && postorder[r] > root) {
            r++;
        }
        if (r !== right) return false;
        return traverse(left, l - 1) && traverse(l, r - 1)
    }
    return traverse(0, postorder.length - 1)
};
```