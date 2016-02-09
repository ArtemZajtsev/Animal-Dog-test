'use strict'
//Первый способ. Прототипы и ES5
function Animal(name){
  this.name=name;
}

Animal.prototype.getName=function(){
    console.log(this.name);
  }

function Dog(name){
  Animal.call(this,name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark=function(){
  console.log("Dog "+this.name+" is barking (es5 and prototypes)");
}

var aban = new Dog("Aban");
aban.getName();
aban.bark();

//Второй способ. Наследование с помощью class и ES2015

class Animal2 {
  constructor(name){
    this._name=name;
  }
  getName(){
    console.log(this._name);
  }
}

class Dog2 extends Animal2{
  constructor(name){
    super(name);
  }
  bark(){
    console.log('Dog '+this._name+' is barking (es2015 and class)');
  }
}

const aban2 = new Dog2("Aban2");
aban2.getName();
aban2.bark();

//Третий способ. Композиция и ES2015
const getNamer = (state) =>({
  getName: () => console.log(state.name)
})

const barker = (state) =>({
  bark: () => console.log('Dog '+state.name+" is barking (es2015 and composition)")
})

const dog3 = (name) => {
  let state={
    name
  }
  return Object.assign(
    {},
    getNamer(state),
    barker(state)
  )
}

const aban3 = dog3('Aban3');
aban3.getName();
aban3.bark();
