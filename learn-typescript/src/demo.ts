// 基础数据类型

const a: undefined = undefined;
const b: null = null;
const c: string = 'Aaron';
const d: number = 1;
const e: boolean = true;
const f: symbol = Symbol('foo');

console.log(a, b, c, d, e, f); // undefined null Aaron 1 true Symbol(foo)

const f1: symbol = Symbol('foo');
const f2: symbol = Symbol('foo');
console.info(f1 === f2); // false
console.info(f1.toString()); // Symbol(foo)

// 数组

const arr1: Array<number> = [1,2,3];
const arr2: number[] = [1,2,3];

// 元组（Turple）
const arr3: [number, string] = [1, '2'];

// 枚举（Enum）
enum Color {
  Red,
  Green,
  Blue
}

const color1: Color = Color.Red;

// 函数
const addFunc = (a: number, b: number): number => {
  return a + b;
};

// 对象
interface Person {
  name: string;
  age: number;
  gender?: string;
}

const person: Person = {
  name: 'Aaron',
  age: 35,
}

interface Student extends Person {
  no: number;
}

const student: Student = {
  name: 'Aaron',
  age: 35,
  gender: 'male',
  no: 1111
}

// any 任意类型，和 JS 一样，不进行类型检查，比较危险
const anything: any = 1;

// void 和 any 相反，没有类型
function fun1(): void{}
const fun2 = (): void => {};

// never 永远不存在的类型
function fun3(): never {
  throw new Error('error');
}

const fun4 = (): never => {
  while (true) {}
};

// unknown 未知类型（更加安全的 any）
const unknownValue: unknown = 1;
if ((unknownValue as string).length) {
  console.log((unknownValue as string).length);
}

// 修饰符
class Person1 {
  public name: string; // public 公有属性可以在类的外部访问
  protected age: number; // protected 受保护属性只能在类内部和子类中访问
  private gender: string; // private私有属性只能在类内部访问
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student1 extends Person1 {
  no: number;
  constructor(name: string, age: number, gender: string, no: number) {
    super(name, age, gender);
    this.no = no;
  }
  sayHi() {
    console.log(`hi, my name is ${this.name}, I am ${this.age} years`);
    // console.log(this.gender); // error private私有属性只能在类内部访问
    // console.log(this.age); // error protected 受保护属性只能在类内部和子类中访问
  }
}

const person1 = new Person1('Aaron', 35, 'male');

person1.name; // Aaron
// person1.age; // error
// person1.gender; // error

const student1 = new Student1('Aaron', 35, 'male', 1111);


// type

type t1 = string;
type t2 = string | number;
type t3 = {
  name: string;
  age: number
}

const a1: t1 = 'Aaron';
const a2: t2 = 1;
const a3: t3 = {
  name: 'Aaron',
  age: 35,
}

// interface

interface IPerson {
  name: string;
  age: number;
  sayHi: () => void;
}

class Person2 implements IPerson {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`hi, my name is ${this.name}, I am ${this.age} years`);
  }
}


// 类型断言 type assertion

const colors1 = ['red', 'green', 'blue'];
// colors1 = ['red', 'green', 'blue', 'yellow']; // error
colors1[0] = 'yellow'; // error

const colors2 = ['red', 'green', 'blue'] as const; // 数组元素 readonly
// colors2 = ['red', 'green', 'blue', 'yellow']; // error
// colors2[0] = 'yellow'; // error