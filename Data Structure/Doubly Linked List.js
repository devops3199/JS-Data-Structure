class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let new_node = new Node(val);
        
        if(!this.head) {
            this.head = new_node;
            this.tail = this.head;
        } else {
            this.tail.next = new_node;
            new_node.prev = this.tail;
            this.tail = new_node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return undefined;
        }

        let pop_node = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = pop_node.prev;
            this.tail.next = null;
            pop_node.prev = null;
        }

        this.length--;
        return pop_node
    }
}

let dlink = new DoublyLinkedList();
dlink.push(1);
dlink.push(2);
dlink.push(3);
console.log(dlink.pop());
console.log(dlink);