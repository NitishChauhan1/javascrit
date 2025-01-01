//Closures in javascript

function outer()  {
    let count = 4;
    return function (){
        count++;
        return count;

    };
}
 let high = outer();
 console.log(high());
 