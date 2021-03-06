/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**

给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

https://leetcode-cn.com/problems/path-sum/description/

 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    var isExit = false,
        isStillRightRoot = true,
        tmpRoot = null,
        tmpVal = undefined,
        stack = [root];
    
    // 只有一个节点的情况
    if (root.val === sum && root.left === null && root.right === null) {
        return true;
    } else {
        tmpVal = root.val;
    }

    while(sum !== tmpVal) {


        if (root.left !== null && root.left.hasCheck) {
            root.left.hasCheck = true;
            tmpRoot = root.left;
            stack.push(root.left)
        } else if (root.right !== null && root.left.hasCheck) {
            root.right.hasCheck = true;
            tmpRoot = root.right;
            stack.push(root.right)
        } else {
            tmpRoot = stack.shift();
            continue;
        }

        tmpRoot = root.left || root.right;
        return false; 
    }


};