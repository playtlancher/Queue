class Queue {
    queue = [];
    addItem(item) {
        this.queue.push(item);
    }

    dequeue() {
        console.log(this.queue.shift())
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.queue.length;
    }
}

module.exports = Queue;