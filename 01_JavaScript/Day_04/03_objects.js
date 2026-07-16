//singleton : 
Object.create

//object literals :

const mysm = Symbol("Key1");
const jsuser = {
    name: "Asad",
    age: 24,
    fullname: "AAAAAAA",
    location: "Patna",
    email: "abcd@gmail.com",
    [mysm]: "mykey1",
    isloggedin: false,
    lastlogeedin: ["Monday", "Saturday"]
};

// console.log(jsuser.email);
// console.log(jsuser["email"]);

// console.log(jsuser[mysm]);          // "mykey1"
// console.log(typeof jsuser[mysm]);   // "string"

// console.log(jsuser.fullname);
// console.log(jsuser["fullname"]);

// jsuser.email="asad.com"
// // Object.freeze(jsuser)
// jsuser.email="hii.com"
// console.log(jsuser)


jsuser.greeting=function(){
    console.log("Hello js user");
}

jsuser.greeting2=function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());
