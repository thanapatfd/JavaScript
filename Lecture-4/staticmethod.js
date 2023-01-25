class dog {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("This is " + this.name + " !");
    }

    // A static method 
    static bark() {
        console.log("Woof!");
    }
}
const myDog = new dog("Buster");
myDog.introduce();
dog.bark();


const my2Dog = new dog("Ford");
my2Dog.introduce();
dog.bark();
