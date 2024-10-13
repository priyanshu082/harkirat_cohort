const fs = require("fs");

// SetTimeout Example
const onDone = () => {
    console.log("setTimeout executed after 1 second");
};
setTimeout(onDone, 1000);
console.log("This message is logged before setTimeout is executed");

// Reading the file asynchronously (example of async OS work)
fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("Data read from file:");
    console.log(data);
});

// Function to read and write with callback
const readAndWrite = (cb) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        data = data + "\nCopyRight 2024";

        // Write data back to file
        fs.writeFile("a.txt", data, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return;
            }
            cb();  // Call the callback function after writing is done
        });
    });
};

readAndWrite(() => {
    console.log("CopyRight has been added to the file");
});
