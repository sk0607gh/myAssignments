// May 25 Session - Hoisting/Scoping

let browserUsed = "Chrome";

function checkBrowserVersion() {
    if (browserUsed === "Chrome") {
            let browserUsed = "Firefox";
            console.log("Browser inside IF-BLOCK is : " +browserUsed);
    }
    else {
        let browserUsed = "EDGE";
        console.log("Browser inside ELSE BLOCK is : " +browserUsed);
    }
    console.log("Browser outside IF-ELSE BLOCK is : " +browserUsed);
}

checkBrowserVersion();
console.log("Browser Outside the Function BLOCK is : " +browserUsed);
