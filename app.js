"use strict";
/*
Task 1: Basic Data Types and First Program //!Complete
Objective: Write a TypeScript program that outputs a welcome message.

Instructions:

Create a TypeScript program.
Print the following message to the console:
Hello World, I will complete this course successfully and become a Next level Web Developer!
*/
const welcomeMessage = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
const sayHello = (data) => {
    //console.log(data);
};
sayHello(welcomeMessage);
/*
Task 2: Functions, Optional, and Literal Types //!Complete
Objective: Create a function with parameters and an optional literal type.

Instructions:

Define a function that takes:
name (string)
age (number)
role (optional, with type 'admin' | 'user' | 'guest')
The function should log these values or perform a basic action.
*/
const userInfo = (name, age, role) => {
    //console.log(name, age, role);
};
userInfo("Mursalin", 25, "admin");
