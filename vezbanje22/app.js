// niz je osnovna struktura podataka odnosk=no grupisanje vecih skupa vrednosti i porenjani su u nekim pozicijama (indexu)
// mozemo ih manipulisati tim pozicijama i pocinju od 0 
//math.floor zaokruzuje manji broj math.ceil na veci

//number = [3, 5, 10, 21, 42, 22, 1];
//unos =parseInt(prompt("Enter your number"));
//founded= false;
//for(i=0; i<number.length; i++){
//    if(unos===number[i]){
//       founded = true;
//       break;
 //}
 //}
 //if(founded){
//console.log("Broj je pronadjen");
//}else{
 //   console.log("Broj nije pronadjen");
//}

//number = [3, 5, 10, 21, 42, 22, 1];
//maxNum= number[0];
//minNum=number[0];
//for(i=0; i<number.length; i++){
 //   if(number[i]>maxNum){
 //       maxNum=number[i];
 //   }
 //   if(number[i]<minNum){
   //     minNum=number[i];
    //}
//}
 //       console.log("Najveci broj je: "+ maxNum);
 //       console.log("Najmanji broj je: "+minNum);
 
 //number = [3, 5, 10, 21, 42, 22, 1];
//maxNum= number[0];
//minNum=number[0];
//for(i=0; i<number.length; i++){
 //   if(number[i]>maxNum){
//        maxNum=number[i];
// }
 //if(number[i]<minNum){
 //    minNum=number[i];
 //   }
//}
//console.log("Razlika izmejdu brojeva je: ", maxNum-minNum);
  

//numbers = [1, 2, 3];

//console.log(numbers);
//numbers.push(Number(prompt("Enter your number")));
//console.log|(numbers);

// arr1 = [1, 2, 3, 4];
// arr2 = [];
// for(el of arr1){
//     arr2.unshift(el);
// }
// console.log(arr1);
// console.log(arr2);

// varijabla.unshift dodaje broj na pocetak
// var.push dodaje broj na kraju
// var.pop uzima poslednji broj //
//var.slice pravi nam kopiju elemenata iz arraya ne ukljujuci poslednji el
//var.spice brise el 


// arr = [];
// unos =parseInt(Number(prompt("Unesi broj elemenata")));
// for(i=0; i<unos; i++){
//     el=Number(prompt("Unesite el:"));
//     arr.push(el);
// }
//     console.log(arr);

// arr= ["Red", "Green", "White", "Black"];
// str= arr[0];
// for(i=1; i< arr.length; i++){
    
//     str+="+" + arr[i];
// }
// console.log(str);

// str = ["The quick brown fox"];
// str2= "";
// for(i=0; i<str.length ; i++){
//     if(i % 2 == 0){
//         str2 += str[i].toUpperCase;


//     }else{
//         str2+=str[i].toLowerCase;
//     }
//     }
//     console.log(str2)


// arr = [42, 25, 56, 47, 32];
// arr2=[];
// arr3=[];
// for(el of arr){
//     if(el % 2 === 0){
//         arr2.push(el);
//     }else{
//         arr3.push(el);
//     }
// }
// console.log("Parni brojevi su:", arr2);
// console.log("Neparni brojevi su:", arr3);


// ZAdatak: ispisati js program gde ce se dodavati - nakon parnog broja.
// arr= [9,3,2,71,6,43,23];
// arr2=[];
// for(i=1; i<arr.length; i++){
//   if(i % 2 ===0){
//     arr2.push("-" + arr2[i]);
//   }
// }
// console.log("Novi niz je", arr2);

//FUNKCIJE- 
//nam sluze da cuvamo kod u jednoj mem 
// funcion mojaF (){
//   console.log("linije koda");
// }
// mojaF(); -----> pozvace se funkcija iz mem mojaF

// unos =parseInt(prompt("Enter your number"));
// function broj(){
//   console.log(unos)
// }
// broj();

// function sum(a, b ){
//   console.log("ZBir je ", a +b);
// }
// sum(Number(prompt("Unesite broj")), 1);


// unos =parseInt(prompt("Enter your number"));
// function checkNum(unos){
//   if(unos % 2 ==0 ){
//     console.log("Broj je paran");
//   }else{
//     console.log("Broj je neparan");
//   }
// }
// checkNum();
 
// function largeNum(arr){
// max=arr[0];

// for(el of arr){
//    if(el>max){
//        max = el;
//    }
// }
// console.log("Najveci broj je: ", max);
// }
 
// function largeNum([1,3,4,6] ){

// }
// console.log("1000 linija koda");

// function anagram(a, b){
//   isAnagram=true
//   if(!b.includes(char)){
//     isAnagram=false;
//   }
// }
// if(isAnagram){
//   console.log("Anagram");
// }else{
//   console.log("Not anagram");
// }

// function anagram( "pears" , "spear");

// function srVred(a, b,c ){

//     console.log("SRednja vrednost je", (a+b+c)/3 );
//   }

// srVred(10, 20, 30);

// function matrix(n){
//  console.log( );
// }

// matrix(5);

// function Ptrougla(a,b,c){
//   console.log("Povrsina trougla je: ", (a+b+c)/2);
// }
//  Ptrougla(10, 15, 20);

// function twiceAsOld(otac, sin){
//  a = otac - sin *2
//  console.log(a) ;
// }
// twiceAsOld(55,30);

// function sumStr(a,b){
//   a= parseInt(a);
//   b = parseInt(b);
//   zbir=(a+b);
//   console.log(zbir);
// }
// sumStr(4,5);

// function oddCount(n){
//  for (i=0; i<n; i++){
//   if(i % 2 != 0){
//     console.log(i)
//   }
//  }
// }

//  oddCount(7);
//  oddCount(14);

//check same case
// function sameCase(a,b){
//   if(Number(a) || Number(b)){
//     return -1;
//   }else if(a.toLowerCase() === a&&b.toLowerCase() ||  && b.toLowerCase() === b ||b.toLpperCase() === b){ 
//       return 1;
//     }else{
//         return 0;
//       }
//     }
  
//     sameCase(B,a);
 
// DOMACI
// niz= [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9],
// [12, 15, 18],
// ];


// function sheep(arrayOfSheep){
// var num = 0;
  
// for(var i = 0; i < arrayOfSheep.length; i++)
//   if(arrayOfSheep[i] == true)
//     num++;
    
// return num;
// }
// sheep(17);

// STRING TO NUMBER
//  function mojaF(str){
//   console.log (parseInt(str));
// } 
// mojaF("8736427");

//Replace dot with dash
// var replaceDots = function (str) {
  
//   console.log (str.replace(/\./g,'-'));
//     }


// call back funcija koja se salje kao argumant i pozivamo je kasnije
//Свака функција која се прослеђује као аргумент другој функцији да би се могла 
//извршити у тој другој функцији назива се као функција повратног позива.

// arr = [3,9,1,27,54,23];

// mojaF= (e) =>{
//   console.log(e);
// }
// sum= (e)=>{
//   console.log(e);
// }
// arr.forEach(mojaF);
// sum.

// arr=[0, 1, 2, false, undefined, '', 3, null ];


// arr.forEach((el) =>{
//   if(el){
//     arr.push(el);
//   }
// });
// console.log(arr);

// arr=[1,2,3,2,1];
// b=[];
// arr.forEach((el) =>{
//   if(el!==1 && el!==2){
//     arr.push(arr);
//   }
// });
// console.log(arr);


// function fakeBin(str) {

//   console.log (parseInt(str));
// }
  

// data=[1, true, "", "hana", 23, null, undefined, 123, 0, 77];
// arr = data.filter((el) => {
    
//     return el;
// });
// console.log(arr);

// data=[3, 6, 8,2];
// arr= data.filter((el)=>{
//     return el>=5;
// });
// console.log(arr);


// data=["dog", "wolf", "by", "family", "eaten", "camping"];

// arr = data.filter((el) =>{
//     return el.length<=5

// });
// console.log(arr);

//data.map -> prelazi kroz arr i on nam kreira novi niz na osnovu predhofnog niza iste duzine

// data=[2,5,100];
// arr= data.map((el)=>{
//     return el*2;
// });
// console.log(arr);

// data=[2,5,100];
// arr= data.map((el)=>{
//     return String(el);
// });
// console.log(arr);

// data=["john", "JACOB", "jinGleHeimer", "schimdt"];
// arr = data.map((el)=>{
//     return el[0].toUpperCase() +el.slice(1).toLowerCase();
// });
// console.log(arr);

// some proverava da li postoji bilo el koji da sipunjava taj uslov i vraca true ili false

// every ako svaki el ispunjava zadat ulsov 


// data=  [1,2,3,4,5,6,7,8,9,10];
// arr = data.every ((el)=>{
//     return el>0 ;
// });
// console.log(arr);


//array irteration w3schools



// data=[3,4,8,9,7];
// datareverse= data.filter((el)=>{
//   data.pop();
//   data.unshift();

// });
// console.log(datarevrse);


// http ODGLEDAJ!!!

// callback promise fetch




// fetch ("https://jsonplaceholder.typicode.com/users") =>{
//   .then((res)=> {
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log("greska pri fechanju");
//   });
// }

// myPromise= new Promise ((resolve,rejcet)=>{
//   num = Math.random()*10;
//   if(num<5){
//     resolve(num);
//   }
//     rejecet('Broj je manji od 5 (${num})');
//   });
//   myPromise
//   .then((res)=>
//   console.log("Promise je resolved", res);

// })
// .catch((err)=>{
//   console.log(err);
// });



// fetch ("https://jsonplaceholder.typicode.com/users") 
//   .then((res)=> {
//     return res.json()
//   })
//   .then((res) =>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log("Desio se reject", err);
//   });



