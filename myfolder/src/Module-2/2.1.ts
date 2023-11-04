{
    //  type assertion


    let anything: any;

    anything = "Mursalin Hossain is the Best Developer ";

    (anything as string)


    //another example 
    const kgToGm = (value: string | number) => {
        if (typeof value === 'string') {
            const convertedV = parseFloat(value) * 1000;
            return `the converted value is ${convertedV}`
        }
        if (typeof value === 'number') {
            return value * 1000
        }
    }

    const result = kgToGm(1000) as number
    const result2 = kgToGm("1000") as string

    // gg 

    type CustomError = {
        message: string;
    }



    try {

    } catch (error) {
        console.log((error as CustomError).message)
    }
}

