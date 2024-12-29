
class MinHeap {
  constructor() {
    this.heapArr = [];
    this.length = 0;
  }

  returnAtIndex(index) {
    return this.heapArr[index];
  }

  insert(val) {
    this.heapArr.push(val);
    this.heapifyUp(this.length);
    this.length++;
  }

  pop() {
    if (this.length === 0) return -1;

    this.length--;
    const out = this.heapArr[0];
    const last = this.heapArr[this.length];

    if (this.length === 0) {
        this.heapArr = [];
        return out;
    }

    this.heapArr[0] = last;
    this.heapifyDown(0);
    this.heapArr.pop();
    return out;
  }

  // Helper methods
  getParent(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChild(index) {
    return (2 * index) + 1;
  }
  getRightChild(index) {
    return (2 * index) + 2;
  }
  swapParentChild(pVal, pIdx, cVal, cIdx) {
    this.heapArr[pIdx] = cVal;
    this.heapArr[cIdx] = pVal;
  }
  heapifyDown(index) {
    const leftIdx = this.getLeftChild(index);
    const rightIdx = this.getRightChild(index);
    if (index >= this.length || leftIdx >= this.length) return;

    const parentVal = this.heapArr[index];
    const leftVal = this.heapArr[leftIdx];
    const rightVal = rightIdx < this.length ? this.heapArr[rightIdx] : Infinity;

    if (parentVal > leftVal || parentVal > rightVal) {
      if (rightVal < leftVal) {
        // Right is smaller
        this.swapParentChild(parentVal, index, rightVal, rightIdx);
        this.heapifyDown(rightIdx);
      } else {
        // Left is smaller
        this.swapParentChild(parentVal, index, leftVal, leftIdx);
        this.heapifyDown(leftIdx);
      }
    }
  }

  heapifyUp(index) {
    if (index === 0) return;
    const parentIdx = this.getParent(index);
    const parentVal = this.heapArr[parentIdx];
    const value = this.heapArr[index];

    if (parentVal < value) return;
    if (parentVal > value) {
      this.swapParentChild(parentVal, parentIdx, value, index);
      this.heapifyUp(parentIdx);
    }
  }
}

var KthLargest = function (k, nums) {
  this.heap = new MinHeap();
  this.k = k;
  nums.forEach((num) => this.add(num));
};

KthLargest.prototype.add = function (val) {
  this.heap.insert(val);
  if (this.heap.length > this.k) {
      this.heap.pop();
  }
  return this.heap.returnAtIndex(0);
};