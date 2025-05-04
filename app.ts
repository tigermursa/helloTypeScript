/*
Task 1: Basic Data Types and First Program //!Complete
Objective: Write a TypeScript program that outputs a welcome message.

Instructions:

Create a TypeScript program.
Print the following message to the console:
Hello World, I will complete this course successfully and become a Next level Web Developer!
*/

const welcomeMessage: string =
  "Hello World, I will complete this course successfully and become a Next level Web Developer!";

const sayHello = (data: string): void => {
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

const userInfo = (
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
): void => {
  //console.log(name, age, role);
};

userInfo("Mursalin", 25, "admin");

/*
Task 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color,
 Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
*/

type Person = {
  name: string;
  address: string;
  hairColor: string;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: boolean;
  friends: string[];
};
