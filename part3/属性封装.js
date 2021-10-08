"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this.age = age;
        }
        // // 用来访问私有属性
        // getName(){
        //     return this.name
        // }
        // // 用来修改私有属性
        // setName(value: string){
        //     this.name = value
        // }
        // 属性存取器
        get name() {
            return this._name;
        }
    }
    const p = new Person('xm', 20);
    console.log(p.name);
})();
