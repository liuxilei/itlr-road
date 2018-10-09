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
