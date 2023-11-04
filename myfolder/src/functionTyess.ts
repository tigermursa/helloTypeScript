// Normal Function
function sum(number1: number, number2: number): number {
    return number1 + number2;
}

//Arrow Function
const sum2 = (number1: number, number2: number): number => {
    return number1 + number2;
}

// object --> function --> method
// number
const poorUser = {
    name: "Nola",
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance;
    }
}
// String
const poorUser2 = {
    name: "Nola",
    balance: 0,
    addBalance(balance: number): string {
        return `My new balance is : ${this.balance + balance}`;
    }
}

//fun ****

const arr: number[] = [1, 4, 10];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
console.log(newArray)
