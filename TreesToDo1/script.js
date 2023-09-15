
class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }
    add(val){
        if(this.root == null){
            this.root = new BTNode(val)
            return this
        } else {
            let runner = this.root
            while(runner != null){
                if(val > runner.val){
                    // go right
                    if(runner.right == null){
                        runner.right = new BTNode(val)
                        return this
                    }
                    runner = runner.right
                } else {
                    // go left
                    if(runner.left == null){
                        runner.left = new BTNode(val)
                        return this
                    }
                    runner = runner.left
                }
            }
            return this
        }
    }
    contains(val){
        if(this.root == null){
            return "Tree does not contain the " + val
        } else {
            let runner = this.root
            while(runner != null){
                if(val == runner.val){
                    return "Tree contains " + val
                } else {
                    if(val > runner.val){
                        runner = runner.right
                    } else {
                        runner = runner.left
                    }
                }
            }
            return "Tree does not contain the " + val
        }
    }
    min(){
        if(this.root == null){
            return "Tree is Null"
        } else {
            let runner = this.root
            while(runner.left != null){
                runner = runner.left
            }
            return "Smallest Number is " + runner.val
        }
    }
    max(){
        if(this.root == null){
            return "Tree is Null"
        } else {
            let runner = this.root
            while(runner.right != null){
                runner = runner.right
            }
            return "Largest Number is " + runner.val
        }
    }
    size(baseNode = this.root){
        if(baseNode == null){
            return 0
        } else {
            let leftNode = this.size(baseNode.left)
            let rightNode = this.size(baseNode.right)
            return leftNode + rightNode + 1
        }
    }

    isEmpty(){
        if(this.root == null){
            return "Tree is Empty"
        } else {
            return "Tree is not Empty"
        }
    }
}

console.log("Test Add")
let tree = new BST()
tree.add(10)
console.log(tree)
tree.add(5).add(15).add(7).add(12).add(20).add(1).add(6).add(8).add(110).add(13).add(-70).add(25).add(0).add(-1)
console.log(tree)

console.log("Test Contains Test")
console.log(tree.contains(10))
console.log(tree.contains(5))
console.log(tree.contains(50))
console.log(tree.contains(1))

console.log("Test Min")
console.log(tree.min())

console.log("Test Max")
console.log(tree.max())

console.log("Test Size")
console.log(tree.size())

console.log("Test isEmpty")
let tree2 = new BST()
console.log(tree.isEmpty())
console.log(tree2.isEmpty())
