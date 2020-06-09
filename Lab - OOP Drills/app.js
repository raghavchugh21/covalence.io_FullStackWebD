let person1 = {
    name: "Raghav",
    sayHello : function() {
      console.log(this.name);
    }
  };

person1.sayHello();

class Person{
    constructor(name,city,age){
        this.name = name;
        this.city = city;
        this.age = age;

    }

    Intro () { console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`);}
};

let p1 = new Person('Daniel', 'Nashville', 45);
let p2 = new Person('Devon', 'Mt Juliet', 26);
let p3 = new Person('James', 'Mt Juliet', 35);
let p4 = new Person('Cameron', 'Hermitage', 25);
let p5 = new Person('Jose', 'Lebanon', 29);
p1.Intro();
p2.Intro();
p3.Intro();
p4.Intro();
p5.Intro();

class vehicle{
    constructor(wheels,manufaturer){
        this.wheels = wheels;
        this.manufaturer = manufaturer;
    }
    aboutVehicle(){
        console.log(`Motor vhicle, manufactured by ${this.manufaturer}, has ${this.wheels} wheels.`);
    }
}

class trucks extends vehicle{
    constructor(wheels,manufaturer,doors){
        super(wheels,manufaturer);
        this.doors = doors;
        this.truckbed = true;
    }
    aboutVehicle(){
        console.log(`Trucks, manufactured by ${this.manufaturer}, has ${this.wheels} wheels, ${this.doors} doors.`);
    }
}

let x = new trucks(4,"Ashok Leyland",2);
x.aboutVehicle();

class sedan extends vehicle{
    constructor(wheels,manufaturer,doors,size,mpg){
        super(wheels,manufaturer);
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle(){
        console.log(`Sedan, manufactured by ${this.manufaturer}, has ${this.wheels} wheels,${this.doors} doors,${this.size} size,${this.mpg} mpg`);
    }
}

x = new sedan(4,"Hyundai",4,"medium",25);
x.aboutVehicle();

class motorcycle extends vehicle{
    constructor(wheels,manufaturer,handlebars,doors){
    super(wheels,manufaturer);
    this.handlebars = handlebars;
    this.doors = doors;
    }
    aboutVehicle(){
        console.log(`Motorcycle, manufactured by ${this.manufaturer}, has ${this.wheels} wheels, handlebars ${this.handlebars}, doors ${this.doors}`);
    }
}

x = new motorcycle(2,"BMW",true,false);
x.aboutVehicle();