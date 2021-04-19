class PriorityQueue {
  static LEFT = i => 2 * i + 1;
  static RIGHT = i => 2 * i + 2;
  static PARENT = i => Math.floor((i + 1) / 2) - 1;

  constructor(comparator) {
    this._comparator = comparator;
    this._heap = [];
  }

  push(val) {
    this._heap.push(val);
    this._shiftUp(this._heap.length - 1);
  }

  pop() {
    this._swap(0, this._heap.length - 1);
    const elem = this._heap.pop();
    this._shiftDown(0);

    return elem;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  _shiftUp(idx) {
    let parent = PriorityQueue.PARENT(idx);

    while (parent > -1 && this._comparator(this._heap[idx], this._heap[parent]) < 0) {
      this._swap(idx, parent);
      idx = parent;
      parent = PriorityQueue.PARENT(idx);
    }
  }

  _shiftDown(i) {
    let maxI = i;
    let leftI = PriorityQueue.LEFT(i);
    let rightI = PriorityQueue.RIGHT(i);

    if (leftI < this._heap.length && this._comparator(this._heap[leftI], this._heap[maxI]) < 0) {
      maxI = leftI;
    }
    if (rightI < this._heap.length && this._comparator(this._heap[rightI], this._heap[maxI]) < 0) {
      maxI = rightI;
    }

    if (maxI !== i) {
      this._swap(i, maxI);
      this._shiftDown(maxI);
    }
  }

  _swap(i, j) {
    const tmp = this._heap[i];

    this._heap[i] = this._heap[j];
    this._heap[j] = tmp;
  }
}
