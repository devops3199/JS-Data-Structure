/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // 1. root === null return 0;
  // 2. root.val < L, only recurse to right
  // 3. root.val > R, only recurse to left
  // 4. isBetween, root.val + left + right

  if (root === null) {
    return 0;
  } else if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  } else if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  } else {
    return (
      rangeSumBST(root.left, low, high) +
      root.val +
      rangeSumBST(root.right, low, high)
    );
  }
};
