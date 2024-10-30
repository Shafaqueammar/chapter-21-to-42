// /////////////chapter 21 to 25

// ////////////////////////Question 1

// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");

// var fullName = firstName + " " + lastName;

// alert("hello"+" "+ fullName);

// // //////////////qustion 2

// var mobilePhone = prompt("Which is your favourite mobile phone?");

// var userInput ;

// document.write(mobilePhone.length);

// ///////////////Question 3

// var str = "pakistani";
// var IndexOfLetter =(str.indexOf("n"));
// document.write("The index of 'n' in 'pakistani' is: " + IndexOfLetter);

// ///////////Question 4

// var str = "Hello World";
// var lastIndexOf = str.lastIndexOf('l');

// document.write("The last index of 'l' in 'Hello World' is: " + lastIndexOf);

// ///////////Question 5

// var str = "pakistani";
// var charAt = str.charAt(3);

// document.write("The character at index is: " + str.charAt(3));

// ///////////Question 6

// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello " + fullName);

// // ///////////Question 7

// var str = "Hyderabad";  

//  str= str.replace("Hyderabad","Islamabad");
//  str= str.replace(/Hyder/gi,"Islam");
//  document.write(str);

/////////Queastion 8

// var message ="Ali and sami are best friends.They play cricket and football together.";

// message = message.replace("and","&");
// message = message.replace(/and/gi,"&");
// document.write(message);

///////////Question 9


// var str = "472";     
// var num = Number(str); 

// document.write("String: " + str + " (Type: " + typeof str + ")<br>");

// document.write("Number: " + num + " (Type: " + typeof num + ")");

////////////Question 10

// var userInput ="peanuts";
//  var userInput=userInput.toUpperCase();
//  document.write(userInput);

/////////////Question 11


// var userInput ="javascript";
//  var userInput=userInput.toUpperCase();
//  document.write(userInput);

///////////Question 12

// var num = 35.36;

// var str = String(num);

// var result = str.replace('.', '');

// document.write("Number: " + num + " (Type: " + typeof num + ")<br>");
// document.write("String: " + str + " (Type: " + typeof str + ")<br>");
// document.write("String without Dot: " + result + " (Type: " + typeof result + ")");

//////////////Question 14

// var a = ["cake", "apple pie", "cookies", "chips", "patties"];
// var userInput = prompt("Enter the item you want to search for:");
// if (a === userInput) {
//     alert("its available");
// } else {
//     alert("its not available");
// }

//////////Question 15

// var pasward = prompt("please enter your passward");
// function validatePassword(password) {
//     if (password.length <= 6) {
//         return "Invalid Password: Must be more than 6 characters.";
//     }

//     return "Valid Password!";
// }

// var password = "1abcde"; 
// document.write(validatePassword(password));

/////////////Question 17

// var userInput = "pakistan";
// var n = userInput.length - 1;
// var lastCharAt = userInput.charAt(n);

// document.write("User Input: " + userInput + "<br>");
// document.write("Last character of input " + lastCharAt + ": " + n);



///////////chapter 26 to 30

///////////Question 1

// var Number = 3.45214;
// console.log(Number);
// console.log(Math.round(3.45214));
// console.log(Math.floor(3.45214));
// console.log(Math.ceil(3.45214));

///////////Question 2

// var Number = -2.673;
// console.log(Number);
// console.log(Math.round(-2.673));
// console.log(Math.floor(-2.673));
// console.log(Math.ceil(-2.673));

/////////Question 5

// var isHeads = Math.random() <= 0;
// var coinFlip = isHeads ? "Heads" : "Tails";
// document.write((isHeads ? "Head" : "Tail") +"<br>");

// var userGuess = prompt("Guess: Heads or Tails?");

// if(userGuess==="Heads"){
//     alert("Congratulations! random coin value:Heads");
// }else if(userGuess!== "Heads"){
//     alert("Your wrong! random coin value :Tails ")
// }else{
//     alert("select Heads or Tails");
// }

/////////////////Question 6

// var randomNum = Math.random() * 100 ;
// console.log(randomNum);

/////////////Question 7

// var userWeight = prompt("Enter your weight in kilograms?");
// document .write("The weight of user is:"+ userWeight);

/////////////Question 8


// var randomNum = Math.random() * 10; 
// var correctNum = Math.floor(randomNum) + 1; 

// var userNum = +prompt("Guess the number between 1 to 10:");

// if (userNum === correctNum) {
//     document.write("<p>Congratulations! Your Answer is Correct!</p>");
  
// } else {
//     document.write("<p>You Lose. The correct number was: " + correctNum +"Try again"+"</p>");

// }

////////////chapter 31 to 34

//////////Question 1

// var currentDate = new Date();
// document.write(currentDate);

///////Question 2

    // var date = new Date();
    // var months = ["January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December" ];
    // var currentMonth = months[date.getMonth()];
    // alert("Current month is: " + currentMonth);

//     /////////////Question 3

//     var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     var currentDate = new Date();
//     var dayIndex = currentDate.getDay(); 
//     var day = dayNames[dayIndex];
//   alert("Today is:"+day);

    ///////////Question 4

// var day = prompt("Enter Day").slice(0,3).toLowerCase()   ;
// switch (day) {
//   case "mon":
//   case "tue":
//   case "wed":
//   case "thu":
//   case "fri":
//     alert("Working Day");
//     break;
//   case "sun":
//   case "sat":
//     alert("Its a Fun Day");
//     break;
//   default:
//     alert("Default Statement");
// }

/////////Question 5

// var date = new Date();
// var day = date.getDate(); 

// if (day < 16) {
//     alert("First fifteen days of the month.");
// } else {
//     alert("Last days of the month.");
// }

////////Question 6

// var currentDate = new Date();
// document.write(currentDate);

// var miliseconds = currentDate.getMilliseconds();
// document.write(miliseconds);
// var milisecondsSince_1970 = currentDate.getTime();
// document.write("Elapsed miliscond since  January1,1970 "+ milisecondsSince_1970)+"<br>";

// var minutes = currentDate.getMinutes();
// document.write(minutes);

//  var minutesSince_1970 = currentDate.getTime();
//  document.write("Elapsed minutes since  January1,1970 "+ minutesSince_1970)+"<br>";

///////////Question 7
    
// function checkTime() {
//     var current_time = new Date();
//     if (current_time.getHours() < 12) {
//         alert("It's AM");
//     } else {
//         alert("It's PM");
//     }
// }

// checkTime();

//////////Question 8

// var laterDate = new Date(2020, 11, 31);
// console.log(laterDate);

////////////Question 9

// var firstRamadan = new Date(2015, 5, 18); 

// var today = new Date();
// var timeDifference = today - firstRamadan;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days since 1st Ramadan:"+ (daysPassed));

//////////Question 10

// var referenceDate = new Date(2015, 5, 18); 

// var beginningOf2015 = new Date(2015, 0, 1); 
// var timeDifference = referenceDate - beginningOf2015;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// document.write(secondsElapsed);

//////////Question 11


// var currentDate = new Date();
// console.log(currentDate);

// var currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 1);
// console.log("1 hour ago,it was "+currentDate.toString());

////////////Question 12

// var currentDate = new Date();
// console.log(currentDate);

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("The 100 years back,it was: " + currentDate.toString());

// //////////Question 13

// var currentDate = new Date();
// var userAge = +prompt("Enter your age");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;
// console.log("your age is:"+userAge);
// console.log("Your birth year is: " + birthYear);

/////////Question 14

// var customerName = "ABC Customer";
// var month = "Februry";
// var numOfUnit = 410;
// var chargesPerUnit = 16;

// var netAmountPayable = numOfUnit * chargesPerUnit;

// console.log("Customer Name: " + customerName);
// console.log("Month: " + month);
// console.log("Number of Units: " + numOfUnit);
// console.log("Charges Per Unit: $" + chargesPerUnit);
// console.log("Net Amount Payable: $" + netAmountPayable);

// var latePaymentCharges = 350;
// console.log("Late payment charges is:"+latePaymentCharges);
// var  GrossAmountPayable=netAmountPayable + latePaymentCharges;
// console.log("Gross Amount payable  is:"+ GrossAmountPayable);

///////////chapter 35 to 38
////////Question 1

// function displayCurrentDateTime() {
//     var currentDate = new Date();
//   console.log(currentDate);
// }
// displayCurrentDateTime();
/////////////Question 2

// function greetUser(firstName, lastName) {
//     var fullName = firstName+" "+lastName;
//     console.log(`Hello, ${fullName}! Welcome!`);
// }

// greetUser('Saba', 'Ahmed');  

/////////Question 3

// function addTwoNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));

//     var sum = num1 + num2;

//     return sum;
// }

// var result = addTwoNumbers();
// console.log("The sum of the two numbers is:"+" " +result);

///////////Question 4

// function calculate() {
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
//     var operator = document.getElementById("operator").value;
//     var result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Error: Division by zero!";
//             }
//             break;
//         default:
//             result = "Invalid operator!";
//     }

//     document.getElementById("result").innerText = "Result: " + result;
// }

////////Question 5

// function square(number) {
//     return number * number;
// }

// console.log(square(5));  
// console.log(square(3)); 

///////////Question 6
 var factorialNum = "n";


// ////////Question 7


// function displayCounting() {
//     var start = parseInt(document.getElementById("start").value);
//     var end = parseInt(document.getElementById("end").value);
//     var resultText = "";

//     if (start > end) {
//         resultText = "Start number should be less than or equal to end number.";
//     } else {
//         for (var i = start; i <= end; i++) {
//             resultText += i + " ";
//         }
//     }

//     document.getElementById("result").innerText = resultText;
// }

////////Question 12




///////////chapter 39 to 42

////////Question 1

// function power(a, b) {
//     return Math.pow(a, b);
// }

// var base = parseFloat(prompt("Enter the base (a):"));
// var exponent = parseFloat(prompt("Enter the exponent (b):"));

// var resultValue = power(base, exponent);
// document.write(base + " raised to the power of " + exponent + " is: " + resultValue);

////////////Question 2

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var year = 2024; 
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

////////Question 6

// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, ''); 
// }

// var inputSentence = prompt("Enter a sentence (max 25 characters):");

// if (inputSentence.length > 25) {
//     document.write("Please enter a sentence that is 25 characters or less.");
// } else {
//     var resultSentence = removeVowels(inputSentence);
//     document.write("Sentence without vowels: " + resultSentence); 
// }

////////Question 7

/////////Question 9

// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00; 
//     var overtimeHours = 0;
//     var overtimePay = 0;

//     if (hoursWorked > regularHours) {
//         overtimeHours = hoursWorked - regularHours;
//         overtimePay = overtimeHours * overtimeRate; 
//     }

//     return overtimePay; 
// }

// var hoursWorked = parseInt(prompt("Enter the number of hours worked in a week:"));

// if (isNaN(hoursWorked) || hoursWorked < 0) {
//     document.write("Please enter a valid number of hours.");
// } else {
//     var totalOvertimePay = calculateOvertimePay(hoursWorked);

//     document.write("Overtime pay for " + hoursWorked + " hours worked is: Rs " + totalOvertimePay.toFixed(2));
// }