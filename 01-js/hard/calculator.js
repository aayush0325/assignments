/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result){
    this.result = result;

  }

  add(x){
    this.result+=x;
  }

  subtract(x){
    this.result -=x;
  }

  divide(x){
    if(x==0){
      console.log('invalid input');
    }
    else{
      this.result = this.result/x;
    }
  }

  multiply(x){
    this.result*=x;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }
  calculate(expression){
        // Remove all extra spaces
        let cleanedExpression = expression.replace(/\s+/g, '');
    
        // Validate the expression contains only valid characters (digits, operators, parentheses)
        if (!/^[\d+\-*/().]+$/.test(cleanedExpression)) {
            throw new Error("Invalid characters in the expression");
        }
        
        try {
            // Evaluate the cleaned expression
            let result = eval(cleanedExpression);
            return result;
        } catch (error) {
            throw new Error("Invalid arithmetic expression");
        }
      }
}

module.exports = Calculator;
