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
 * @return {TreeNode}
 */

function walk(node) {
  if(!node) return null;
  const temp = node.left;
  node.left = node.right;
  node.right = temp;

  walk(node.left);
  walk(node.right);
  return node;
}
const invertTree = (root) => {
  return walk(root);
};