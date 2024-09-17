"use strict";

let a = [40,30,20];
let b = a;
b = [40,30]
let c = b;
c = [40]
a = c;

console.log(a)