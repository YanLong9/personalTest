//number
let a: number = 10

//字面量(常量)
let b: 10
b = 10
b = 11

//联合类型
let c: 'male' | 'female'    //c的值可以为'male'或'female'
c = 'male'                  //c的值可以为'male' 
c = 'female'                //c的值可以为'female'
c = 'hello'                 //c的值不可以为'hello'

//联合类型2
let d: number | string      //d的值可以为number或string
d = 12                      //d的值可以为number
d = "12"                    //d的值可以为string
d = true                    //d的值不可以为boolean

//any:任意原生JS的数据类型,相当于对该变量关闭了TS的类型检测
let e: any                //显式的声明e为any类型变量
e = "12"                  //string
e = 121                   //number
e = true                  //boolean
e = null                  //null
e = undefined             //undefined
e = {}                    //object
e = []                    //array
e=function(){}            //function
e=new Date()              //date

let f                     //隐式的any类型变量

//unknown : 代表未知类型的值
let g: unknown
g = "12"                  //string
g = 121                   //number
g = true                  //boolean
g = null                  //null
g = undefined             //undefined
g = {}                    //object
g = []                    //array
g=function(){}            //function
g=new Date()              //date

let h: string
h = e                       //e是any类型的变量，h是string类型的变量，但是e赋值给h却没有报错
h = g                       //g是unknown类型的变量，h是string类型的变量，但是g赋值给h有报错


//类型断言，可以用来告诉编译器，该变量的类型
h = e as string      //变量 as 类型
h = <string>g        //<类型>变量

//将变量e/g首先转换为要断言成的变量类型，然后进行赋值
//当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T

var str: number | string = '1'
var str2: number = <number>str         //str类型string转number，报错
var str2: number = <string>str         //str类型string转string成功，string赋值number，报错
var str2: number = <unknown>str        //str类型string转unknown成功，unknown赋值number，报错 
var str2: number = <any>str            //str类型string转any成功，any赋值number，成功
var str2: number = <boolean>str        //str类型string转boolean，报错，boolean赋值number，报错
console.log(str2)

//函数返回值
function test1(): number {        //显示的声明函数返回值类型
  return 123
}
function test2(): boolean {       //显示的声明函数返回值类型       
  return true
}
function test3() {                //不声明函数返回值类型，TS会自动检测
  return 'true'
}
function test4(num: number) {      //不声明函数返回值类型，TS会自动检测
  if (num > 0) { return num } else { return "false" }
}
b = test3()                       //报错，类型不对应

//void表示空，以函数为例，就表示函数没有返回值
function test5(): void {
  // return 123       //报错，类型不匹配
  // return '123'     //报错，类型不匹配
  return null         //类型匹配
  return undefined    //类型匹配 
  return              //类型匹配
}

//never,永远不会有值
function test6(): never {
  throw new Error('error')
}
function test7(): never {
}