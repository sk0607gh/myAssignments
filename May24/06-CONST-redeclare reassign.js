// CONST will not allow the user to RE-DECLARE (NO)
// CONST will not allow the user to RE-ASSIGN  (NO)

//RE-Declaration ( Below will throw an Error )
/* const bankAccountNo1 = 12345;
const bankAccountNo1 = 54321;
console.log("Bank Account No is : " +bankAccountNo1); */

//RE-ASSIGN ( Below will throw an Error )
const bankAccountNo2 = 12345;
bankAccountNo2       = 54321;
console.log("Bank Account No is : " +bankAccountNo2);
/* NOTE: When ever there is a scenario where the details is not getting ChannelMergerNode, for those type of scenarios we can make
use of CONST. In the above example our Bank Account number is not going to change once created. 
Therefore we give the Data Type as CONST */
