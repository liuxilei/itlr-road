class SingleObject {
    login() {
        console.log('login...');
    }
}
SingleObject.getInstance = (function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
})();
//测试：注意这里只能使用静态函数 getInstance,不能new SingleObject()
let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();
console.log(obj1 === obj2); //两者必然完全相等