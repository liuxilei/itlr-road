#### Chrome Developers Tools使用技巧

### Elements篇
- 示例图1：
![示例图1：](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/Chrome%20Dev1.png)
- 示例图2：
![示例图2：](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/Chrome%20Dev2.png)

### console篇

```javascript
console.log('%c语义化信息输出','font-size:14px;color:blue');
console.log('明日复明日.');
console.info('明日何其多.');
console.warn('我生待明日.');
console.error('万事成蹉跎.');
```
console信息：
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/console.png)

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
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/group.png)

```javascript
console.groupCollapsed('内容是收起来的');
console.log(1111);
console.log(2222);
console.groupEnd();
```
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/groupCollapsed.png)

```javascript
let data = [{'品名': '豆浆', '数量': 4}, {'品名':'油条', '数量': 3}];
console.table(data);
```
console表格
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/table.png)

```javascript
console.log(document.body);
console.dir(document.body);
```
console.dir
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/dir.png)

```javascript
console.time('time');
const test = [1,2,3,4,5,6,7,8,9];
for (let i = 0;i < test.length;i++) {
    console.log(test[i]);
}
console.timeEnd('time');
```
console.time()和console.timeEnd()注意括号内要相同
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/time.png)

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
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/%25c.png)

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
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/diy.png)

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
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/assert.png)

console.trace
堆栈跟踪相关的调试可以使用console.trace。这个同样可以通过UI界面完成。当代码被打断点后，可以在Call Stack面板中查看相关堆栈信息。
上面介绍的都是挂在window.console这个对象下面的方法，统称为Console API,接下来的这些方法确切地说应该叫命令，是Chrome内置提供，在控制台中使用的，他们统称为Command Line API 

$- 代表着最近一次命令返回的结果，并且可以作为一个变量使用在接下来的表达式中
![效果](https://github.com/liuxilei/itlr-road/blob/master/Chrome-Developers-Tools/img/$-.png)


$0-$4则代表了最近5个你选择过的DOM节点
在页面右击选择审查元素，然后在弹出来的DOM节点树上面随便点选，这些被点过的节点全被记录下来，而$0会返回最近一次点选的DOM节点，一次类推，$1返回的是上上次的DOM节点，最多保存了5个，如果不够5个，则返回undefined

$ 其实是document.querySelector()的别称，返回第一个选中的DOM节点

$$ 调用document.querySelectorAll()函数，返回一个数组形式的DOM节点

copy 通过此命令可以将在控制台获取到的内容复制到剪切板

inspect传入一个DOM节点，自动转到Elements面板中对应node的位置
