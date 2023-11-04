const searchName = (value: string | null) => {

    if (value) {
        console.log("searching Man");
    } else {
        console.log("There is nothing to search")
    }
}

// searchName(null)

// unknown type , runtime e giye type janbo


// const getSpeedInMeterPerSecind = (value: unknown) => {

//     if (typeof value === "number") {
//         const convertedSpeed = (value * 1000) / 3600;
//         console.log(`converted speed is ${convertedSpeed} ms^-1`)
//     }
// }
// getSpeedInMeterPerSecind(1000)

const getSpeedInMeterPerSecind = (value: unknown) => {

    if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`converted speed is ${convertedSpeed} ms^-1`)
    } else if (typeof value === "string") {
        const [result, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;
        console.log(`converted speed is ${convertedSpeed} ms^-1`)

    }else{
        console.log(`wrong thing bad`)
    }
}
// getSpeedInMeterPerSecind(false)

// never type 

const throwError=(msg:string)=>{
    throw new Error(msg)
}

throwError("galti se error hogaya")