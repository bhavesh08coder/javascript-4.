// function

function myfunction() {
    console.log("welcome");
    console.log("we are learing ja ");
}

myfunction();

function sum (a , b){
    console.log(a + b); 
}
// function will not work after return
// arrow function () =>  arrowsum,mul
// count = N   

// forEach loop(higher order function)    val,index,arr
let arr = [ 1, 2, 2, 2,];
 arr.forEach (function printVal(val){
    console.log(val);
  });

 // let num = [4, 6, 5,];

  let square = (num) =>{
    console.log(num * num);
  };

  num.forEach(square);

  // map method
 let num = [67, 90, 30,];
 
 let newArr = num.map((val) )( {
    return (val * val) ;
 });
  console.log(newArr);