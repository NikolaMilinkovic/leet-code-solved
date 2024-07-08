const diameterOfBinaryTree = (root) => {
  if(!root) return 0;
  let diameter = 0;

  function maxDepth(root){
      if(!root) return 0;
      let left = maxDepth(root.left);
      let right = maxDepth(root.right);
      diameter = Math.max(diameter, left + right);
      return 1 + Math.max(left, right);
  }

  maxDepth(root);
  return diameter
};