## [剑指 Offer 26. 树的子结构](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/)

1. 递归 时间复杂度o(MN) 空间复杂度o(M)
```ts
var isSubStructure = function(A, B) {
    if (!A || !B) return false;
    return helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
const helper = (A, B) => {
    if (!B) return true;
    if (!A || A.val !== B.val) return false;
    return helper(A.left, B.left) && helper(A.right, B.right)
}
```