// May 25 Session - Literal Way of declaring a String

let fName1    = "Sunil";
let userName1 = "Sunil";

/* NOTE
In the above case since we have the same value for both the varibales, when it comes to storing the 
details in the Database it will be stored in the same place. 
Eg in DB100 we have the details saved. */

let fName2    = "Sunil";
let userName2 = "Kumar";

/* 
NOTE:
In the above case since we have the Diff value for both the varibales, when it comes to storing the 
details in the Database it will be stored in the diff place.
Eg  DB100 will have fname & DB101 will have userName..... 
This is what we call it as "String Pool Memory" */
