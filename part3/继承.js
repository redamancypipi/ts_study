"use strict";
(function () {
    class Animal {
        // 构造函数，会在对象创建时调用
        constructor(name, age) {
            // 在实例方法中，this 就表示当前实例
            // 在构造函数中，当前对象就是当前新建的那个对象
            // 可以通过this像新建的对象添加属性
            this.name = name;
            this.age = age;
        }
        bark() {
            // 在方法中通过this表示当前调用方法的对象
            console.log(`${this.name}在叫`);
        }
    }
    //   狗 继承 动物类
    // 如果子类和父类有同名的方法，那么以子类的方法优先，这叫做方法重写
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑`);
        }
    }
    const dog = new Dog("小白", 20);
    console.log(dog);
    dog.run();
    dog.bark();
})();
