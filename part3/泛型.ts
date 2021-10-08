// 在定义函数或类时，如果遇到类型不明确就可以使用泛型
function fn<T>(a:T): T {
    return a
}
fn(7) // 直接调用，系统自动识别
fn<string>('hello') // 手动指定

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K): T {
    console.log(b);
    
    return a
}

fn2<number, string>(2, '3333')

interface Inter{
    length: number
}
// <T extends Inter> 表示泛型T要是 Inter 的实现类（子类）
function fn3<T extends Inter>(a: T) {
    return a.length
}

// 类中也可以使用泛型
class Myclass<T> {
    name: T
    constructor(name: T) {
        this.name =name
    }
}
const p = new Myclass('xm')
const p2 = new Myclass<string>('xh')