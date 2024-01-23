import Utils from './index';

console.log('checking isString:::')
console.log(Utils.isString('abc'));      // true
console.log(Utils.isString('Hello'));    // true
console.log(Utils.isString('12345'));    // true
console.log(Utils.isString('!@#'));      // true
console.log(Utils.isString('Hello 123')); // true

// Usage examples:
console.log('checking isNumber:::')
console.log(Utils.isNumber(42));       // true
console.log(Utils.isNumber('42'));     // false
console.log(Utils.isNumber(true));     // false
console.log(Utils.isNumber(NaN));      // false
console.log(Utils.isNumber(null));     // false

// Usage examples:
console.log('checking isObject:::')
console.log(Utils.isObject({ name: 'John', age: 30 })); // true
console.log(Utils.isObject([1, 2, 3]));                // false
console.log(Utils.isObject('Hello'));                 // false


// Usage examples:
console.log('checking isArray:::')
console.log(Utils.isArray([1, 2, 3]));      // true
console.log(Utils.isArray({ name: 'John' })); // false
console.log(Utils.isArray('Hello'));         // false

// Usage examples:
console.log('checking isBoolean:::')
console.log(Utils.isBoolean(true));  // true
console.log(Utils.isBoolean(false)); // true
console.log(Utils.isBoolean(0));     // false
console.log(Utils.isBoolean('true')); // false

// Usage examples:
console.log('checking isNull:::')
console.log(Utils.isNull(null));          // true
console.log(Utils.isNull(undefined));     // false
console.log(Utils.isNull('Hello'));       // false
console.log(Utils.isNull({}));            // false
console.log(Utils.isNull(42));            // false

// Usage examples:
console.log('checking isNotNull:::')
console.log(Utils.isNotNull(null));          // false
console.log(Utils.isNotNull(undefined));     // true
console.log(Utils.isNotNull('Hello'));       // true
console.log(Utils.isNotNull({}));            // true
console.log(Utils.isNotNull(42));            // true


// Usage examples:
console.log('checking isUndefined:::')
console.log(Utils.isUndefined(undefined)); // true
console.log(Utils.isUndefined(null));      // false
console.log(Utils.isUndefined('Hello'));   // false
console.log(Utils.isUndefined({}));        // false
console.log(Utils.isUndefined(42));        // false

// Usage examples:
console.log('checking isNotUndefined:::')
console.log(Utils.isNotUndefined(undefined)); // false
console.log(Utils.isNotUndefined(null));      // true
console.log(Utils.isNotUndefined('Hello'));   // true
console.log(Utils.isNotUndefined({}));        // true
console.log(Utils.isNotUndefined(42));        // true

// Usage examples:
console.log('checking isDate:::')
console.log(Utils.isDate(new Date()));               // true
console.log(Utils.isDate('2023-10-04T12:00:00Z'));   // false
console.log(Utils.isDate(1633320000000));            // true
console.log(Utils.isDate({ date: new Date() }));     // false

// Usage examples:
console.log('checking isMax:::')
console.log(Utils.isMax("dasds", 10)); // false
console.log(Utils.isMax(15, 10)); // true
console.log(Utils.isMax("sdfgesdfgr", 10)); // true

// Usage examples:
console.log('checking isMin:::')
console.log(Utils.isMin("dasds", 10)); // true
console.log(Utils.isMin(15, 10)); // false
console.log(Utils.isMin("sdfgesdfgr", 10)); // true

// Usage examples:
console.log('checking isAlphaNumeric:::')
console.log(Utils.isAlphaNumeric('abc123'));   // true
console.log(Utils.isAlphaNumeric('Hello123')); // true
console.log(Utils.isAlphaNumeric('12345'));    // true
console.log(Utils.isAlphaNumeric('!@#'));      // false
console.log(Utils.isAlphaNumeric('Hello 123')); // false

// Usage examples:
console.log('checking isAlphabetic:::')
console.log(Utils.isAlphabetic('abc'));      // true
console.log(Utils.isAlphabetic('Hello'));    // true
console.log(Utils.isAlphabetic('12345'));    // false
console.log(Utils.isAlphabetic('!@#'));      // false
console.log(Utils.isAlphabetic('Hello 123')); // false

// Usage examples:
console.log('checking isUpperCase:::')
console.log(Utils.isUpperCase('HELLO'));   // true
console.log(Utils.isUpperCase('Hello'));   // false
console.log(Utils.isUpperCase('12345'));   // true (non-alphabetic characters are ignored)
console.log(Utils.isUpperCase(''));        // true (empty string is considered uppercase)

// Usage examples:
console.log('checking isLowerCase:::')
console.log(Utils.isLowerCase('hello'));   // true
console.log(Utils.isLowerCase('Hello'));   // false
console.log(Utils.isLowerCase('12345'));   // true (non-alphabetic characters are ignored)
console.log(Utils.isLowerCase(''));        // true (empty string is considered lowercase)

// Usage examples:
console.log('checking isTitleCase:::')
console.log(Utils.isTitleCase('Hello World'));    // true
console.log(Utils.isTitleCase('This Is A Test')); // true
console.log(Utils.isTitleCase('This is a Test')); // false
console.log(Utils.isTitleCase('hello world'));    // false

// Usage examples:
console.log('checking isSentenceCase:::')
console.log(Utils.isSentenceCase('Hello world.'));   // true
console.log(Utils.isSentenceCase('This is a test.')); // true
console.log(Utils.isSentenceCase('this is a test.')); // false
console.log(Utils.isSentenceCase('Hello World.'));   // false

console.log('checking isJson:::')
console.log(Utils.isJson('{"name": "John", "age": 30}')); // true
console.log(Utils.isJson('invalid-json'));                // false

// Usage examples:
console.log('checking isEmpty:::')
console.log(Utils.isEmpty(null));                 // true
console.log(Utils.isEmpty(undefined));            // true
console.log(Utils.isEmpty(''));                   // true
console.log(Utils.isEmpty([]));                   // true
console.log(Utils.isEmpty({}));                   // true
console.log(Utils.isEmpty({ key: 'value' }));     // false
console.log(Utils.isEmpty('Hello, world!'));      // false
console.log(Utils.isEmpty([1, 2, 3]));            // false

// Usage examples:
console.log('checking isSameString:::')
console.log(Utils.isSameString('Hello', 'Hello'));     // true (case-sensitive)
console.log(Utils.isSameString('Hello', 'hello'));     // false (case-sensitive)
console.log(Utils.isSameString('Hello', 'hello', false)); // true (case-insensitive)
console.log(Utils.isSameString('Hello', 'World', false)); // false (case-insensitive)

// Usage examples:
console.log('checking isIn:::')
const numbers = [1, 2, 3, 4, 5];
console.log(Utils.isIn(numbers, 3)); // true
console.log(Utils.isIn(numbers, 6)); // false

const fruits = ['apple', 'banana', 'cherry'];
console.log(Utils.isIn(fruits, 'banana')); // true
console.log(Utils.isIn(fruits, 'grape'));  // false


// Usage examples:
console.log('checking sort:::')
var data = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
  ];
  
  // Sort by name in ascending order
  const sortedByName = Utils.sort(data, 'name', true);
  
  // Sort by age in descending order
  const sortedByAge = Utils.sort(data, 'age', false);
  
  console.log(sortedByName);
  console.log(sortedByAge);

// Conversion method example
// Usage examples:
console.log('checking toAlphaNumeric:::')
console.log(Utils.toAlphaNumeric('Hello123!')); // "Hello123"
console.log(Utils.toAlphaNumeric('Hello_World')); // "HelloWorld"


// Usage examples:
console.log('checking toAlphabetic:::')
console.log(Utils.toAlphabetic('Hello123!')); // "Hello"
console.log(Utils.toAlphabetic('Hello_World')); // "HelloWorld"

console.log('checking toTitleCase:::')
console.log(Utils.toTitleCase('hello world')); // "Hello World"
console.log(Utils.toTitleCase('this IS a TEST')); // "This Is A Test"

// Usage examples:
console.log('checking toSentenceCase:::')
console.log(Utils.toSentenceCase('hello world.')); // "Hello world."
console.log(Utils.toSentenceCase('THIS is a tEsT.')); // "This is a test."

console.log('checking toJson:::')
console.log(Utils.toJson({ name: 'John', age: 30 })); // '{"name":"John","age":30}'
