/**
 * The `Utils` class provides a collection of utility methods for type checking, string manipulation, and data conversion.
 *
 * Main functionalities:
 * - Type checking: methods to check the type of a value, such as string, number, object, array, boolean, null, undefined, and date.
 * - String methods: methods to perform various operations on strings, such as checking if a string has a maximum length, minimum length, alphanumeric characters, alphabetic characters, uppercase letters, lowercase letters, title case, sentence case, JSON format, and if a string is empty or not.
 * - Comparison and sorting: methods to compare two values and sort an array of values.
 * - Conversion functions: methods to convert strings to alphanumeric, alphabetic, title case, sentence case, and JSON format.
 */
export default class Utils{

    /** @internal */
    private constructor(){}

    /**
     * Checks if a given value is a string.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is a string; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isString("Hello, World!"); // Returns true
     * const result2 = Utils.isString(42); // Returns false
     */
    static isString = (value: any): boolean => {
        return typeof value === 'string';
    }

    /**
     * Checks if a given value is a number.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is a number; otherwise, returns ` false`.
     *
     * @example
     * const result1 = Utils.isNumber(42); // Returns true
     * const result2 = Utils.isNumber("42"); // Returns false
     */
    static isNumber = (value: any): boolean => {
        return typeof value === 'number' && !isNaN(value);
    }

    /**
     * Checks if a given value is an object.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is an object; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isObject({}); // Returns true
     * const result2 = Utils.isObject("string"); // Returns false
     */
    static isObject = (value: any): boolean => {
        return typeof value === 'object' && this.isNotNull(value) && !this.isArray(value);
    }

    /**
     * Checks if a given value is an array.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is an array; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isArray([]); // Returns true
     * const result2 = Utils.isArray("string"); // Returns false
     */
    static isArray = (value: any): boolean => {
        return Array.isArray(value);
    }

    /**
     * Checks if a given value is a boolean.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is a boolean; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isBoolean(true); // Returns true
     * const result2 = Utils.isBoolean("true"); // Returns false
     */
    static isBoolean = (value: any): boolean =>{
        return typeof value === 'boolean';
    }

    /**
     * Checks if a given value is null.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is null; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isNull(null); // Returns true
     * const result2 = Utils.isNull("null"); // Returns false
     */
    static isNull = (value: any): boolean => {
        return value === null;
    }

    /**
     * Checks if a given value is not null.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is not null; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isNotNull("Hello, World!"); // Returns true
     * const result2 = Utils.isNotNull(null); // Returns false
     */
    static isNotNull = (value: any): boolean => {
        return value !== null;
    }

    /**
     * Checks if a given value is undefined.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is undefined; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isUndefined(undefined); // Returns true
     * const result2 = Utils.isUndefined("undefined"); // Returns false
     */
    static isUndefined = (value: any): boolean =>{
        return value === undefined;
    }

    /**
     * Checks if a given value is not undefined.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is not undefined; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isNotUndefined("Hello, World!"); // Returns true
     * const result2 = Utils.isNotUndefined(undefined); // Returns false
     */
    static isNotUndefined = (value: any): boolean =>{
        return value !== undefined;
    }

    /**
     * Checks if a given value is a valid date.
     *
     * @param {any} value - The value to check.
     * @returns {boolean} Returns `true` if the value is a valid date; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isDate(new Date()); // Returns true
     * const result2 = Utils.isDate("2023-10-04"); // Returns false
     */
    static isDate = (value: any): boolean => {
        return value instanceof Date && !isNaN(value.getTime());
    }
      

    // String methods
    /**
     * Checks if a given value (of any data type) is greater than or equal to a specified maximum value.
     *
     * @param {any} value - The value to be compared against the maximum.
     * @param {number} max - The maximum value to compare against.
     * @returns {boolean} Returns `true` if the value is greater than or equal to the maximum, `false` otherwise.
     *
     * @throws {Error} Throws an error with a message indicating an invalid string value if the input is neither a string nor a number.
     * 
     * @example
     * // Example 1: Checking if a string length is greater than or equal to a maximum value
     * const result1 = Utils.isMax("Hello, World!", 5); // Output: true (because "Hello" has a length of 5)
     * 
     * // Example 2: Checking if a number is greater than or equal to a maximum value
     * const result2 = Utils.isMax(42, 50);  // Output: false (because 42 < 50)
     * 
     * // Example 3: Handling an invalid input (non-string and non-number)
     * const invalidValue = [1, 2, 3];
     * const invalidMax = 10;
     * try {
     *   const isInvalid = Utils.isMax(invalidValue, invalidMax);
     *   console.log(isInvalid); // This line will not be reached.
     * } catch (error) {
     *   console.error(error.message); // Output: "Invalid string value: [1, 2, 3]"
     * }
     */
    static isMax = (value: any, max: number): boolean =>  {
        if(this.isString(value)){
            return value.length >= max
        }else if(this.isNumber(value)){
            return value >= max;
        }else{
            throw new Error(`Invalid string value: ${value}`);
        }
    }

    /**
     * Checks if a given value (of any data type) is less than or equal to a specified minimum value.
     *
     * @param {any} value - The value to be compared against the minimum.
     * @param {number} min - The minimum value to compare against.
     * @returns {boolean} Returns `true` if the value is less than or equal to the minimum, `false` otherwise.
     *
     * @throws {Error} Throws an error with a message indicating an invalid string value if the input is neither a string nor a number.
     * 
     * @example
     * // Example 1: Checking if a string length is less than or equal to a minimum value
     * const result1 = Utils.isMin("Hello, World!", 5); // Output: false (because "Hello" has a length of 5)
     * 
     * // Example 2: Checking if a number is less than or equal to a minimum value
     * const result2 = Utils.isMin(42, 50);  // Output: true (because 42 > 50)
     * 
     * // Example 3: Handling an invalid input (non-string and non-number)
     * const invalidValue = [1, 2, 3];
     * const invalidMin = 10;
     * try {
     *   const isInvalid = Utils.isMin(invalidValue, invalidMin);
     *   console.log(isInvalid); // This line will not be reached.
     * } catch (error) {
     *   console.error(error.message); // Output: "Invalid string value: [1, 2, 3]"
     * }
     */
    static isMin = (value: any, min: number): boolean =>  {
         if(this.isString(value)){
            return value.length <= min
        }else if(this.isNumber(value)){
            return value <= min;
        }else{
            throw new Error(`Invalid string value: ${value}`);
        }
    }

    /**
     * Checks if a given value is a valid alpha numeric.
     *
     * @param {string} value - The value to check.
     * @returns {boolean} Returns `true` if the value is a valid alpha numeric; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isAlphaNumeric('abc123'); // Returns true
     * const result2 = Utils.isAlphaNumeric('Hello 123'); // Returns false
     */
    static isAlphaNumeric = (value: string): boolean => {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        return alphanumericRegex.test(value);
    }

    /**
     * Checks if a given value is a valid alphabetic.
     *
     * @param {string} value - The value to check.
     * @returns {boolean} Returns `true` if the value is a valid alphabetic; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isAlphabetic('abc'); // Returns true
     * const result2 = Utils.isAlphabetic('Hello 123'); // Returns false
     */
    static isAlphabetic = (value: string): boolean => {
        const alphabeticRegex = /^[a-zA-Z]+$/;
        return alphabeticRegex.test(value);
    }

    /**
     * Checks if a given value is in upper case.
     *
     * @param {string} str - The value to check.
     * @returns {boolean} Returns `true` if the value is in upper case; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isUpperCase('abc'); // Returns false
     * const result2 = Utils.isUpperCase('HI'); // Returns true
     */
    static isUpperCase = (str: string): boolean => {
        return str === str.toUpperCase();
    }

    /**
     * Checks if a given value is in lower case.
     *
     * @param {string} str - The value to check.
     * @returns {boolean} Returns `true` if the value is in lower case; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isLowerCase('abc'); // Returns true
     * const result2 = Utils.isLowerCase('HI'); // Returns false
     */
    static isLowerCase = (str: string): boolean => {
        return str === str.toLowerCase();
    }

    /**
     * Checks if a given value is in title case.
     *
     * @param {string} str - The value to check.
     * @returns {boolean} Returns `true` if the value is in title case; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isTitleCase('Hello World'); // Returns true
     * const result2 = Utils.isTitleCase('hello world'); // Returns false
     */
    static isTitleCase = (str: string): boolean => {
        // Split the string into words
        const words = str.split(' ');
      
        for (const word of words) {
          // Check if the first character of each word is uppercase and the rest are lowercase
          if (word[0] !== word[0].toUpperCase() || word.slice(1) !== word.slice(1).toLowerCase()) {
            return false;
          }
        }
      
        return true;
    }

    /**
     * Checks if a given value is in sentence case.
     *
     * @param {string} str - The value to check.
     * @returns {boolean} Returns `true` if the value is in sentence case; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isSentenceCase('Hello world.'); // Returns true
     * const result2 = Utils.isSentenceCase('this is a test.'); // Returns false
     */
    static isSentenceCase = (str: string): boolean => {
        // Check if the first character is uppercase and the rest are lowercase
        return str[0] === str[0].toUpperCase() && str.slice(1) === str.slice(1).toLowerCase();
    }

    /**
     * Checks if a given value is a json.
     *
     * @param {string} str - The value to check.
     * @returns {boolean} Returns `true` if the value is a valid json; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isJson('{"name": "John", "age": 30}'); // Returns true
     * const result2 = Utils.isJson('invalid-json'); // Returns false
     */
    static  isJson = (str: string): boolean =>{
        try {
          JSON.parse(str);
          return true;
        } catch (error) {
          return false;
        }
    }

    /**
     * Checks if a given value is a empty.
     *
     * @param {string} str - The value to check.
     * @returns {boolean} Returns `true` if the value is a empty; otherwise, returns `false`.
     *
     * @example
     * const result1 = Utils.isEmpty(null); // Returns true
     * const result2 = Utils.isEmpty('Hello, world!'); // Returns false
     */
    static isEmpty = (value: any): boolean => {
        if (this.isNull(value) || this.isUndefined(value)) {
          return true;
        }
      
        if (this.isString(value) || this.isArray(value)) {
          return value.length === 0;
        }
      
        if (this.isObject(value)) {
          return Object.keys(value).length === 0;
        }
      
        return false;
    }

    /**
     * Compares two strings for equality, optionally ignoring case sensitivity.
     *
     * @param {string} str1 - The first string to compare.
     * @param {string} str2 - The second string to compare.
     * @param {boolean} [caseSensitive=true] - A flag indicating whether the comparison should be case-sensitive (default is true).
     *
     * @returns {boolean} Returns `true` if the strings are equal (or equal when case-insensitive), `false` otherwise.
     *
     * @example
     * // Example 1: Case-sensitive comparison
     * const string1 = "Hello, World!";
     * const string2 = "Hello, World!";
     * const isEqualCaseSensitive = Utils.isSameString(string1, string2);
     * console.log(isEqualCaseSensitive); // Output: true (strings are the same)
     *
     * // Example 2: Case-insensitive comparison
     * const lowercaseString = "hello, world!";
     * const uppercaseString = "HELLO, WORLD!";
     * const isEqualCaseInsensitive = Utils.isSameString(lowercaseString, uppercaseString, false);
     * console.log(isEqualCaseInsensitive); // Output: true (strings are the same when case-insensitive)
     */
    static isSameString = (str1: string, str2: string, caseSensitive: boolean = true): boolean => {
        if (caseSensitive) {
          return str1 === str2;
        } else {
          return str1.toLowerCase() === str2.toLowerCase();
        }
    }

    /**
     * Compares two values and returns a number indicating their relationship.
     *
     * @param {any} a - The first value to compare.
     * @param {any} b - The second value to compare.
     *
     * @returns {number} Returns:
     * - `-1` if `a` is less than `b`.
     * - `1` if `a` is greater than `b`.
     * - `0` if `a` is equal to `b`.
     *
     * @example
     * // Example 1: Comparing numbers
     * const num1 = 5;
     * const num2 = 10;
     * const comparisonResult1 = Utils.compare(num1, num2);
     * console.log(comparisonResult1); // Output: -1 (5 is less than 10)
     *
     * // Example 2: Comparing strings
     * const string1 = "apple";
     * const string2 = "banana";
     * const comparisonResult2 = Utils.compare(string1, string2);
     * console.log(comparisonResult2); // Output: 1 ("apple" is greater than "banana" lexicographically)
     *
     * // Example 3: Comparing equal values
     * const equalValue1 = 42;
     * const equalValue2 = 42;
     * const comparisonResult3 = Utils.compare(equalValue1, equalValue2);
     * console.log(comparisonResult3); // Output: 0 (42 is equal to 42)
     */
    static compare = (a: any, b: any): number => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };
      

    /**
     * Checks if a given value is present in a collection.
     *
     * @param {T[]} collection - The collection to search within.
     * @param {T} value - The value to search for within the collection.
     *
     * @returns {boolean} Returns `true` if the value is found in the collection, `false` otherwise.
     *
     * @template T
     *
     * @example
     * // Example 1: Checking if a number is in an array
     * const numberArray = [1, 2, 3, 4, 5];
     * const targetNumber = 3;
     * const isInArray = Utils.isIn(numberArray, targetNumber);
     * console.log(isInArray); // Output: true (3 is in the array)
     *
     * // Example 2: Checking if a string is in an array
     * const stringArray = ["apple", "banana", "cherry"];
     * const targetString = "banana";
     * const isInStringArray = Utils.isIn(stringArray, targetString);
     * console.log(isInStringArray); // Output: true ("banana" is in the array)
     *
     * // Example 3: Checking if an object is in an array
     * const objectArray = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }];
     * const targetObject = { id: 2, name: "Bob" };
     * const isInObjectArray = Utils.isIn(objectArray, targetObject);
     * console.log(isInObjectArray); // Output: false (objects are not strictly equal)
     */
    static isIn = <T>(collection: T[], value: T): boolean => collection.includes(value);

    /**
     * Sorts an array of objects or values based on a specified property or using a default comparison.
     *
     * @param {any[]} data - The array to be sorted.
     * @param {string} [sortBy] - Optional. The property by which to sort the array. If not provided, the array elements themselves are compared.
     * @param {boolean} [isAsc=true] - Optional. Determines the sorting order. Set to `true` for ascending order (default) or `false` for descending order.
     *
     * @returns {any[]} Returns a new array containing the sorted elements.
     *
     * @example
     * // Example 1: Sorting an array of objects by a property in ascending order
     * const data = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }];
     * const sortedData = Utils.sort(data, "age");
     * console.log(sortedData);
     * // Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
     *
     * // Example 2: Sorting an array of numbers in descending order
     * const numberArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
     * const sortedNumbers = Utils.sort(numberArray, undefined, false);
     * console.log(sortedNumbers);
     * // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
     *
     * // Example 3: Sorting an array of strings in ascending order using the default comparison
     * const stringArray = ["banana", "apple", "cherry"];
     * const sortedStrings = Utils.sort(stringArray);
     * console.log(sortedStrings);
     * // Output: ["apple", "banana", "cherry"]
     */
    static sort = (data: any[], sortBy?: string, isAsc: boolean = true): any[] =>
        data.sort((itemA, itemB) => {
        if (sortBy) {
            const aValue = itemA[sortBy];
            const bValue = itemB[sortBy];
            return isAsc ? this.compare(aValue, bValue) : this.compare(bValue, aValue);
        } else {
            return isAsc ? this.compare(itemA, itemB) : this.compare(itemB, itemA);
        }
    });

    /**
     * Checks if a given string is in camelCase format.
     *
     * @param {string} str - The string to check.
     *
     * @returns {boolean} Returns `true` if the string is in camelCase format, `false` otherwise.
     *
     * @example
     * const camelCaseString = "helloWorld";
     * const isCamel = Utils.isCamelCase(camelCaseString);
     * console.log(isCamel); // Output: true
     */
    static isCamelCase = (str: string): boolean => {
        // Check if the string contains lowercase letters followed by uppercase letters.
        return /^[a-z][A-Za-z]*$/.test(str);
    };

      

    // Conversion functions
    /**
     * Removes non-alphanumeric characters from a given string.
     *
     * @param {string} str - The input string to process.
     *
     * @returns {string} Returns the input string with all non-alphanumeric characters removed.
     *
     * @example
     * const input = "Hello, World! 123";
     * const alphaNumericString = Utils.toAlphaNumeric(input);
     * console.log(alphaNumericString); // Output: "HelloWorld123"
     */
    static toAlphaNumeric = (str: string): string => {
        return str.replace(/[^a-zA-Z0-9]/g, '');
    }

    /**
     * Removes non-alphabetic characters from a given string.
     *
     * @param {string} str - The input string to process.
     *
     * @returns {string} Returns the input string with all non-alphabetic characters removed.
     *
     * @example
     * const input = "Hello, World! 123";
     * const alphabeticString = Utils.toAlphabetic(input);
     * console.log(alphabeticString); // Output: "HelloWorld"
     */
    static toAlphabetic = (str: string): string => {
        return str.replace(/[^a-zA-Z]/g, '');
    }

    /**
     * Converts a given string to title case.
     *
     * @param {string} str - The input string to convert.
     *
     * @returns {string} Returns the input string converted to title case.
     *
     * @example
     * const input = "hello world";
     * const titleCaseString = Utils.toTitleCase(input);
     * console.log(titleCaseString); // Output: "Hello World"
     */
    static toTitleCase = (str: string): string =>{
        return str.replace(/\w\S*/g, (word) => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
    }

    /**
     * Converts the first character of a given string to uppercase and the rest to lowercase, making it sentence case.
     *
     * @param {string} str - The input string to convert.
     *
     * @returns {string} Returns the input string converted to sentence case.
     *
     * @example
     * const input = "hElLo WoRlD";
     * const sentenceCaseString = Utils.toSentenceCase(input);
     * console.log(sentenceCaseString); // Output: "Hello world"
     */
    static toSentenceCase = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    /**
     * Converts a given string to camelCase format.
     *
     * @param {string} str - The string to convert.
     * @param {string[]} [separators=["_", "-", " "]] - Optional. An array of separators to split the input string (default is ["_", "-", " "]).
     *
     * @returns {string} Returns the input string converted to camelCase format.
     *
     * @example
     * const inputString1 = "convert_this_to_camel_case";
     * const camelCaseResult1 = toCamelCase(inputString1);
     * console.log(camelCaseResult1); // Output: "convertThisToCamelCase"
     *
     * const inputString2 = "convert-this-to-camel-case";
     * const camelCaseResult2 = toCamelCase(inputString2, ["-", "_"]);
     * console.log(camelCaseResult2); // Output: "convertThisToCamelCase"
     */
    static toCamelCase = (str: string, separators: string[] = ["_", "-", " "]): string => {
        // Create a regular expression pattern to match any of the specified separators.
        const separatorPattern = new RegExp(`[${separators.join('')}]\\w`, 'g');
        
        // Use regular expressions to split the string based on the separator pattern,
        // and capitalize the first letter of each part.
        return str.replace(separatorPattern, (match) => match.charAt(1).toUpperCase());
    };

    /**
     * Converts a JavaScript object to JSON format.
     *
     * @param {any} obj - The object to convert to JSON format.
     * @returns {string} The JSON representation of the object.
     *
     * @example
     * const data = { name: "John", age: 30, city: "New York" };
     * const jsonStr = Utils.toJson(data); // Returns '{"name":"John","age":30,"city":"New York"}'
     */
    static toJson = (obj: any): string => {
        return JSON.stringify(obj);
    }

    /**
     * Generates a random string with a specified length, defaulting to 16 characters.
     *
     * @param {number} [length=16] - The length of the generated string (default: 16, max: 16).
     * @returns {string} The generated random string.
     * 
     * @example
     * const data1 = Utils.generateString(); // Generates a string of default length (16)
     * const data2 = Utils.generateString(8); // Generates a string of length 8;
     * const data3 = Utils.generateString(20); // Generates a string of maximum length (16)
     */
    static generateString = (length: number = 16): string => {
        if (length > 16) {
            length = 16; // Ensure the maximum length is 16
        }
    
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
    
        return result;
    };     
}
