const name ="Asad"
const repocount=50

console.log(name + repocount +" value");
console.log(`Hello my name is ${name} and my repocount is ${repocount}.`);

const gamename=new String('asad-am-ahsan')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('s'));

const newstring=gamename.substring(0,3)
console.log(newstring);

const anotherstring=gamename.slice(-3,2)
console.log(anotherstring);

const url ="https://asad%20.com"
console.log(url.replace('%20','-'))
console.log(url.includes('anas'))
console.log(gamename.split('-'));




