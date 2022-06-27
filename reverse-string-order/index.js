function reverseOrderString (string) {
  var newStringReversed = '';

  for (var count = string.length - 1; count >= 0; count--) {
    newStringReversed += string[count];
  }
  return newStringReversed;
  
}

var oldString = 'i love target'

const newString = reverseOrderString(oldString);

console.log(`Valor da string antiga: ${oldString}`);
console.log(`Valor da string nova: ${newString}`);


