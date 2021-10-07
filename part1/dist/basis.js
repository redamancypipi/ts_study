// 字面量
var a;
a = 10;
// a= 20 //会报错
var b;
b = "ww"; // b 可以赋任何类型的值
var c;
c = b;
var d;
console.log(a, '---', b, '---', c);
// 指定函数返回值和参数类型
function add(a, b) {
    return a + b;
}
add(2, 3);
