//broj = 10;
 //unos =parseInt(prompt("Enter your number"));
 // while( unos!==broj) {

 //     if(unos<10){
 //     unos=parseInt(prompt("Number is too low"));
 //   { else{
 //       unos=parseInt(prompt("Number is too high"));
 //    }


 //unos =parseInt(prompt("Enter your number"));
//sum=0;
 //while(unos >= 0 ){
// sum+=unos;
// unos =parseInt(prompt("Enter your number"));
// }
// console.log(sum);
//unos =prompt("Enter your name: ");
//str= "END";
//while(unos !==str ){
 //   console.log(unos);
 //   unos=prompt("Enter your name: ");
//}
//console.log("I am done");
//unos =parseInt(prompt("Enter your unos"));
//pronadjeno = 0;
//broj=1;
//while(pronadjeno!==unos){
 //  if ( broj%2===1){
 //      pronadjeno++;
 //      console.log(broj);
 //  }
//}

var a = "Ana voli Milovana"
var withoutSpacesAndSmallLetters = a.replace( " ", "").toLowerCase();
var lastletter = withoutSpacesAndSmallLetters.length -1;
var isPalindrom = true ;

for(i=0; i < withoutSpacesAndSmallLetters.lenght ; i++) {
    if(withoutSpacesAndSmallLetters[i] !== withoutSpacesAndSmallLetters[lastletter - i]){
        isPalindrom = false ;
        break;
    }

}
console.log(isPalindrom);