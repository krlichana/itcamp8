//kolicina = Number(prompt("Unesite kolicinu"));
//str="";
//space="";
// for(i=1; i<kolicina; i++);{
//     space+=" ";
// }

//for(i=1; i<=kolicina; i++){
 //str+="* ";
 //console.log(space+ str + space);
// space= space.slice(1);
//}

kolicina = Number(prompt("Unesite kolicinu"));
for(i=1; i<=kolicina; i++) ;{
if (i %3=== 0 && i %5 === 0) {
    console.log (" buzzfizz") ;
}else if ( i %3 === 0) {
 console.log("fizz") ;
}else if(i %5 === 0 ) {
    console.log("buzz");
}else{
    console.log("i");
}
}




   
    