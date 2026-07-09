///////stack (primitive) , heap(non-primitve)

// let name ="Asad"
// let title="Amanullah"
// title="Ahsan"

// console.log(name)
// console.log(title);

let user={
    email:"asad.com",
    upi:"asad@ybl"
}

let newuser=user
newuser.email="ahsan.com"

console.log(user.email);
console.log(newuser.email);
