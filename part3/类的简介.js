"use strict";
// 对象中包含两个部分：属性和方法
class Dog {
    // 构造函数，会在对象创建时调用
    constructor(name, age) {
        // 在实例方法中，this 就表示当前实例
        // 在构造函数中，当前对象就是当前新建的那个对象
        // 可以通过this像新建的对象添加属性
        this.name = name;
        this.age = age;
    }
    /**
    直接定义的属性是实例属性，需要通过对象的实例去访问
    const per = new Person()
    per.name
    使用 static 开头的属性是静态属性（类属性），可以通过类去访问
    Person.age
    readonly 只读属性
     */
    // 实例属性
    // name: string = "xm"
    // // 静态属性
    // static age: number = 20
    // // 只读静态属性
    // static readonly hobby: string[] = ["吃饭", "喝水"]
    bark() {
        // 在方法中通过this表示当前调用方法的对象
        console.log('汪汪汪');
    }
}
const dog = new Dog('xh', 20);
console.log(dog);
dog.bark();
