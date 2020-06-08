let favMovie = ( name = 'World', movie = 'The Room') =>  console.log(`my name is ${name} and my favorite movie is ${movie}`);

let getFirstName = (name) => console.log(`${name.split(" ")[0]}`);

let getFirstNameConcise = (name) => console.log(`${name.split(" ")[0]}`);

favMovie('Raghav','Gully Boy');
getFirstName('Raghav Chugh');
getFirstNameConcise("Raghav Chugh");

let mathmagic = (a, b) => ({
    exp: Math.pow(a, b),
    mul: a * b,
});

let result = mathmagic(4,2);
console.log(`${result.exp}`);
console.log(`${result.mul}`);

function display(name, location, favFood){
    console.log(`${name} ${location} ${favFood}`);
}

let arr = ["Raghav", "Delhi", "Fried Chicken"];

display(...arr);

var name = 'Raghav Chugh';

let f = whatever =>{
    array = whatever.split(" ");
    for( word of array ){
        console.log(word);
    }
}
f("Life is great");