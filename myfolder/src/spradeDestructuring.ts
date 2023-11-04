// learn spread operator

const bros1: string[] = [
    "Hasan", "Meraz", "Rahat"
]
const bros2: string[] = [
    "NurTaz", "Dhaly", "Nooman"
]

bros1.push(...bros2)
// console.log(bros1)

// level 2 mentors

const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
}
const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
}
const mentorsList = {
    ...mentors1,
    ...mentors2
}

// console.log(mentorsList)

// Learning rest operator

const greetFriends = (...friend: string[]) => {
    // console.log(`hi ${f1} ${f2} ${f3}`); evabe  hobe nea ekhn r for each lagbe
    friend.forEach((friend: string) => console.log(`Hi ${friend} `))
}
// greetFriends("Hasan", "Mursalin", "Meraz")

// Destructuring 
const Theuser = {
    terenam: "Mursalin",
    teaAge: 22,
}
const { terenam, teaAge } = Theuser; // eta chara hobe ne DeStructure;
// console.log(terenam)

const friendss = ["he","she","olaa","oii","olaa","kiree bal"]

const [,,themainwors,...rest] = friendss;

console.log(themainwors)