#### Chrome Developers Tools使用技巧
### Elements篇
- 示例图1：
![示例图1：](https://github.com/liuxilei/itlr_road/blob/master/Chrome%20Developers%20Tools/img/Chrome%20Dev1.png)
- 示例图2：
![示例图2：](https://github.com/liuxilei/itlr_road/blob/master/Chrome%20Developers%20Tools/img/Chrome%20Dev2.png)
### console篇
```javascript
console.log('%c语义化信息输出','font-size:14px;color:blue');
console.log('明日复明日.');
console.info('明日何其多.');
console.warn('我生待明日.');
console.error('万事成蹉跎.');
```
console信息：
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome%20Developers%20Tools/img/console.png)
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
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome%20Developers%20Tools/img/group.png)
```
let data = [{'品名': '豆浆', '数量': 4}, {'品名':'油条', '数量': 3}];
console.table(data);
```
console表格
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome%20Developers%20Tools/img/table.png)
```
console.log(document.body);
console.dir(document.body);
```
console.dir
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome%20Developers%20Tools/img/dir.png)
```
console.time('time');
const test = [1,2,3,4,5,6,7,8,9];
for (let i = 0;i < test.length;i++) {
    console.log(test[i]);
}
console.timeEnd('time');
```
console.time()和console.timeEnd()注意括号内要相同
![效果](https://github.com/liuxilei/itlr_road/blob/master/Chrome%20Developers%20Tools/img/time.png)
