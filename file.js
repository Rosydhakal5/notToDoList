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

    if(taskInput.value.trim() === "" || hourInput.value === '' || isNaN(hourInput.value)){
        alert("Please enter valid input");
        return;
    }


//Creating newTask 
let newTask = document.createElement("li");
//getting input values from the user and storing it in newTask 
newTask.innerHTML = `${taskInput.value} -${hourInput.value}hrs`
//appending it in Entry List
entryList.appendChild(newTask);
//setting up new values to empty to get another input 
taskInput.value = ''
hourInput.value = ''
}