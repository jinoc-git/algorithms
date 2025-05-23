function solution(scoville, K) {
    const minHeap = new MinHeap();
    for (const item of scoville) minHeap.add(item);
    
    let mixCount = 0;
    while (minHeap.size() >= 2 && minHeap.peek() < K) {
        const firstMin = minHeap.poll();
        const secondMin = minHeap.poll();
        
        const newFood = firstMin + (secondMin * 2);
        minHeap.add(newFood);
        mixCount++;
    }
    
    if (minHeap.peek() >= K) return mixCount;
    
    return -1;
}

class MinHeap {
    constructor() {
        this.heapContainer = [];
    }
    
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    
    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }
    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }
    
    leftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }
    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }
    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }
    
    swap(indexOne, indexTwo) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }
    peek() {
        if (this.heapContainer.length === 0) return null;
        return this.heapContainer[0];
    }
    poll() {
        if (this.heapContainer.length === 0) return null;
        if (this.heapContainer.length === 1) return this.heapContainer.pop();
        
        const item = this.heapContainer[0];
        
        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();
        
        return item;
    }
    add(item) {
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    }
    
    heapifyUp(customStartIndex) {
        let currentIndex = customStartIndex || this.heapContainer.length - 1;
        
        while (this.hasParent(currentIndex) && this.parent(currentIndex) > this.heapContainer[currentIndex]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }
    heapifyDown(customStartIndex = 0) {
        let currentIndex = customStartIndex;
        let nextIndex = null;
        
        while (this.hasLeftChild(currentIndex)) {
            const isRightChildSmallerThanLeftChild = this.rightChild(currentIndex) < this.leftChild(currentIndex);
            if (this.hasRightChild(currentIndex) && isRightChildSmallerThanLeftChild) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }
            
            if (this.heapContainer[currentIndex] < this.heapContainer[nextIndex]) {
                break;
            }
            
            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }
    
    size() {
        return this.heapContainer.length;
    }
}