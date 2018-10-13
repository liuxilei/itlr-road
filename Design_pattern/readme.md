### 面向对象：继承、封装、多态

#### 继承：字类继承父类
- 继承可将公共方法抽离出来,提高复用,减少冗余

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} eat something`);
    }
    speak() {
        console.log(`my name is ${this.name},my age is ${this.age}`);
    }
}

// 子类继承父类
class Student extends Person {
    constructor(name, age, number) {
        super(name, age);
        this.number = number;
    }
    study() {
        console.log(`${this.name} study`);
    }
}

let liuxilei = new Student('liuxilei',23, 100);
liuxilei.study(); //liuxilei study
console.log(liuxilei.number); //100
liuxilei.eat(); //liuxilei eat something
```

#### 封装：数据的权限和保密
- publc 完全开放
- protected 对字类开放
- private 对自己开放
- 减少耦合,不该外露的不外露
- 利于数据、接口的权限管理
- ES6目前不支持,一般认为_开头的属性是private

```typescript
class People {
    name
    age
    protected weight //受保护的属性，只能自身或子类调用
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120;
    }
    eat() {
        console.log(`{this.name} eat something`)
    }
    speak() {
        console.log(`My name is {$this.name},age ${this.age}`)
    }
}

class Student extends People {
    number
    private girlfriend //私有属性 只能自身使用
    constructor(name, age, number) {
        super(name, age);
        this.number = number;
        this.girlfriend = 'xiaoli';
    }
    study() {
        console.log(`${this.name} study`);
    }
    getWeight() {
        console.log(`weight ${this.weight}`);
    }
}
let xiaoming = new Student('xiaoming', 10, 'A1');
xiaoming.getWeight(); //weight 120
```

#### 多态：同一接口不同实现
- 同一接口,不同表现
- 保持字类的开放性和灵活性
- 面向接口编程

```javascript
//重写父类方法
class People {
    constructor(name) {
        this.name = name;
    }
    saySomething() {

    }
}

class A extends People {
    constructor(name) {
        super(name);
    }
    saySomething() {
        console.log('I am A');
    }
}

class B extends People {
    constructor(name) {
        super(name);
    }
    saySomething() {
        console.log('I am B');
    }
}

let a = new A('a');
let b = new B('b');
a.saySomething(); //I am A
b.saySomething(); //I am B
console.log(a.name); //a
console.log(b.name); //b
```

#### 面向对象的应用实例

```javascript
class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || '';
    }
    append(node) {
        //...
    }
    addClass(name) {
        //..
    }
    html(data) {
        //..
    }
    //此处省略n个API
}

window.$ = function (selector) {
    //工厂模式
    return new jQuery(selector);
}

var $p = $('p');
console.log($p);
console.log($p.addClass);
```
![效果](https://github.com/liuxilei/itlr_road/blob/master/Design_pattern/img/jquery.png)

#### 为什么使用面向对象？
- 程序执行：顺序、判断、循环 ———— 结构化
- 面向对象 ———— 数据结构化
- 对于计算机，结构化的才是最简单的
- 编程应该 简单 & 抽象

#### UML类图
![效果](https://github.com/liuxilei/itlr_road/blob/master/Design_pattern/img/class.png)
- 泛化：表示继承
- 关联，表示引用
```javascript
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
```
![效果](https://github.com/liuxilei/itlr_road/blob/master/Design_pattern/img/class_rela.png)


