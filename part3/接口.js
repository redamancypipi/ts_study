"use strict";
(function () {
    const obj = {
        name: '111',
        age: 90
    };
    const obj2 = {
        name: '111',
        age: 90,
        sex: '女'
    };
    // 实现一个接口，需要满足接口的需求
    class Myclass {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log("hi");
        }
    }
})();
