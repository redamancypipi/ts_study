(function(){
    // 描述对象类型
    type mytype = {
        name: string,
        age: number
    }

    const obj: mytype ={
        name: '111',
        age: 90
    }

    // 还可以用接口实现，接口用来定义一个类结构，接口指定要对象结构，而不考虑实际值，接口中所有方法都是抽象方法。同时也可以当作一个类型声明使用。接口可以重复声明，同名接口会被合并
    interface myInterface{
        name: string,
        age: number
    }
    interface myInterface{
        sex: string
    }
    const obj2: myInterface ={
        name: '111',
        age: 90,
        sex: '女'
    }

    interface myInter{
        name: string;
        say(): void
    }
    // 实现一个接口，需要满足接口的需求
    class Myclass implements myInter {
        name: string
        constructor(name: string) {
            this.name = name
        }
        say(){
            console.log("hi");
            
        }
    }
})()