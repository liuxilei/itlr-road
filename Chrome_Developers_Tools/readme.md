#### Chrome Developers Tools使用技巧

### Elements篇
- 示例图1：
![示例图1：](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/Chrome%20Dev1.png)
- 示例图2：
![示例图2：](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/Chrome%20Dev2.png)

### console篇

```javascript
console.log('%c语义化信息输出','font-size:14px;color:blue');
console.log('明日复明日.');
console.info('明日何其多.');
console.warn('我生待明日.');
console.error('万事成蹉跎.');
```
console信息：
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/console.png)

```javascript
console.log('%c分组信息','font-size:14px;color:blue');
console.group('A组同学请说话');
console.log('我要好好学习！');
console.groupEnd();
console.group('B组同学请说话');
console.log('不可能！');
console.groupEnd();
```
console分组:
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/group.png)

```javascript
console.groupCollapsed('内容是收起来的');
console.log(1111);
console.log(2222);
console.groupEnd();
```
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/groupCollapsed.png)

```javascript
let data = [{'品名': '豆浆', '数量': 4}, {'品名':'油条', '数量': 3}];
console.table(data);
```
console表格
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/table.png)

```javascript
console.log(document.body);
console.dir(document.body);
```
console.dir
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/dir.png)

```javascript
console.time('time');
const test = [1,2,3,4,5,6,7,8,9];
for (let i = 0;i < test.length;i++) {
    console.log(test[i]);
}
console.timeEnd('time');
```
console.time()和console.timeEnd()注意括号内要相同
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/time.png)

```javascript
// %s 字符串
// %d 整数
// %i 整数 
// %f 浮点数
// %o 对象的链接
// %c CSS格式字符串
var number = 11 * 9;
var color = 'red';
console.log('%d %s balloons', number, color);
//99 red ballons
```
console占位符
```javascript
console.log('%cThis text is styled!','color:red;background:yellow;font-size:24px');
```
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/%25c.png)

```javascript
//定义console.log方法
['log', 'info', 'warn', 'error'].forEach(function(method) {
    console[method] = console[method].bind(
        console,
        new Date().toString()
    );
});
console.log('瞧，我在前面添加了现在的事件');
console.info('这是一个信息！');
console.warn('这是一个警告！');
console.error('这是一个错误!');
```
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/diy.png)

```javascript
//count()方法用来计数，输出它被调用了多少次
function greet (user) {
    console.count();
    return "hi" + user;
}
greet('bob');
//default: 1
greet('alice');
//default: 2
greet('bob')
//default: 3
```

```javascript
//assert()方法接受两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果
console.assert(true == false,'判断条件不成立！');
console.assert(document.body.childNodes.length > 500,'body子节点个数大于等于500');
```
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome_Developers_Tools/img/assert.png)
