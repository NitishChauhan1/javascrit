//Asynchronous Javascript with event loops

function sayHEllo(){
    console.log("Hello Everyone How Are You");

}

setTimeout(() => {
    sayHEllo();     ///This will be executed after 5 seconds
}, 5000);

console.log("2nd line to execute");

for (let index = 0; index < 10; index++) {
   console.log(index);
   
    
}