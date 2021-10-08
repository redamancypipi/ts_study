"use strict";
// 在定义函数或类时，如果遇到类型不明确就可以使用泛型
function fn(a) {
    return a;
}
fn(7); // 直接调用，系统自动识别
fn('hello'); // 手动指定
// 泛型可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(2, '3333');
// <T extends Inter> 表示泛型T要是 Inter 的实现类（子类）
function fn3(a) {
    return a.length;
}
// 类中也可以使用泛型
class Myclass {
    constructor(name) {
        this.name = name;
    }
}
const p = new Myclass('xm');
const p2 = new Myclass('xh');
