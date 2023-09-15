class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }

    removeFront(){
        if(this.head == null){
            return null
        } else {
            this.head = this.head.next
            return this.head
        }
    }

    front(){
        if(this.head == null){
            return null
        } else {
            return this.head.data
        }
    }

    contains(value){
        if(this.head == null){
            return false
        } else {
            let promise = this.head
            while(promise.next != null){
                if(promise.data == value){
                    return true
                }
                promise = promise.next
            }
            return false
        }
    }
    length(){
        if(this.head == null){
            return 0
        } else {
            let promise = this.head
            let count = 0
            while(promise){
                count++
                promise = promise.next
            }
            return count
        }
    }
    display(){
        if(this.head == null){
            return "No nodes in list"
        }else{
            let stringList = ""
            let promise = this.head
            while(promise){
                if(promise.next == null){
                    stringList += promise.data + ""
                    return stringList
                }
                stringList += promise.data + ","
                promise = promise.next
            }
            return stringList
        }
    }
    max(){
        if(this.head == null){
            return "No nodes in list"
        } else {
            let promise = this.head
            let maxNum = this.head.data
            while(promise){
                if(promise.data > maxNum){
                    maxNum = promise.data
                }
                promise = promise.next
            }
            return maxNum
        }
    }
    min(){
        if(this.head == null){
            return "No nodes in list"
        } else {
            let promise = this.head
            let minNum = this.head.data
            while(promise){
                if(promise.data < minNum){
                    minNum = promise.data
                }
                promise = promise.next
            }
            return minNum
        }
    }
    average(){
        if(this.head == null){
            return "No nodes in list"
        } else {
            let promise = this.head
            let length = 0
            let total = 0
            let average = 0
            while(promise){
                length++
                total += promise.data
                promise = promise.next
            }
            average = total/length
            return average
        }
    }
}

let SLL1 = new SLL()
console.log("addFront")
console.log(SLL1)
SLL1.addFront(19)
SLL1.addFront(22)
console.log(SLL1)
SLL1.addFront(34)
SLL1.addFront(45)
console.log(SLL1)
SLL1.addFront(5)
SLL1.addFront(6)
SLL1.addFront(10)
SLL1.addFront(20)
console.log(SLL1)
console.log("average")
console.log(SLL1.average())