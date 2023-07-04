// 타입스크립트 기본 타입
// 01. 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let userName :string = 'yeo';
let age :number = 30;
let area :string = 'korea';

// 02.가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보십시오.
let music :{ title: string, singer: string } = { title: 'View', singer: 'Shinee' };

// 03. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
// }

// project 변수 우측에 적으면 됩니다.
// member 안엔 문자로 가득한 array만 들어올 수 있고
// days는 숫자, started는 true/false만 들어올 수 있습니다.

let project :{ 
	member :string[], 
	days :number, 
	started :boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}