const isBalanced = (root) => {
  if(!root) return 1;
  let left = isBalanced(root.left);
  let right = isBalanced(root.right);

  if(left === false || right === false) return false;
  if(Math.abs(left - right) > 1) return false;

  return Math.max(left, right) + 1;
};