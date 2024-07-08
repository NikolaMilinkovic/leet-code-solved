const isSubtree = (root, subRoot) => {
  if(!root || !subRoot) return false;
  if(root.val === subRoot.val && compareTrees(root, subRoot)){
      return true;
  }

  function compareTrees(node_1, node_2){
      if(!node_1 && !node_2) return true;
      if(!node_1 || !node_2) return false;
      if(node_1.val !== node_2.val) return false;
      return compareTrees(node_1.left, node_2.left) && compareTrees(node_1.right, node_2.right);
  }

return isSubtree(root.right, subRoot) || isSubtree(root.left, subRoot)
};