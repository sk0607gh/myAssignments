// May 25 Session - Hoisting/Scoping

//Example 1 - Using VAR  

/* console.log(x);
var x=10;            // O/P : Undefined */

//Example 2 

/* var y;
console.log(y);
y=20;               // O/P : Undefined  */

// ************************************ LET *************************************
// Example 3 - Using LET

/* console.log(a);
let a=30;           // O/P : Throws an Error Message  */


//Example 4 -  Using LET
/* let aa;          // in Temporal Dead Zone
console.log(aa); // We get an Error message
aa=40; */


// Example 5 - Using CONST
/* console.log(b);
const b=50;    */        // O/P : Throws an Error Message  

// Example 6 - Using CONST
/* const bb             // in Temporal Dead Zone
console.log(bb);     // O/P : Throws an Error Message
bb=50;   */           


/* NOTES
VAR :  
In the case of VAR this was developed in the Initial Phase of JS , 
hence when a scenario like this happens we get the Output as "Undefined" 

LET & CONST : 
In the later stage the above VAR issue was fixed and when the Data Type : LET & CONST is used in a similar scenario, 
it enters into the "Temporal Dead ZONE" and as a result we get an Error Message.      

*/