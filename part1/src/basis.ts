// 字面量
let a: 10;
a = 10;
// a= 20 //会报错
let b: any;
b = "ww"; // b 可以赋任何类型的值
let c: string;
c = b;
let d: unknown
console.log(a, '---', b, '---', c);
// 指定函数返回值和参数类型
function add(a: number, b: number): number{
    return a+b
}
add(2, 3)