(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    bark() {
      console.log(`${this.name}在叫`);
    }
  }
  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
        // 如果在子类中写了构造函数，那么一定要在子类的构造函数中调用父类的构造函数，super()
      super(name);// 调用父类的构造函数
      this.age = age;
    }
    bark() {
      // 在类的方法中，super就表示当前类的父类
      super.bark();
    }
  }

  const dog = new Dog("小白", 20);
  console.log(dog);
  dog.bark();
})();
