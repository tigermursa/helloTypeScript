{
    // generic 

    //const rollNumber:number[]=[3,6,8];
    //const mentors:string[]=["Mr.X","Mr.Y","Mr.Z"];
    //const boolArray:boolean[]=[true,false,true];
    //same as
    const rollNumber: Array<number> = [3, 6, 8];
    const mentor: Array<string> = ["Mr.X", "Mr.Y", "Mr.Z"];
    const boolArray: Array<boolean> = [true, false, true];


    type GenericArray<T> = Array<T>;
    const rollNumbers: GenericArray<number> = [3, 6, 8];
    const mentors: GenericArray<string> = ["Mr.X", "Mr.Y", "Mr.Z"];
    const boolArrays: GenericArray<boolean> = [true, false, true];


    //object 
    const user: GenericArray<{ name: string; age: number }> = [
        {
            name: 'Mezba',
            age: 100
        },
        {
            name: 'Jhankar Mahbuba',
            age: 110
        }
    ]

}