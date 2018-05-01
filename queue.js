var Queue = function () {
    this.queue = [];


    this.print = function () {
        console.log(this.queue);
    }

    this.isEmpty = function () {
        return this.queue.length == 0;
    }
    this.enqueue = function (x) {
        this.queue[this.queue.length] = x;
        return x;
    }

    this.dequeue = function () {
        if (!this.isEmpty()) {
            var x = this.queue[0];
            this.queue.splice(0, 1);
            return x;
        }
        return null;
    }

    this.peek = function () {
        if (!this.isEmpty()) {
            return this.queue[0];
        }
        return null;
    }

    this.maxValue = function(){
        var max = -1;
        var x;
        var newQueue = new Queue();
       while(x = this.dequeue())
        {
            if(x>max)
                max = x;
            newQueue.enqueue(x);
        }

        this.queue = newQueue.queue;
        return max;
    }

    this.dequeueMax = function(){
        var max = this.maxValue();
        var newQueue = new Queue();
        var x;
        while(x = this.dequeue())
        {
            if(x != max)
                newQueue.enqueue(x);
        }

        this.queue = newQueue.queue;
        return max;
    }
}

var myStack = new Queue();
console.log(myStack.isEmpty());    //true
myStack.print();      //[]
console.log(myStack.enqueue(2));
console.log(myStack.isEmpty());     //false
console.log(myStack.enqueue(3));
console.log(myStack.enqueue(1));
console.log(myStack.enqueue(10));
console.log(myStack.enqueue(1));
console.log(myStack.enqueue(8));
myStack.print();      //[2,4]
console.log("max = " + myStack.maxValue());
//console.log(myStack.getMin());
myStack.print(); 
console.log(myStack.peek());       //2
console.log(myStack.dequeueMax());   
myStack.print();  
console.log("max = " + myStack.maxValue());  
 
console.log(myStack.dequeueMax()); 
myStack.print();
       //4
console.log("max = " + myStack.maxValue());
console.log(myStack.peek());       //null
console.log(myStack.isEmpty()); 

//true