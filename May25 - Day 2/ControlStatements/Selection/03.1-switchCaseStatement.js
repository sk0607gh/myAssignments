// May 25 Session - Control Selection - Switch Case Statement

browserName = "Chrome"
console.log("Browser declared globally is...." + browserName);

function getBrowserUsed () {

        switch (browserName) {
            case ("Firefox"):
                console.log("Browser used in the application is...." + browserName);
                break;
                
            case ("Edge"):
                console.log("Browser used in the application is...." + browserName);
                break;

            case ("Safari"):
                console.log("Browser used in the application is...." + browserName);
                break;
            
            case ("Chrome"):
                console.log("Browser used in the application is...." + browserName);
                break;

            default:
                console.log("Browser Version used in not supported....");
                break;
        }
}

getBrowserUsed ();


/* 
NOTE 1: 
When the condition is satisfied it will come out of the Switch Statement and wont check the code that is below it.
NOTE 2: 
In the above code we are just checking the data with the var that we have declared and just printing it.
When thats the case we give it as "switch (browserName)" */
