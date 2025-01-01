console.log("Script is running");

// Example ----> 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.textContent = "Changed text";
  });

// Example----> 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });
 
  // Example----> 3
  document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeOrder = document.getElementById("coffeeOrder");
    coffeeType.textContent = "Espresso";
    //also use to change css
     coffeeType.style.backgroundColor = "red";
     coffeeType.style.padding = "5px";

  })
  // Example---> 4
   document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem = document.createElement("li");
    newItem.textContent ="Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
   })

   //Example---->5
   document.getElementById("removeLastTask").addEventListener("click",function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();

   });
   //Example---->6

   document
   .getElementById("clickMeButton")
   .addEventListener("dblclick",function(){
    alert("Double Clicked");
   })

   //Example--->7
   document.getElementById("teaList").addEventListener("click",function(event){
  if(event.target && event.target.matches(".teaItem")){
     alert("You Selected--->"+ event.target.textContent);
  }

   });

   //Example--->8
  document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let feedback = document.getElementById("feedbackInput").value;
      console.log(feedback);
      document.getElementById("feedbackDisplay").textContent =
        "Feedback is: " + feedback;
        feedbackDisplay.style.backgroundColor = "red";
         feedbackDisplay.style.display = "center";
         feedbackDisplay.style.margin = " 10px 50px 30px 50px";
    });

    // example 9  
document.addEventListener("DOMContentLoaded", function () {  
  document.getElementById("domStatus").textContent = "DOM fully loaded";  
});

//example 10  
document.getElementById("toggleHighlight").addEventListener("click", function() {  
  let descriptionText = document.getElementById("descriptionText");  
  descriptionText.classList.toggle("highlight");  //we also can use add as toggle
});