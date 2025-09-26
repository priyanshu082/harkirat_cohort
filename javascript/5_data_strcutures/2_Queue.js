class Queue{
    constructor(){
        this.items=[];
        this.head=0;
        this.tail=0;
    }
    enqueue(val){
        this.items[this.tail++]=val;
    }

    dequeue(){
        if(this.isEmpty()) return null; 
        const value = this.items[this.head];
        this.head++;
        return value;
    }

    front(){
        if(this.isEmpty()) return null;
        return this.items[this.head];
    }

    isEmpty(){
        return this.head===this.tail;
    }
}

const q = new Queue();
q.enqueue(5);
q.enqueue(10);
console.log(q.dequeue()); // 5
console.log(q.front());   // 10
console.log(q.isEmpty()); // false
console.log(q.dequeue()); // 10
console.log(q.isEmpty()); // true


