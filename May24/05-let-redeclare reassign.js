// LET will not allow the user to RE-DECLARE (NO)
// LET will allow the User to RE_ASSIGN      (YES)

//RE-DECLARE  ( Below will throw an Error )
/* let fName = "Sunil";
let fName =  "SK";
console.log("FNAME is : " +fName); */

//RE-ASSIGN ( Eg: 1 - Below will work fine)
let userName = "Sunil";
userName     =  "SK";
console.log("User NAME  is : " +userName);

//RE-ASSIGN ( Eg: 2 - Below will work fine)
let salUpdated =  1000;
salUpdated     =  6000;
console.log("Updated Salary is : " +salUpdated);
/* Note: In the above example when your sal gets credited it needs to be updated to the same variable declared initially. 
Initially ur bank balance is 1000, when the sal gets credited , sal gets updated as 6000.
For this kind of a scneario we can make use of the LET command. */


