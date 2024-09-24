//  let marks = {
//     sameerali :100,
//     forkan : 20,
//     mursaleen : 5
// }
// //  console.log( marks);

//    for (let  i = 0; i < Object.keys(marks).lenght; i++) {
//           console.log("the" + Object.keys(marks )[i] + "are" + marks[ Object.keys(marks )[i]]);
//         }

//  let marks = {
//     sameerali: 100,
//     forkan: 20,
//     mursaleen: 5
// };
// console.log(marks);
// console.log(typeof marks );

// for (let i = 0 ; i < Object.keys(marks).length; i++) {
//     console.log("The " + Object.keys(marks)[i] + " has " + marks[Object.keys(marks)[i]] + " marks");
// }

//     let a =" sa,iudbqwuyb"
//   console.log(a);
// i = prompt( "enter a roll number ")

//   let s = 13
//   let i
//   while (i =s) {
//     console.log("try again");

// }
//   console.log("correct roll");
// let  num  = [1,2,3,4,5,6,7,8,9,10]
//  console.log(roll_of_class_10
// console.log(roll_10 [8]);
// console.log(roll_10 [9]);

//  for (let i = 0; i < roll_10.length; i++) {
//   console.log(roll_10 [i]);
//  }
//   let n = num.toString(

//   )
//   console.log(n)
//   console.log( num ,typeof  num);
//   let j = num.join (" and " )
//   console.log(j);
// let pop = num.pop( )
// console.log(num, pop);
// let push = num.push (56)
// console.log(num, push);
// let shift = num.shift( )
// console.log(num, shift);
//   let unshift =num.unshift (78)
//   console.log(num, unshift);

// let  num  = [1,2,3,4,5,6,7,8,9]
// let num2 = [11,12,13,14,15,16,17,18,19]
//  let num3 = [21,22,23,24,25,26,27,28,29,30]
//    delete num[0 ]
// console.log(num);
// let newarray = num.concat(num2 ,num3)

// console.log(newarray);
// console.log(num, num2 );
// let  num1  = [1,2,3,4,5,6,7,8,9]
// let compere = (a,b )=> {
//     return (b-a )
// }
// num.sort( compere)
// //  console.log(num);
//  num.reverse()
//  console.log(num1);
//  num.splice(2 ,4,35 ,45 ,55, 65,)
//  console.log(num);
// let newnum = num1.slice (2)
// console.log(newnum);
// let num2 = [ 1 , 2 , 3 , 4]
// for (let i = 0; i < num2.length; i++) {
//   console.log(num2[i] );
// }
// num2.forEach((Element) => {
// console.log(Element * Element);

// })
// console.log(num2);

// let name  =  "sameerali"
//   let arr = Array.from(name)
//   console.log(arr);
//    for (let  i of num2)
//   console.log(i);
//    for (let  i in num2)
//     console.log(i);

//  let sam = [3, 4, 5, 6 ]
//  console.log(sam);
//  let a = sam.map ( (value )=> {

// console.log(value );
// return value + 1;

//  })
//  console.log(a);
//  let a = sam.filter((value  )=>{
//   return value <= 5
//    })

//  console.log(a);
//  let a = sam.reduce ( (h1 , h2 )=>{
// return h1 + h2
//  }

//  )
//  console.log(a);
//  let number = Math.round(Math.random() *10)
//  console.log(number);
// let number = Math.round(Math.random() * 100);
// let number = 19
// console.log(number);

// let sam = prompt(" what is your roll number ");
// sam = Number.parseInt(sam);

// if (number === sam) {
// alert("true");
// } else {
// alert("try again because right asnwer is " + number);
// window.location.reload();
// }

// let write = confirm("write" )
// if (write ){
//   console.log("thanks");

// }else{
//   console.log("click ok ");

// }
// console.log(window);
// console.log(document);
//  let runAgain = true ;
// document.body.style.background ="black"
// const canDrive = (age) => {
//   return age >=18 ? true : false
// }
// while(runAgain){
// let age =prompt("enter your age")
// age = Number.parseInt(age)
// if(age<0){
//   alert(" please enter a valid age   ")
//   break;

// }
// if(canDrive(age)){
//   alert("you can drive ")
// }
// else{
//   alert("you cannot drive ")
// }
//  runAgain = confirm ("do you want to play again?")
// }
// let sam = prompt("enter your roll num");
// sam = Number.parseInt(sam);
// if (sam > 4) {
// location.href = "https://codewithharry.com";
// }
// console.log(location.href);
// let sam = prompt("enter your favourite colour ");
// document.body.style.background = sam
// console.log(document.body);

// let a = setTimeout(function (){
//  alert("Hello")
// }, 5000)
// let b = prompt("do you want to run settimeout")
//   if ("n" == b){
//     clearTimeout(a)
//   }

// console.log(a);
// const sam = (a, b) => {
// a + b;
// };
// setInterval(sum, 5000, 1, 12);
// setTimeout(sum, 1000 ,1 ,3 );

// setInterval(sum, 5000, 1 + 3);
// console.log(sum);

// digital watch
 const clock = document.getElementById("clock")
 
  setInterval(function()  {
    const date = new Date ();
    
    const h = date.getHours ();
    const mi = date.getMinutes ();
    const s = date. getSeconds();
    const m = date .getMonth ();

    const session = h >= 11 ?  " AM " : "PM";
    const timer = h +":" + mi + ":" + s +":" +session + m;
    // document.write (date);
    clock.innerHTML = timer;


  }, 1000);
  
  


  










