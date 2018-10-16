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

#### UNIX/LINUX设计哲学
- 准则1：小即是美
- 准则2：让每一个程序只做好一件事
- 准则3：快速建立原型
- 准则4：舍弃高效率而取可移植性
- 准则5：采用纯文本来存储数据
- 准则6：充分利用软件的杠杆效应(软件复用)
- 准则7：使用shell脚本来提高杠杆效应和可移植性
- 准则8：避免强制性的用户界面
- 准则9：让每个程序都称为过滤器
- 小准则：允许用户定制环境
- 小准则：尽量使操作系统内核小而轻量化
- 小准则：是用小写字母并尽量简短
- 小准则：沉默是金
- 小准则：各部分之和大于整体
- 小准则：寻求90%的解决方案

#### SOLID五大设计原则
- S-单一职责原则
- O-开放封闭原则
- L-李氏置换原则
- I-接口独立原则
- D-依赖导致原则

##### S-单一职责原则
- 一个程序只做好一件事
- 如果功能过于复杂就拆分开，每个部分保持独立

##### O-开放封闭原则
- 对扩展开放，对修改封闭
- 增加需求时，扩展新代码，而非修改已有代码
- 这是软件设计的终极目标

##### L-李氏置换原则
- 字类能覆盖父类
- 父类能出现的地方子类就能出现
- JS中使用较少(弱类型 & 继承使用较少)

##### I-接口独立原则
- 保持接口的单一独立，避免出现"胖接口"
- JS中没有接口(typescript例外)，使用较少
- 类似于单一职责原则，这里更关注接口

##### D-依赖倒置原则
- 面向接口编程，依赖于抽象而不依赖于具体(面向抽象编程，而不是面向具象编程)
- 使用方只关注接口而不关注具体类的实现
- JS中使用较少(没有接口 & 弱类型)

```javascript
//用Promise来说明S O
//加载图片
function loadImg(src) {
    var promise = new Promise((resolve, reject) => {
        var img = document.createElement('img');
        img.onload = function() {
            resolve(img);
        }
        img.onerror = function() {
            reject('图片加载失败');
        }
        img.src = src;
    });
    return promise;
}
var src = 'https://www.imooc.com/static/img/index/logo_new.png';
var result = loadImg(src);

result.then((img) => {
    console.log('img.width', img.width);
    return img;
}).then((img) => {
    console.log('img.height',img.height);
    return img;
}).catch((ex) => {
    //统一捕获异常
    console.log(ex);
});
//单一职责原则:每个then中的逻辑只做好一件事
//开放封闭原则：如果新增需求，扩展then
//对扩展开放，对修改封闭。
```

#### 从设计到模式
##### 创建型
- 工厂模式(工厂方法模式，抽象工厂模式、建造者模式)
- 单例模式
- 原型模式
##### 结构型
- 适配器模式
- 装饰者模式
- 代理模式
- 外观模式
- 桥接模式
- 组合模式
- 享元模式
##### 行为型
- 策略模式
- 模板方法模式
- 观察者模式
- 迭代器模式
- 指责链模式
- 命令模式
- 备忘录模式
- 状态模式
- 访问者模式
- 中介者模式
- 解释器模式

#### 面试题
第一题：
- 打车时，可以打专车或者快车。任何车都有车牌号和名称。
- 不同车价格不同，快车每公里1元，专车每公里2元。
- 行程开始时，显示车辆信息
- 行程结束时，显示打车金额(假定行程就是5公里)
- 画出UML类图
- 用ES6语法写出该示例
UML图：
![效果](https://github.com/liuxilei/itlr_road/blob/master/Design_pattern/img/interview1.png)
```javascript
class Car {
    constructor(cardNumber, name) {
        this.cardNumber = cardNumber;
        this.name = name;
    }
}
class Kuaiche extends Car {
    constructor(cardNumber, name, price) {
        super(cardNumber, name);
        this.price = price;
    }
}
class Zhuanche extends Car {
    constructor(cardNumber, name, price) {
        super(cardNumber, name);
        this.price = price;
    }
}
class Trip {
    constructor(car, far) {
        this.car = car;
        this.far = far;
    }
    start() {
        console.log(`该车车牌号${this.car.cardNumber},车名${this.car.name}`)
    }
    end() {
        console.log(`价钱${this.far * this.car.price}`)
    }
}
let k = new Kuaiche('陕A1111','极速',1);
let z = new Zhuanche('陕B2222','奢侈',2);
let trip = new Trip(k, 5);
let trip1 = new Trip(z, 5);
trip.start();
trip.end();
trip1.start();
trip1.end();
```

第二题：
- 某停车场，分三层，每层100车位
- 每个车位都能监控到车辆的驶入和离开
- 车辆进入前，显示每层的空余车位数量
- 车辆进入时，摄像头可识别车牌号和时间
- 车辆出来时，出口显示器显示车牌号和停车时长

```javascript
//车辆
class Car {
    constructor(num) {
        this.num = num;
    }
}
//摄像头
class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}
// 出口显示屏
class Screen {
    show(car, inTime) {
        console.log('车牌号', car.num);
        console.log('停车时间', Date.now() - inTime)
    }
}
// 停车场
class Park {
    constructor(floors) {
        this.floors = floors || [];
        this.camera = new Camera();
        this.screen = new Screen();
        this.carList = {} //存储摄像头拍摄返回的车辆信息
    }
    in(car) {
        //通过摄像头获取信息
        const info = this.camera.shot(car);
        //停到某个停车位
        const i = parseInt(Math.random() * 100 % 100);
        const place = this.floors[0].places[i];
        place.in();
        info.place = place;
        //记录信息
        this.carList[car.num] = info;
    }
    out(car) {
        //获取信息
        const info = this.carList[car.num];
        //将停车位清空
        const place = info.place;
        place.out();
        //显示时间
        this.screen.show(car, info.inTime);
        //清空记录
        delete this.carList[car.num];
    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index}层还有${floor.emptyPlaceNum()}个空闲车位`
        }).join('\n');
    }
} 
//层
class Floor {
    constructor(index, places) {
        this.index = index;
        this.places = places || [];
    }
    emptyPlaceNum() {
        let num = 0;
        this.places.forEach(p => {
            if (p.empty) {
                num = num + 1;
            }
        })
        return num;
    }
}

//车位
class Place {
    constructor() {
        this.empty = true;
    }
    in() {
        this.empty = false;
    }
    out() {
        this.empty = true;
    }
}

//测试-------------
//初始化停车场
const floors = [];
for (let i = 0;i < 3;i++) {
    const places = [];
    for (let j = 0;j < 100;j++) {
        places[j] = new Place();
    }
    floors[i] = new Floor(i + 1, places);
}
const park = new Park(floors);
//初始化车辆
const car1 = new Car(100);
const car2 = new Car(200);
const car3 = new Car(300);
console.log('第一辆车进入');
console.log(park.emptyNum());
park.in(car1);
console.log('第二辆车进入');
console.log(park.emptyNum());
park.in(car2);
console.log('第一辆车离开');
park.out(car1);
console.log('第二辆车离开');
park.out(car2);
console.log('第三辆车进入');
console.log(park.emptyNum());
park.in(car3);
console.log('第三辆车l离开');
park.out(car3);
```