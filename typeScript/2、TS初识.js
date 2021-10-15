console.log("Hello TS!");
//类型声明
//先声明，后赋值
var a;
a = 10;
a = 33;
// a = 'hello'  //报错
a = 44;
/*

    声明变量a,并声明a为number类型，以后就只能将a赋值number，否则会有报错提示

    TS编译时，可以编译为任意版本的JS，ES6、ES5、ES3...
    默认会是ES3，可以进行配置修改，

*/
//声明赋值一起进行
var str = 'hello you';
//当声明赋值一起进行，可以不声明该变量的type，这样TS会自行判断添加
var flag = false;
flag = 'string'; //虽然会报错，但是仍然会编译成功，以为TS考虑了推广问题
//函数参数、返回值类型声明
//JS
function sumJS(a, b) {
    return a + b;
}
sumJS(123, '789'); //'123789'，期望912，但是因为参数类型错误，导致输出了错误的结果
//TS
function sumTS(a, b) {
    return a + b;
}
sumTS(123, '789'); //传参类型错误
sumTS(123, '789', 456); //有多余的无用参数
var result = sumTS(123, '789', 456); //返回值类型判断错误
function test(a, b) {
    return a + '123';
}
/*

  1、在TS中声明变量，可以在声明的同时将变量的类型一起声明，这样以后就只能给该变量赋该类型的值，否则就会报错

    let a:string                 //变量类型必须为小写，大写就是另外的含义了

    let a:number=24              //也可以声明、类型声明、赋值一起进行

    let flag=true                //也可以不声明类型，但是TS会自行判断添加该变量的类型声明

    flag = 'string'              //虽然会报错，但是仍然会编译成功，以为TS考虑了推广问题



    PS：
      1.声明变量a,并声明a为number类型，以后就只能将a赋值number，否则会有报错提示
      2.TS编译时，可以编译为任意版本的JS，ES6、ES5、ES3...,默认会是ES3，可以进行配置修改，
      3.虽然会有报错提示，但是仍然会编译成功，以为TS考虑了推广问题

  2、TS函数参数类型声明、返回值类型声明

      function sumTS(a:number,b:number):number{
        return a + b
      }

      sumTS(123, '789')                                         //传参类型错误

      sumTS(123, '789', 456)                                    //有多余的无用参数

      let result: string = sumTS(123, '789', 456)               //返回值类型判断错误

      function test(a: number, b: number): number {             //返回值类型错误
        return a + '123'
      }

      PS：
        1.参数后直接声明类型，就确定了该参数的类型声明，在 () 与 {} 直间做返回值的类型声明
        2.传参类型错误，会有提示
        3.有多余的参数，会有提示
        4.返回值的类型错误，会有提示

*/ 
