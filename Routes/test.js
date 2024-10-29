// 1. Odd or Even
function checkOddEven(number) {
    console.log(number % 2 === 0 ? "Even" : "Odd");
}

// 2. Sum of Array Elements
function sumArray(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum);
}

// 3. Smallest Number in Array
function findSmallest(values) {
    console.log(Math.min(...values));
}

// 4. Count Vowels in String
function countVowels(sentence) {
    let count = sentence.match(/[aeiou]/gi)?.length || 0;
    console.log(count);
}

// 5. Grade Feedback
function gradeFeedback(grade) {
    const feedback = {
        "A": "Excellent",
        "B": "Good",
        "C": "Average",
        "D": "Below Average",
        "F": "Fail"
    };
    console.log(feedback[grade] || "Invalid grade");
}

// 6. Print Prime Numbers from 1 to 50
function printPrimes() {
    for (let num = 2; num <= 50; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(num);
    }
}

// 7. Check if Value Exists in Array
function findInArray(arr, value) {
    console.log(arr.includes(value) ? "Found" : "Not Found");
}

// 8. Count Positive, Negative, and Zero
function countNumbers(numbers) {
    let positives = 0, negatives = 0, zeros = 0;
    numbers.forEach(num => {
        if (num > 0) positives++;
        else if (num < 0) negatives++;
        else zeros++;
    });
    console.log(`Positives: ${positives}, Negatives: ${negatives}, Zeros: ${zeros}`);
}

// 9. Average of Array
function averageArray(scores) {
    let average = scores.reduce((acc, num) => acc + num, 0) / scores.length;
    console.log(average);
}

// 10. Remove Specific Value from Array
function removeValue(numbers, valueToRemove) {
    let filteredArray = numbers.filter(num => num !== valueToRemove);
    console.log(filteredArray);
}

// 11. Print Multiples of 3 from 1 to 30
function printMultiplesOfThree() {
    for (let i = 3; i <= 30; i += 3) {
        console.log(i);
    }
}

// 12. Separate Even and Odd Numbers
function separateEvenOdd(numbers) {
    let evens = numbers.filter(num => num % 2 === 0);
    let odds = numbers.filter(num => num % 2 !== 0);
    console.log("Evens:", evens);
    console.log("Odds:", odds);
}

// 13. Day of the Week
function dayOfWeek(number) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(days[number - 1] || "Invalid number");
}

// 14. Common Elements in Two Arrays
function findCommonElements(array1, array2) {
    let common = array1.filter(value => array2.includes(value));
    console.log(common);
}

// 15. Count Occurrences of Each Element
function countOccurrences(items) {
    let countMap = {};
    items.forEach(item => countMap[item] = (countMap[item] || 0) + 1);
    console.log(countMap);
}

// 16. Reverse Each Word in Sentence
function reverseWords(sentence) {
    let reversed = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    console.log(reversed);
}

// 17. Simple Calculator
function calculator(num1, num2, operation) {
    switch (operation) {
        case '+': console.log(num1 + num2); break;
        case '-': console.log(num1 - num2); break;
        case '*': console.log(num1 * num2); break;
        case '/': console.log(num2 !== 0 ? num1 / num2 : "Division by zero error"); break;
        default: console.log("Invalid operation");
    }
}

// 18. Second Largest Number
function secondLargest(numbers) {
    let uniqueNumbers = [...new Set(numbers)].sort((a, b) => b - a);
    console.log(uniqueNumbers[1] || "Array has less than 2 unique elements");
}

// 19. Check if Array is Palindromic
function isPalindromeArray(array) {
    let reversed = [...array].reverse();
    console.log(array.join('') === reversed.join('') ? "Palindrome" : "Not a Palindrome");
}

// 20. Print Pattern
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}

// 21. Largest Odd Number in Array
function largestOdd(numbers) {
    let odds = numbers.filter(num => num % 2 !== 0);
    console.log(odds.length ? Math.max(...odds) : "No odd numbers");
}

// 22. Sum of Digits
function sumOfDigits(number) {
    let sum = number.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    console.log(sum);
}

// 23. Remove Duplicates from Array
function removeDuplicates(values) {
    let uniqueValues = [...new Set(values)];
    console.log(uniqueValues);
}

// 24. Count Words in Sentence
function countWords(sentence) {
    let wordCount = sentence.trim().split(/\s+/).length;
    console.log(wordCount);
}

// 25. Multiplication Table
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
