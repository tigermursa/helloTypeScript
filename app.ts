interface MyProfile {
    name:string;
    email:string;
    password:string;
    gender?:string
}

interface Admin extends MyProfile {
    admin :boolean
}


function english(profile:Admin){

    // basically there is lot of to practice with ts

}