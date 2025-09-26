class Stack {
    constructor(){
        this.items=[];
        this.len=0;
    }

    push(val){
        this.items[this.len]=val;
        this.len++;
    }

    pop(){
        if(this.len===0) throw new Error("Stack is empty");
        this.len--;
        return this.items[this.len];
    }

    peek(){
        if(this.len===0)  throw new Error("Stack is empty");
        return this.items[this.len-1];
    }

    isEmpty(){
        return this.len==0;
    }
}

const st= new Stack();
console.log(st.push(5));      // undefined, but shows action
console.log(st.push(10));     // undefined
console.log(st.pop());        // 10
console.log(st.push(20));     // undefined
console.log(st.peek());       // 20
console.log(st.isEmpty());    // false
console.log(st.pop());        // 20
console.log(st.pop());        // 5
console.log(st.isEmpty());    // true
// st.pop();