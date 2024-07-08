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
 * @return {number}
 */

// Solution #1
const maxDepth = (root) => {
  let maxDepth = 1;

  let BFS = (node, depth) => {
    if(node === null) return 

    if(depth > maxDepth) maxDepth = depth
    BFS(node.left, depth + 1)
    BFS(node.right, depth + 1)
  }

  BFS(root, maxDepth)
  console.log(`Max depth of given BST is: ${maxDepth}`)
  return maxDepth;
};

// More optimized solution > Math.max
const maxDepth3 = (root) => {
  if(!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}