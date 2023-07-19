# TypeScript_Practice

### TypeScript를 사용하는 이유
- TypeScript는 JavaScript의 타입부분을 업그레이드해서 사용하는 언어.
- TypeScript는 타입을 엄격하게 검사해 훨씬 더 간편하게 에러 핸들링 가능.

#### TypeScript 설치
```
npm i -g typescript
```

#### TypeScript 컴파일
```
tsc -w
```

## TypeScript 필수 문법
#### 변수 타입 지정
```tsx
let userName :string = 'kim';

// string만 담을 수 있는 배열 
let userName :string[] = ['kim', 'park'];

// ?는 name 속성이 옵션
let userName :{ name?: string } = {name : 'kim'};

// string 혹은 number 타입 
let userName : string | number = 'kim';
```

#### 타입을 변수에 담기
타입을 담은 변수명은 대문자로 시작.

```tsx
type Score = string | number;

let yourScore :Score = 95;
```

#### Class 타입 지정
```tsx
class User {
  name : string;
  constructor(name :string){
    this.name = name;
  }
}
```

## any, unknown 타입
타입을 미리 지정하기 애매할 때 `any`, `unknown` 타입 사용
#### any 타입
모든 자료형을 허용. 타입 검사 오류 방지용. 

```tsx
let a :any;
a = 10;
let b :string = a; // 에러 안 남
a - 1; // 에러 안 남
```

#### unknown 타입
모든 자료형을 허용. 자료 집어넣어도 타입은 그대로 unknown. any 타입보다 안전. 

```tsx
let a :unknown;
a = 10;
let b :string = a; // 에러. string 타입이 지정된 변수에 unknown 타입 할당 못 함. 
a - 1; // 에러. - 연산은 number 타입에서만 가능. a는 unknown 타입. 
```

## 함수 타입 지정, void 타입
#### 함수 타입 지정
파라미터, return 값 타입 지정 가능. <br>
만약 파라미터 타입 지정을 하지 않는다면 `any` 타입. 

```tsx
// 파라미터 number, return값 number 
function multiply(x :number) :number {
  return x * 2;
}
```

#### void
return할 자료가 없는 함수의 타입으로 사용 가능. 
```tsx
function multiply(x :number) :void { 
  return x * 2 // 에러
}
```

## Narrowing, Assertion
string|number 같은 union 타입에는 연산 불가능. <br>
`Narrowing`이나 `Assertion`으로 해결. 

```tsx
function Add(x :number | string){
   return x + 1  // 에러 
}
```

#### Type Narrowing
type이 아직 하나로 확정되지 않았을 경우 if문 등으로 타입을 하나로 정해줘야 함. <br>
if문 사용시 마지막에 else{} 없으면 에러.  
```tsx
function Add(x :number | string){
   if(typeof x === 'string'){
    return x + '1';
  } else {
    return x + 1;
  }
}
```

#### in 연산자 narrowing
`if(키값 in object자료형)`으로 narrowing 가능. <br>
```tsx
type Fish = { swim: string };
type Bird = { fly: string };

function Func(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim
  }
  return animal.fly
}
```

#### instance of narrowing
class로부터 생성된 object라면 `instanceof`로 narrowing 가능. <br>
```tsx
let a = new Date();

if (a instanceof Date){
  console.log('true');
}
```

#### literal type
object 구분할 일 많을 때 literal type 만들면 narrowing하기 편리. <br>
```tsx
type Car = {
  wheel : '4개', // literal type
  color : string
}
type Bike = {
  wheel : '2개', // literal type
  color : string
}

function Func(x : Car | Bike){
  if (x.wheel === '4개'){
    console.log('the car is ' + x.color)
  } else {
    console.log('the bike is ' + x.color)
  }
}
```

#### Type Assertion
type 덮어쓰기. 변수를 특정 type으로 명시하는 것. <br>
`as` 키워드는 union type같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할. <br>
```tsx
function Add(x :number | string){
  return (x as number) + 1 // x를 number라고 주장
}
```

## type alias, readonly
#### type alias
타입도 변수에 담아서 사용 가능. <br>
변수 이름 대문자로 시작, 뒤에 `type` 키워드 붙임. 
```tsx
type Score = string | number | undefined;

let yourScore = 'A';
```

#### readonly
TypeScript는 object 자료를 const로 선언하여도 내부 수정 가능. <br>
`readonly` 사용하여 수정 막음. 
```tsx
type Mem = {
  readonly name : string,
}

let member :Mem = {
  name : 'kang';
}

member.name = 'lee'; // 에러 
```

## Literal Type
`literal type`은 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입. <br>
더 엄격한 타입 지정 가능. 
```tsx
let direction :'left' | 'right';
direction = 'left';
```

#### as const
object value 값을 그대로 타입으로 지정해줌. <br>
object 속성들에 모두 readonly 붙여줌.
```tsx
var Member = {
  name : 'kim'
} as const;

function myFunc(a : 'kim') {

}
myFunc(Member.name);
```

## 함수, methods에 type alias 지정
#### 함수 type alias
함수 타입은 `()=>{}` 화살표 함수 사용. <br>
함수 type alias로 저장해서 사용하려면 함수 표현식 써야함. 
```tsx
type NumOut = (x : number, y : number ) => number;

let PlusNum :NumOut = function(x,y){
  return x + y;
}
```

#### methods type alias
object 안의 함수도 타입 지정 가능. 
```tsx
type MyMethods = {
	plusOne : (a :number) => number,
	greeting : () => void
}

let yourmethods :MyMethods = {
	plusOne(a){
		return a + 1; 
	},
	greeting : () => {
		console.log('hello');
	}
}
```

## TypeScript로 HTML 변경
#### instanceof 사용하는 narrowing
instanceof 연산자를 사용하여 우측의 타입에 해당 속성이 있는지 체크. <br>

```tsx
let title = document.querySelector('#title');

if (title instanceof HTMLElement) {
  title.innerHTML = '제목입니다.';
}
```
> 참고 <br>
>- a 태그: HTMLAnchorElement <br>
>- img 태그: HTMLImageElement <br>
>- h4 태그: HTMLHeadingElement <br>

## Class 타입 지정
#### constructor 타입 지정
TypeScript에서 constructor 사용시 필드에 값을 미리 선언해주어야 함. <br>

```tsx
class Person {
  name;
  age;
  constructor(){
    this.name = 'kim';
    this.age = 20;
  }
}
```

#### prototype 타입 지정
prototype의 methods에도 타입 지정. <br>

```tsx
class Person {
  age;
  constructor(a :number){
    this.age = a;
  }
  addAge(a : number){
    console.log(1 + a);
  }
}
```

## Object 타입 지정 interface
#### object의 타입 미리 지정
대문자로 작명, `{}`안에 타입 지정.<br>

```tsx
interface Info {
  name :string,
  age :number,
}

let user :Info = { name : 'lee', age : 20 }
```

#### extends 사용하여 상속

```tsx
interface Info {
  name :string,
  age :number,
}

interface NewMember extends Info {
  address :string,
}

let user :Info = {
  name : 'lee',
  age : 20,
  address : 'Seoul'
}
```

## Class 안의 Access Modifiers
#### public
`public`이 붙은 속성은 자식 object들이 마음대로 사용, 수정 가능. <br>
`public` 키워드 생략해도 기본값으로 부여. <br>
```tsx
class Info {
  public name: string;
  constructor(){
    this.name = 'kim';
  }
}

let user1 = new Info();
user1.name = 'park';  // 가능
```

#### private
`private` 붙은 속성들은 오직 `class { }` 안에서만 수정이 가능. <br>
속성을 외부에서 숨기고 싶을 때 사용. <br>
```tsx
class Info {
  private name: string;
  constructor(){
    this.name = 'kim';
  }
}

let user1 = new Info();
user1.name = 'park';  // 에러
```

#### protected
`private`과 비슷하지만 extends 된 class 안에서도 사용 가능. <br>
```tsx
class Info {
  protected age = 10;
}

class NewInfo extends Info {
  doThis(){
    this.age = 20; // 가능 
  }
}
```

#### static
`class { }` 안에 집어넣는 변수, 함수 등은 class로 부터 새로 생성되는 object(instance)에 부여됨. <br>
class에 직접 변수나 함수 부여하고 싶으면 `static` 키워드 사용. <br>
```tsx
class Info {
  static x = 10;
  y = 20; // 자식만 사용 가능
}

let user1 = new Info();
user1.x // 불가능
user1.x // 가능
```

## Generic
#### Generic 함수
단일 타입보다 다양한 타입에서 작동하는 컴포넌트를 만들 수 있음. <br>
함수 return 값의 타입이 애매할 경우 타입스크립트는 타입을 알아서 변경해주지 않음. <br>
함수에 `<>` 괄호 열어서 타입 파라미터 입력. <br>
```tsx
function Func<T>(x: T[]) :T {
  return x[0];
}

let a = Func<number>([4,7]); // a :number
let b = Func<string>(['Lee', 'Kang']); // b :string
let c = Func(['12', '24']); // 타입 유추. c :number
```

#### Generic Constraints
extends 문법 사용해서 타입 제한. <br>
```tsx
function AddOne<T>(x: T) {
  return x + 1; // <T>의 타입이 불확실하므로 에러. 
}

let a = AddOne<number>(100); // 에러. 
```

```tsx
function AddOne<T extends numger>(x: T) {
  return x + 1;
}

let a = AddOne<number>(100); // 가능. 
```

interface 통해 제약 조건 명시 후 extends 사용. <br>
```tsx
interface CheckLength {
  length : number;
}
function 함수<T extends CheckLength>(x: T) {
  return x.length
}

let a = 함수<string>('hello')  // 가능
let a = 함수<number>(1234) // 에러
```

## Tuple
#### tuple type
자료의 위치까지 정확히 지정 가능한 array에 붙일 수 있는 타입. <br>
```tsx
let Member :[string, number];
Member = ['Lee', 26]
```

#### rest parameter에서 tuple
rest parameter 타입 지정 시 `tuple` 가능. <br>
```tsx
function Member(...x :[string, number] ){
  console.log(x);
}
Member('Lee', 26)  // 가능
Member('Lee', 26, 31)  // 에러
Member('Lee', 'Park')  // 에러
```

#### tuple 안에 옵션 표시
`tuple` 안에 옵션 표시 가능한데, `?` 옵션 기호는 뒤에서만 붙여야 함. <br>
```tsx
let Member :[string, number?] = ['Lee', 26];
let Member :[string, number?, boolean?] = ['Lee', 26];
```
