/*
    Event Propagation in JavaScript (Highlish Explanation)

    - When you click on an element inside another element (like a button inside a div), JavaScript events can "travel" through the DOM in two main phases:
        1. Capturing Phase (Trickling Down): The event starts from the top (window/document) and goes down to the target element.
        2. Bubbling Phase (Bubbling Up): After reaching the target, the event bubbles up from the target element back to the top.

    - By default, most event listeners in JavaScript listen during the bubbling phase.

    - Example:
        <div id="outer">
            <button id="inner">Click Me</button>
        </div>

        document.getElementById('outer').addEventListener('click', function() {
            console.log('Outer Div Clicked');
        });

        document.getElementById('inner').addEventListener('click', function() {
            console.log('Button Clicked');
        });

        // If you click the button:
        // Output:
        // Button Clicked
        // Outer Div Clicked

    - You can control event propagation using:
        - event.stopPropagation(): Stops the event from bubbling up further.
        - event.stopImmediatePropagation(): Stops other listeners of the same event on the same element.
        - event.preventDefault(): Stops the default browser action (like following a link).

    // To listen during the capturing phase, pass 'true' as the third argument:
    // Example: Both capturing and bubbling phase listeners on the same elements

    <div id="outer">
        <button id="inner">Click Me</button>
    </div>

    // JavaScript:
    const outer = document.getElementById('outer');
    const inner = document.getElementById('inner');

    // Capturing phase listener (runs when event is going down)
    outer.addEventListener('click', function() {
        console.log('Outer Div Capturing');
    }, true); // true = capturing phase

    // Bubbling phase listener (runs when event is coming up)
    outer.addEventListener('click', function() {
        console.log('Outer Div Bubbling');
    }); // default is false = bubbling phase

    inner.addEventListener('click', function(e) {
        console.log('Button Clicked');
    });

    // If you click the button, output will be:
    // Outer Div Capturing   <-- going down (capturing)
    // Button Clicked        <-- at the target
    // Outer Div Bubbling    <-- coming up (bubbling)

    // --- Demonstrating stopPropagation, stopImmediatePropagation, and preventDefault ---

    // stopPropagation: Stops the event from bubbling/capturing further
    inner.addEventListener('click', function(e) {
        console.log('Button Clicked - stopPropagation');
        e.stopPropagation();
    });

    // stopImmediatePropagation: Stops other listeners of the same event on the same element
    inner.addEventListener('click', function(e) {
        console.log('Button Clicked - stopImmediatePropagation');
        e.stopImmediatePropagation();
    });

    // preventDefault: Prevents default browser action (e.g., following a link)
    inner.addEventListener('click', function(e) {
        console.log('Button Clicked - preventDefault');
        e.preventDefault();
    });

    // Try clicking the button and see which logs appear and which default actions are prevented.

    - In summary:
        - Events go down (capturing), then up (bubbling).
        - You can handle events at any phase.
        - Use stopPropagation to control how far the event travels.
*/
