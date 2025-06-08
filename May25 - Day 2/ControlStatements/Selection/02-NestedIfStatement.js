// May 25 Session -  Control Selection - Nested-IF Statement (when we have more than one if statement then we call that as Nested IF)

browserName = "Chrome"

function getBrowserUsed () {

        if (browserName === "firefox") {
            console.log("Browser used in the application is...." + browserName);
        } 
        else if (browserName === "Edge") {
            console.log("Browser used in the application is...." + browserName);
        }
        else if (browserName === "Chrome") {
            console.log("Browser used in the application is...." + browserName);
        }
        else if (browserName === "Safari") {
            console.log("Browser used in the application is...." + browserName);
        }
        else {
               console.log("Browser Version used in not supported....");
        }
}

getBrowserUsed();


/* Note

If we have 10 if statement , until the condition satifies it checks all the IF statements, 
and once the condition is satified it comes out of the IF-Else */