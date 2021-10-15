//number
var a = 10;
//字面量(常量)
var b;
b = 10;
b = 11;
//联合类型
var c; //c的值可以为'male'或'female'
c = 'male'; //c的值可以为'male' 
c = 'female'; //c的值可以为'female'
c = 'hello'; //c的值不可以为'hello'
//联合类型2
var d; //d的值可以为number或string
d = 12; //d的值可以为number
d = "12"; //d的值可以为string
d = true; //d的值不可以为boolean
//any:任意原生JS的数据类型,相当于对该变量关闭了TS的类型检测
var e; //显式的声明e为any类型变量
e = "12"; //string
e = 121; //number
e = true; //boolean
e = null; //null
e = undefined; //undefined
e = {}; //object
e = []; //array
var f; //隐式的any类型变量
//unknown : 代表未知类型的值
var g;
g = "12"; //string
g = 121; //number
g = true; //boolean
g = null; //null
g = undefined; //undefined
g = {}; //object
g = []; //array
var h;
h = e; //e是any类型的变量，h是string类型的变量，但是e赋值给h却没有报错
h = g; //g是unknown类型的变量，h是string类型的变量，但是g赋值给h有报错
//类型断言，可以用来告诉编译器，该变量的类型
h = e; //变量 as 类型
h = g; //<类型>变量
var str = '1';
var str2 = str; //str、str2 是 string 类型
console.log(str2);
//函数返回值
function test1() {
    return 123;
}
function test2() {
    return true;
}
function test3() {
    return 'true';
}
function test4(num) {
    if (num > 0) {
        return num;
    }
    else {
        return "false";
    }
}
b = test3(); //报错，类型不对应
//void表示空，以函数为例，就表示函数没有返回值
function test5() {
    // return 123       //报错，类型不匹配
    // return '123'     //报错，类型不匹配
    return null; //类型匹配
    return undefined; //类型匹配 
    return; //类型匹配
}
//never,永远不会有值
function test6() {
    throw new Error('error');
}
function test7() {
}
