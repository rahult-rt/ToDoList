
// Selectors
var ul =document.getElementsByTagName("ul")[0];
var button = document.getElementById("enter");
var input = document.getElementById("userinput");


// Event Listeners

button.addEventListener ("click", function(){

    if( input.value.length >0) {

        // Create List
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.id="done1"
        ul.appendChild(li);
       
        input.value = "";


        // Create RemoveButton
        var RemoveButton = document.createElement('button')    
        RemoveButton.innerText = "REMOVE";
       RemoveButton.className = "BTN";

        li.appendChild(RemoveButton);
      
        //Remove the task

        RemoveButton.addEventListener('click', function(e) {
            li.parentNode.removeChild(li);
        }, false);
        
       

        // // Create TaskCompletedButton

        var TaskCompletedButton = document.createElement('button');
        TaskCompletedButton.innerText = 'Completed';
        li.appendChild(TaskCompletedButton);
        TaskCompletedButton.className ="BTN";
        TaskCompletedButton.onclick = StrikeThrough;

        
        // Function - strike the item on completion

        function StrikeThrough(event){
            event.target.parentNode.classList.toggle("done");
            console.log
        }
        
    }})

    





    // for var  i = 0; i < todolist.length; i++) {
     
    //     todolist[i] = todolist [i]+ "!";
    
    // console.log(todolist[i])
    // };
    
    // todolist.forEach(function(todolist, i){
    //     console.log (todolist,i);
    // };