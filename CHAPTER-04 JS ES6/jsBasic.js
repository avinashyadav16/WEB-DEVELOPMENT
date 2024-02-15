// Basic variable Naming:
var myName = 'Avinash Yadav';
var My123 = 123;
var my_Name = "Avinash";



// length built-in function:
var tweet = prompt("Compose Your Tweet: ");
alert("You have written " + tweet.length + " characters.");



// slice built-in function:
var tweet = prompt("Compose Your Tweet: ");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters. And " + (140 - tweetCount) + " characters are left.");
alert('140 Characters are: ' + tweet.slice(0, 141));



// UPPER CASE and LOWER CASE:
var myName = "lower avinash yadav";
var yourName = "UPPER AVINASH YADAV";
prompt(myName.toUpperCase());
prompt(yourName.toLowerCase());



// Random Number Generation from 0 to 100:
var numberGen = Math.random() * 100;
numberGen = Math.floor(numberGen) + 1;
prompt("Randomly Generated Number is: " + numberGen);


// Conditonal Statements:

prompt("What is your name? ");
prompt("What is their name? ");
var friendshipScore = Math.random() * 100;
friendshipScore = Math.floor(friendshipScore) + 1;

if (friendshipScore === 100) {
    alert("Your friendshipScore is: " + friendshipScore + "%. And you guys are best friends.");
}
else {
    alert("Your friendshipScore is: " + friendshipScore + "%");

}



// Leap Year Detemination Function:
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap Year.";
            }
            else {
                return "Not Leap Year.";
            }
        }
        else {
            return "Leap Year."
        }
    }
    else {
        return "Not Leap Year.";
    }
}

prompt("Entred Year is " + isLeapYear(2004));



// includes and push
var guestList = ['aviansh', 'jay', 'rana', 'maria'];
var incomingMember = prompt('What is your name: ');

if (guestList.includes(incomingMember)) {
    alert("Welcome! You are already in.");
}
else {
    guestList.push(incomingMember);
    alert("Now you are in.");
}



// FizzBuzz Game:
var output = [];
var count = 1;

function fizzbuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push('FizzBuzz');
        }
        else if (count % 3 === 0) {
            output.push('Fizz');
        }
        else if (count % 5 === 0) {
            output.push('Buzz');
        }
        else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}

fizzbuzz();



// fibonacci Series Generator:
function fibonacciGenerator(n) {
    var output = [];

    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

output = fibonacciGenerator(10);
console.log(output);


// power to a number:

var firstNumber, secondNumber, number1, number2, sum, ans;
firstNumber = parseInt(window.prompt("Enter the first number: "));
secondNumber = parseInt(window.prompt("Enter the second number: "));

window.prompt(powerNumber(firstNumber, secondNumber));

function powerNumber(firstNumber, secondNumber) {
    ans = 1.0;
    while (secondNumber > 0) {
        if (secondNumber % 2 == 0) {
            firstNumber = firstNumber * firstNumber;
            secondNumber /= 2;
        } else {
            ans = firstNumber * ans;
            secondNumber -= 1;
        }
    }
    return ans;
}
