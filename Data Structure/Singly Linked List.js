class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let new_node = new Node(val);
        // 비어있으면
        if (!this.head) {
            this.head = new_node;
            this.tail = this.head;
        } else {
            this.tail.next = new_node; // 연결 시켜주고 다음 요소에 Tail 부여
            this.tail = new_node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return undefined;
        }

        let current_node = this.head;
        let new_tail = current_node;

        while(current_node.next) {
            new_tail = current_node;
            current_node = current_node.next;
        }

        this.tail = new_tail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current_node;
    }

    print_all() {
        let current_node = this.head;

        while(current_node) {
            console.log(current_node.val);
            current_node = current_node.next;
        }
    }
    // 앞에서 제거
    shift() {
        if(!this.head) {
            return undefined;
        }

        let shift_node = this.head;
        this.head = this.head.next;
        this.length--;

        return shift_node;
    }
    // 앞으로 추가
    unshift(val) {
        let new_node = new Node(val);

        if(!this.head) {
            this.head = new_node;
            this.tail = this.head;
        } else {
            new_node.next = this.head;
            this.head = new_node;
        }
        this.length++;
        return new_node;
    }
    // 조회
    get(index) {
        if (index >= this.length || index < 0) {
            return undefined;
        }

        let current_node = this.head;
        let count = 0;

        while(true) {
            if(count === index) {
                break;
            }
            current_node = current_node.next;
            count++;
        }

        return current_node;
    }
    // 수정
    set(index, val) {
        let selected_node = this.get(index);
        if(selected_node !== undefined) {
            selected_node.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if(index == this.length) {
            this.push(val);
            return true;
        }

        if(index == 0) {
            this.unshift(val);
            return true;
        }

        let previous_node = this.get(index - 1);
        let current_node = previous_node.next;
        let new_node = new Node(val);

        previous_node.next = new_node;
        new_node.next = current_node;
        this.length++;
        return true;

    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }

        if(index === 0) {
            return this.shift();
        }

        if(index === this.length - 1) {
            return this.pop();
        }

        let previous_node = this.get(index - 1);
        let current_node = previous_node.next;
        let next_node = current_node.next;

        current_node.next = null;
        previous_node.next = next_node;
        this.length--;
        return current_node;
    }

    reverse() {
        let current_node = this.head;
        this.head = this.tail;
        this.tail = current_node;

        let previous_node = null;
        let next_node = null;

        for(let i = 0; i < this.length; i++) {
            next_node = current_node.next;
            current_node.next = previous_node;
            previous_node = current_node;
            current_node = next_node;
        }
        //   1     ->      2      ->      3      ->   4
        //  Tail                                     Head
        //  ==== LOOP 1 ======
        // Current        Next
        //   1 -> prev(null)
        //  Prev        Current
        //  ==== LOOP 2 ======
        //              Current          Next
        //  null <- 1 <- 2  = current_node.next (2) <- previous_node (1)
        //                Prev           Current
        //  ==== LOOP 3 ======
        //                Prev            Current      Next
        //  null <- 1 <- 2 <- 3 = current_node.next (3) <- previous_node (2)
        //                                  Prev      Current
        //  ==== LOOP 4 ======
        //                                  Prev      Current
        //  null <- 1 <- 2 <- 3 <- 4 = current_node.next (4) <- previous_node (3)
        //                                              Prev     
        return this;
    }
}