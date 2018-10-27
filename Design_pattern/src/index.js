//明星
let star = {
    name: '张xx',
    age: 25,
    phone: 'star: 18380174854'
};

//经纪人
let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            //返回经纪人自己的手机号
            return 'aget: 18454511112';
        }
        if (key === 'price') {
            //明星不报价，经纪人报价
            return 12000
        }
        return target[key];
    },
    set: function (target, key, val) {
        if (key === 'customPrice') {
            if (val < 10000) {
                //最低10w
                throw new Error('价格太低');
            } else {
                target[key] = val;
                return true;
            }
        }
    }
});

//测试
console.log(agent.name); //张xx
console.log(agent.age); //25
console.log(agent.phone); //aget: 18454511112 
console.log(agent.price); //12000

agent.customPrice = 15000;
console.log(agent.customPrice); //15000