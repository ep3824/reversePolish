/*

I: String of numbers and operators
O: Number that results from the expression
C: x
E: x


*/

//split the string into array
  //iterate over array and add each item to stack
  //when the loop hits a operator, do the operation, update stack
  //at end of string array, return the number



const calculateRPN = function(stringExp) {
    let stack = [];
    let mathObj = {
        '+': function(stack) { return stack[1] = stack[1] + stack[0] },
        '-': function(stack) { return stack[1] = stack[1] - stack[0] },
        'x': function(stack) { return stack[1] = stack[1] * stack[0] },
        '*': function(stack) { return stack[1] = stack[1] * stack[0] },
        '/': function(stack) { return stack[1] = stack[1] / stack[0] }
    }
    let stringArr = stringExp.split(' ');
    for (let i = 0; i < stringArr.length; i++) {
        let current = stringArr[i];
        //if current element is a number
        if (!isNaN(current)) {
            stack.push(Number(current))
        }
        if (isNaN(current)) {
            //get mathObj functions to work here
            console.log(stack)
            // stack.shift()
        }
    }
    return stack;
}






// Test Cases:
console.log(calculateRPN('5 1 2 + 4 × + 3 −')) //14
// console.log(calculateRPN('1 2 + 4 5 6 8 * - + +')) //-36