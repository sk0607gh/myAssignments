// May 25 Session  - Control Iteration -  FOR EACH Statement 

/* NOTE: In the below we are having some list of Values, 
where we r gng to store list of Values as an array and store it in a Variable */

let automationTools = ["Playwright", "Selenium", "Load Runner"] 
console.log(automationTools.length);

for (let i = 0; i < automationTools.length; i++) {
  
            let automation = automationTools[i] ;
            console.log("Count of details stored in the array..." +automation);


            function(automation) {
                          console.log("This is an example using IIFE Function..."+automation);
            }
        

}