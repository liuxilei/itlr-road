class House {
    constructor(city) {
        this.city = city;
    }
    showCity() {
        console.log(`house in ${this.city}`);
    }
}
class People {
    constructor(name, house) {
        this.name = name;
        this.house = house;
    }
    saySomething() {

    }
}
class A extends People {
    constructor(name, house) {
        super(name, house);
    }
    saySomething() {
        console.log('I am A');
    }
}
class B extends People {
    constructor(name, house) {
        super(name, house);
    }
    saySomething() {
        console.log('I am B');
    }
}
//测试
let aHouse = new House('北京');
let a = new A('aaa', aHouse);
console.log(a); //a 有房子
let b = new B('bbb');
console.log(b); //b 无房子