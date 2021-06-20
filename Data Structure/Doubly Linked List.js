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
        let newNode = new Node(val);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
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

    shift() {
        if(this.length === 0) return undefined;

        let oldhead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.head = oldhead.next;
        this.head.prev = null;
        oldhead.next = null;
        
        this.length--;
        return oldhead;
    }

    unshift(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let count, current;

        if(index <= this.length/2) {
            count = 0;
            current = this.head;

            while(count != index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1; 
            current = this.tail;

            while(count != index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);

        if(foundNode != null) {
            foundNode.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;

        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }
}

let dlink = new DoublyLinkedList();
dlink.push(1);
dlink.push(2);
dlink.push(3);
console.log(dlink.unshift(7));