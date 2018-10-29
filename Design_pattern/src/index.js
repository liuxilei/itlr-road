function each(data) {
    //生成遍历器
    let iterator = data[Symbol.iterator]();
    //console.log(iterator.next()); //有数据时返回 {value: 1, done: false}
    //console.log(iterator.next());
    //console.log(iterator.next());
    //console.log(iterator.next()); //没有数据返回 {value: undefined, done: true}

    let item = { done: false };
    while (!item.done) {
        item = iterator.next();
        if (!item.done) {
            console.log(item.value);
        }
    }
}
//测试代码
let arr = [1, 2, 3];
let m = new Map();
m.set('a', 100);
m.set('b', 200);

each(arr);
each(m);