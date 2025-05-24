// 基础数据类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = undefined;
var b = null;
var c = 'Aaron';
var d = 1;
var e = true;
var f = Symbol('foo');
console.log(a, b, c, d, e, f); // undefined null Aaron 1 true Symbol(foo)
var f1 = Symbol('foo');
var f2 = Symbol('foo');
console.info(f1 === f2); // false
console.info(f1.toString()); // Symbol(foo)
// 数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 元组（Turple）
var arr3 = [1, '2'];
// 枚举（Enum）
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color1 = Color.Red;
// 函数
var addFunc = function (a, b) {
    return a + b;
};
var person = {
    name: 'Aaron',
    age: 35,
};
var student = {
    name: 'Aaron',
    age: 35,
    gender: 'male',
    no: 1111
};
// any 任意类型，和 JS 一样，不进行类型检查，比较危险
var anything = 1;
// void 和 any 相反，没有类型
function fun1() { }
var fun2 = function () { };
// never 永远不存在的类型
function fun3() {
    throw new Error('error');
}
var fun4 = function () {
    while (true) { }
};
// unknown 未知类型（更加安全的 any）
var unknownValue = 1;
if (unknownValue.length) {
    console.log(unknownValue.length);
}
// 修饰符
var Person1 = /** @class */ (function () {
    function Person1(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person1;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name, age, gender, no) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.no = no;
        return _this;
    }
    Student1.prototype.sayHi = function () {
        console.log("hi, my name is ".concat(this.name, ", I am ").concat(this.age, " years"));
        // console.log(this.gender); // error private私有属性只能在类内部访问
        // console.log(this.age); // error protected 受保护属性只能在类内部和子类中访问
    };
    return Student1;
}(Person1));
var person1 = new Person1('Aaron', 35, 'male');
person1.name; // Aaron
// person1.age; // error
// person1.gender; // error
var student1 = new Student1('Aaron', 35, 'male', 1111);
var a1 = 'Aaron';
var a2 = 1;
var a3 = {
    name: 'Aaron',
    age: 35,
};
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.sayHi = function () {
        console.log("hi, my name is ".concat(this.name, ", I am ").concat(this.age, " years"));
    };
    return Person2;
}());
// 类型断言 type assertion
var colors1 = ['red', 'green', 'blue'];
// colors1 = ['red', 'green', 'blue', 'yellow']; // error
colors1[0] = 'yellow'; // error
var colors2 = ['red', 'green', 'blue']; // 数组元素 readonly
// colors2 = ['red', 'green', 'blue', 'yellow']; // error
// colors2[0] = 'yellow'; // error
