(function () {
    class Person {
        // 可以在属性前添加修饰符
        // private 私有属性，只可以在类中修改，但是可以通过提供方法来让私有属性被修改
        private _name: string
        age: number
        constructor(name: string, age:number) {
            this._name = name
            this.age = age
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
        get name(){
            return this._name
        }
    }

    const p = new Person('xm', 20)
    console.log(p.name);
})()