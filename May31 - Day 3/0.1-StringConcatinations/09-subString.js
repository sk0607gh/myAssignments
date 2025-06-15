// May 25 Session - Sub String 

// Example 1
let course1 = "Playwright" ;
let sliceValue1 = course1.substring(1,4) ;    
//                  OR - For both get the same output
//let sliceValue1 = course1.substring(4,1) ;
//let sliceValue1 = course1.substring(5,5) ;
console.log("O/p 1 is... : " + sliceValue1);

// Example 2
let course2 = "Playwright" ;
let sliceValue2 = course2.substring(4) ;
console.log("O/p 2 is... : " + sliceValue2);

// Example 3
let course3 = "Playwright" ;
let sliceValue3 = course3.substring(-3,5) ;
console.log("O/p 2 is... : " + sliceValue3);


/* NOTE:
It wont consider -ve Values , still when we have negative value, it will consider it as ZERO */

