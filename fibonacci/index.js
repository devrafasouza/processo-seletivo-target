function containsInFibonacci(number, a = 0, b = 1) {

  if(number === 0 || number === 1) {
    return true;
  }

  var nextNumber = a + b;

  if(nextNumber === number) {
    return true;
  }
  else if(nextNumber > number) {
    return false;
  }

 return containsInFibonacci(number, b, nextNumber);
}

const trueTestCase = 13;
const falseTestCase = 35;

const numberFibonacci = containsInFibonacci(trueTestCase);
const numberIsNotFibonacci = containsInFibonacci(falseTestCase);

console.log(`O numero ${trueTestCase} está na sequencia Fibonacci: ${numberFibonacci}`);
console.log(`O numero ${falseTestCase} está na sequencia Fibonacci: ${numberIsNotFibonacci}`);