class Node{
 constructor(val){
    this.val=val;
    this.next=null;
 }
}


class LinkedList{
    constructor(){
        this.head=null
    }

    append(val){
        const newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            return ;
        }
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode;
    }

    delete(val){
        if(!this.head) return ;
        if(this.head.val==val){
            this.head=this.head.next;
            return;
        }

        let curr = this.head;
        while(curr.next && curr.next.val!==val){
            curr=curr.next;
        }
        if(curr.next) curr.next=curr.next.next;
    }

    print() {
        let current = this.head;
        let output = [];
        while (current) {
            output.push(current.val);
            current = current.next;
        }
        console.log(output.join(" -> "));
    }
}

// Example usage:
const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.print(); // Output: 10 -> 20 -> 30

// Example for delete:
ll.delete(20);
ll.print(); // Output: 10 -> 30

ll.delete(10);
ll.print(); // Output: 30

ll.delete(30);
ll.print(); // Output: 


