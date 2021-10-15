let a: object             //object数据类型
a = {}                    //object
a = []                    //array
a = function () { }       //function
a = new Date()            //date
a = null                  //null
a = undefined             //undefined
a = 123                   //number
a = 'str'                 //str
a = true                  //boolean
a = Symbol()              //symbol

//objec字面量
let b: { name: string, age: number }     //object字面量，该变量，有且只能有这两个属性
b = {}                                   //缺少name、age属性
b = { name: "叶青玄" }                    //缺少属性
b = { age: 18 }                          //缺少name属性

let c: { name?: string, age: number }     //object字面量，该变量，必须有age属性，name可有可无
c = {}                                   //缺少name、age属性
c = { name: "叶青玄" }                    //缺少age属性
c = { age: 18 }                          //name属性可有可无

let d: { name?: string, age: number, [propName: string]: any }     //object字面量，该变量，必须有age属性，name可有可无
d = {}                                                             //缺少name、age属性
d = { name: "叶青玄" }                                              //缺少age属性
d = { name: "叶青玄", age: 18, gender: 'male', height: 175 }        //

//function 字面量
/**
 * 用来限制函数的结构
 * (形参:类型,形参:类型...)=>返回值类型
 */
let e: (a: number, b: number) => number
e = function (a: number, b: number) {
  return a + b
}
e = function (a: number, b: number, c: number) {     //参数多余
  return a + b
}
e = function (a: number, b: number) {                //返回值错误
  return a + 'hello'
}
e = function (a: number) {                            //
  return a
}

//array 
/**
 * let a:number[]
 * let a:Array<number>
 */
let f: number[]
let g: string[]
let h: boolean[]
let i: symbol[]
let j: undefined[]
let k: null[]
let l: object[]
let m: any[]
let n: unknown[]
let o: void[]
let p: never[]
let q: 10[]


//tuple
/**
 * 元祖，固定长度的数组
 * let r:[string,string]
 */
let r: [string, string]
r = ["hello", "abc"]


//enum
/**
 * 枚举
 */
enum Gender {
  male = 1,
  female = 0
}
let s = {
  name: '白汐',
  gender: Gender.male
}

// |标识或，&标识且
let t: { name: string } & { age: number }
t = {}
t = { name: '夏尔' }
t = { age: 18 }
t = { name: '夏尔', age: 18 }
t = { name: '夏尔', age: 18, gender: Gender.male }

//类型的别名
type myType = string
type myType1 = 1 | 2 | 3 | 4 | 5 | 6 | 7
let u: myType1
let v: myType1
let w: myType1

u = 1
v = 2
w = 3