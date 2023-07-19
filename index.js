// OBJECTIVE 1
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


let count = 0
// here A.document.getElementById("count-el").innerText = count and B.countEl.innerText = count" works the same. 
// A contains the whole argument, i.e in object.method(argument) format whereas in B, it is variable.method(argument)
let countEl = document.getElementById("count-el")
function increment (){
    count += 1
    countEl.textContent = count
}

//OBJECTIVE 2 
// 1. Create a function, save(), which logs out the count when it's called
function save(){
    countEl.innerText = "Last saved " + count

    //  OBJECTIVE  3
    // 1. Grab the save-el paragrah and store it in a variable called saveEl
    let saveEl = document.getElementById("save-el")
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - " 
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    saveEl.textContent += countStr
    
    // to refresh the count
    countEl.textContent = 0;
    count = 0;

}
