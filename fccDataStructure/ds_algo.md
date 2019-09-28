# DATA STRUCTERS

---

- essential ingredients in creating fast and powerful algorithms.
- a way to organize data in an efficient way
- make code cleaner and easier to understand

# Abstract data type vs data structures

An abstract data type( ADT) is an abstraction of a data structure which provides only the interface to which a data structure must adhere to.
in other words, a group of lookalike data structures

Examples:

| ADT     | Data Structure                                                |
| ------- | ------------------------------------------------------------- |
| List    | Linked List, Dynamic Array                                    |
| Queue   | Array based Queue, Stack based Queue, Linked List based Queue |
| Map     | Tree Map, Hash Map                                            |
| Vehicle | Car, Bike, Bicycle                                            |

# Big-O tells us the upper bound ( worst case)

n - The size of the input

|                  |              |
| ---------------- | :----------: |
| Constant Time    |     O(1)     |
| Logarithmic Time |  O(log(n))   |
| Linear Time      |     O(n)     |
| Quadratic Time   |    O(n^2)    |
| Cubic Time       |    O(n^3)    |
| Exponential Time | O(b^n), b> 1 |
| Factorial Time   |    O(n!)     |

# Static and Dynamic Arrays

- static array is a fixed length container containing n elements `indexable` from the range [0, n-1]
- indexing means to put a number label onto an element so you can reference it later

When is it used?

- storing /accessing sequential data
- temporarily storing objects
- used by IO routines and buffers
- lookup tables and inverse lookup tables
- can be used to return multiple values from a function
- used in dynamic programming to cache answers to subproblems

CoinChange, Napsack problems

# Complexity

|           | Static Array | Dynamic Array |
| --------- | :----------: | :-----------: |
| Access    |     O(1)     |     O(1)      |
| Search    |     O(n)     |     O(n)      |
| Insertion |     N/A      |     O(n)      |
| Appending |     N/A      |     O(1)      |
| Deletion  |     N/A      |     O(n)      |

- Adding/Deleting to and from a static array does not make sense because the size does not change

# Dynamic Arrays

- can grow and shrink in size

Q: How can we implement a dynamic array?
A: One way is to use a static array!

1. create a static array with an initial capacity.
2. Add eleemnts to the underlying static array, once it's full, create a new array
3. copy old array to new array, add new element

```
class Array{
    constructor(capacity=1){
        this.length=0;
        this.capacity=capacity;
        this.content={}
    }
    push(element){
        if(this.length>=this.capacity){
            this.resize()
        }
        this.content[this.length]=element
        this.length++
    }
    resize(){
        const newArray = new Array(this.capacity*2)
        for(let key of this.content){
            newArray[key]=this.content[key]
        }
        this=newArray
    }
    peek(index){
        return this.content[index]
    }
    pop(){
        if(this.length<this.capacity/2){
            this.capacty /= 2
        }
        delete this.content[this.length-1]
        this.length--
    }
}
```

# Linked Lists

- Singly
- Doubly

* A linked list is a sequential list of nodes that hold data which point to ohter nodes also containing data.

[data]->[data]->[data]->null

- used in List, Queue, Stack implementation
- great for creating circular lists
- easily model real world objects such as trains
- used in separate chaining, which is present certain Hashtable implementations to deal with hashing collisions
- often used in the implementation of adjacency lists for graphs

* Terminology

- Head: the first node
- Tail: the last node
- Pointer: reference to another node
- Node: an object containing data and pointer to the next node

|                  | Singly | Doubly |
| ---------------- | ------ | ------ |
| Search           | O(n)   | O(n)   |
| Insert at head   | O(1)   | O(1)   |
| Insert at tail   | O(1)   | O(1)   |
| Remove at head   | O(1)   | O(1)   |
| Remove at tail   | O(n)   | O(1)   |
| Remove in middle | O(n)   | O(n)   |

```
class Node{
    constructor(value=0){
        value=value
        next=null
        prev=null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null
        this.tail=this.head
        this.size=0
    }
    add(element){
        const newNode= new Node(element)
        if(ths.isEmpty()){
            this.head=newNode
            this.tail=this.head
            this.size++
        }else{
            this.tail=new
        }
    }
    insertAt(element,location){
        const newNode = new Node(element)
        for(let i =0; i< location;i++){
            let currentNode=this.head
            if(i+1=location){
                let nextNode=currentNode.next
                currentNode.next=newNode
                newNode.next=nextNode
                this.size++
            }
        }
    }
    isEmpty(){
        return this.size===0
    }
    size(){
        return this.size
    }
    printList(){

    }
    remove(element){

    }
}
```
