//Scoping

var genderGlobal = "Female" ;

var ageGlobal    = 10;
let colourGlobal = "Green";
const expGlobal  = 11


function printGender () {

        var   ageFunction    = 20;
        let   colourFunction = "Brown" ;
        const expFunction    = 22;
        let   countryFunction = "INDIA";
        //let   countryFunction = "AUSTRALIA";

        //if(genderGlobal.startsWith("Female")){
        //          OR
        if(genderGlobal == "Femalee"){
                var ageBlock    = 30 ;
                let colourBlock = "Pink" ;
                const expBlock  = 33;
                console.log("Inside IF-Block Age is   : " +ageBlock);
                console.log("Inside IF-Block Color is : " +colourBlock);
                console.log("Inside IF-Block Exp is   : " +expBlock);
        }
        else{
                var ageBlock = 40 ;
                countryFunction = "SINGAPORE"                                    // Reassigning the LET variable
                console.log("His Favourite colour is : " +colourFunction);
                console.log("His Global Exp is       : " +expGlobal);
                console.log("His Country is          : " +countryFunction);
        }
        
/*     console.log("Outside IF-Block Age is   : " +ageBlock);       // Data Leakage
       console.log("Outside IF-Block Color is : " +colourBlock);
       console.log("Outside IF-Block Exp is   : " +expBlock); */

/*     console.log("Inside Function Age is    : " +ageFunction);      // Works fine
       console.log("Inside Function Colour is : " +colourFunction);   // Works Fine
       console.log("Inside Function Exp is    : " +expFunction);      // Works Fine */
        
}

printGender();
console.log("Global Age is : "+ageGlobal);
console.log("Global Color is : "+colourGlobal);
console.log("Global Exp is " +expGlobal);



       

      


