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



// addEvent()
// addEvent2()

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



//garbage collections and removeEventlisteners

function removeEvent(){
    document.getElementById("btn").removeEventListener("click",()=>{
        console.log("button clicked ")
    })
}
//since eventlistners are heavy which can take too much space removing them is a good thing
//but if you remove them before they are called it will throw an error
//so you should remove them after they are called


// Build a live character counter
// When a user types into a textarea, show how many characters are remaining (max 100).
function maxLen(){
    // let counter=100;
    let inputarea=document.getElementById("txtarea")
    let counter=document.getElementById("counter")
    inputarea.addEventListener("input",()=>{
        counter.textContent=100-inputarea.value.length+"characters remaining" 
    })
}
maxLen();




//Create a debounce-enabled search bar
function deBounce(){
    let timer;
    let searchInput=document.getElementById("debounce")
    let searchTxt=document.getElementById("searchtxt")
    searchInput.addEventListener("input",()=>{
        clearTimeout(timer)
        timer=setTimeout(() => {
            console.log("Searching:", searchInput.value);
            searchTxt.textContent = "Searching for: " + searchInput.value;
        }, 500);
    })
}

deBounce()







