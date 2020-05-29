
var name = "Raghav";
//constant to store number of states in the U.S.
const statesInUS = 50;

var result = 5+4;

function sayHello(){
    console.log("Hello World");
}
sayHello();

function checkAge(name, age){
    if(age<21){
        console.log("Sorry"+name+", you aren't old enough to view this page!");
    }
}
checkAge("Charles" , 21);
checkAge("Abby" , 27);
checkAge("James" , 18);
checkAge("John" , 17);

var veggies = ["Potato","Onion","Garlic"];

var item;

for (item of veggies){
    console.log(item);
}
var pet = {
    name : "yash",
    breed : "rat"
}
console.log(pet.name);
console.log(pet.breed);

var ArrofObj = [
    {
        name : "Raghav",
        age : 19
    },
    {
        name : "Saksham",
        age : 18
    },
    {
        name : "Tushar",
        age : 25
    },
    {
        name : "Shivam",
        age : 22
    },
    {
        name : "Misha",
        age : 16
    }
]
var i;
for(i=0;i<5;i++){
    checkAge(ArrofObj[i].name, ArrofObj[i].age);
}
function getLength(word){
    return word.length;
}

var len = getLength("even");
if(len%2==0){
    console.log('The world is nice and even!');
}
else{
    console.log('The world is an odd place!');
}


