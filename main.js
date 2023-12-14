function queueFull() {
    const Queue = require("./Queue");
    queueF = new Queue();
    queueF.addItem("Hello");
    queueF.addItem("World");
    queueF.addItem("End!");
    console.log(queueF.size())
    console.log(queueF.isEmpty())
    queueF.dequeue();
    queueF.dequeue();
    queueF.dequeue();
    console.log(queueF.isEmpty())
}

queueFull();