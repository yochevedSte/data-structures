var Stack = function(){
    this.stack = [];
  
    this.print = function(){
      console.log(this.stack);
    }
      
    this.push = function(x){
      this.stack[this.stack.length] = x;
    }
      
    this.isEmpty = function(){
      return this.stack.length == 0;
    }
      
    this.peek = function(){
        if (!this.isEmpty())
             return  this.stack[this.stack.length-1];
         return null;
    }
      
    this.pop = function(){
        if(!this.isEmpty()){
             var x = this.stack[this.stack.length-1];
            this.stack.splice(this.stack.length-1, 1);
            return x;
        }
        return null;

    }
  }
  
  
  //Use this code to test your stack:
  
 
  var MinValueStack = function() {
    this.stack = [];
    this.minValues = new Stack();

    this.print = function() {
        console.log(this.stack);
    }

    this.push = function(x) {
        this.stack[this.stack.length] = x;
        //below we added code for storing the minimum value
        if (x < this.getMin() || this.getMin() == null) {
            this.minValues.push(x);
        }
    }

    this.isEmpty = function() {
        return this.stack.length == 0;
    }

    this.peek = function() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1]
        }
        return null;
    }

    this.pop = function() {
        //below the code has been modified to make sure the minimum value is 
        //also popped from minValue if it is popped form the main stack
        if (!this.isEmpty()) {
            if (this.peek() == this.getMin()) {
                this.minValues.pop();
            }
            return this.stack.splice(this.stack.length - 1, 1);
        }
        return null;
    }

    this.getMin = function() {
        if (!this.isEmpty()) {
            return this.minValues.peek();
        }
        return null;
    }
}


var myStack = new MinValueStack();
console.log(myStack.isEmpty());    //true
console.log(myStack.print());      //[]
console.log(myStack.push(2));      
console.log(myStack.isEmpty());     //false
console.log(myStack.push(4));      
console.log(myStack.print());      //[2,4]
console.log(myStack.getMin());
console.log(myStack.peek());       //4
console.log(myStack.pop());        //4
console.log(myStack.pop());        //2
console.log(myStack.peek());       //null
console.log(myStack.isEmpty());    //tru
