(function () {
    /**
    以  abstract 开头的是抽象类，不能用来创建对象，是专门用来被继承的类。可以添加抽象方法
     */
    abstract class Animal {
      name: string;
      age: number
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age
      }
    //   定义抽象方法，使用 abstract 开头，没有方法体，只能定义在抽象类中，子类必须对抽象方法进行重写
      abstract bark(): void
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
  