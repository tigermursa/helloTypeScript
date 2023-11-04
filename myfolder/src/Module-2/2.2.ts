{

    //interface  AND type
    type officeIdT = {
        idNumber: number;
        idName: string;
    }

    interface officeIdI {
        idNumber: number;
        idName: string;
    }

    type employeWithInternshipT = officeIdI & { idStatus: string } //using intersection
    const employeeTwo: employeWithInternshipT = {
        idNumber: 550101,
        idName: "Mursalin",
        idStatus: "positive"
    }
    //interface
    interface employeWithInternshipI extends officeIdT { idStatus: string } //using extends keyword
    const employeeThree: employeWithInternshipT = {
        idNumber: 550101,
        idName: "Mursalin",
        idStatus: "positive"
    }



    const employeeOne: officeIdI = {
        idNumber: 550101,
        idName: "Mursalin",
    }


    // console.log(employeeOne)

    // Array

    type RollBoy = number[];

    interface RollGirls {
        [index: number]: number
    }

    const rollOfTheBoys: RollGirls = [5, 6, 7,]



    // Function

    type AddT = (num1: number, num2: number) => number;
    interface AddI {
        (num1: number, num2: number): number;
    }
    const addkoro: AddI = (num1, num2) => num1 + num2;





    //JOKHON JA ICCHA USE KORBO CODE CLEAN RAKHTE HOBEEE




}