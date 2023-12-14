//Creating a function to add new task to the list 

function addTask(){
    //getting Tasks
    let taskInput = document.getElementById("taskInput")
    //used query selctor to select the hour Input id
    let hourInput = document.querySelector("#hourInput")
    //used query selctor to select entry list
    let entryList = document.querySelector(".entryList")
    //used query selctor to select the totalHours
    let totalHours = document.querySelector("#totalHours")

    if(taskInput.value.trim() === ""|| hourInput.value = '' || isNaN(hourInput.value)){
        alert("Please enter valid input");
        return;
    }



}
