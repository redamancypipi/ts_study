"use strict";
(function () {
    /**
    以  abstract 开头的是抽象类，不能用来创建对象，是专门用来被继承的类。可以添加抽象方法
     */
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        bark() {
            // 在类的方法中，super就表示当前类的父类
            console.log('汪汪汪');
        }
    }
    const dog = new Dog("小白", 20);
    console.log(dog);
    dog.bark();
})();
