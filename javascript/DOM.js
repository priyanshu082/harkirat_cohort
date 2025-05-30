// document.getElementById("btn")
// .addEventListener("click",()=>{
//     console.log("button clicked")
// })

//adding closure to that
function addEvent(){
    let counter=0;
    document.getElementById("btn").addEventListener("click",()=>{
        console.log("button clicked ",++counter)
    })
}

function addEvent2(){
    let counter=0;
    document.getElementById("btn2").addEventListener("click",()=>{
        console.log("button 2 clicked ",++counter)
    })
}

addEvent()
addEvent2()

// What Happens Step-by-Step:
//
// 1. Page loads, and the HTML is parsed.
//
// 2. JavaScript runs:
//    - The function addEvent() is called once during page load.
//
// 3. Inside addEvent():
//    - It gets the button element using document.getElementById("btn").
//    - It attaches a click event listener to the button.
//    - A variable 'counter' is created inside addEvent() and is preserved by closure.
//
// 4. Later, when you click the button:
//    - The click event listener (which was added earlier) runs.
//    - The listener has access to 'counter' because of JavaScript closure.
//    - It increments and logs the value of 'counter' each time the button is clicked.




