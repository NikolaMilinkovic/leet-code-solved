const isSameTree = (tree1, tree2) => {
  if(!tree1 && !tree2) return true;
  if(!tree1 || !tree2) return false;
  if(tree1.val === tree2.val){
    return (isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right))
  } else {
      return false;
  }
};