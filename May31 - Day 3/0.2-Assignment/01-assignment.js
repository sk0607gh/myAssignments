// In the Terminal ,  print it in a reverse order

let index;

function reverseString () {

        let testData = "check"
        let chars = testData.split("");
        console.log("O/p 1 is ...: " +chars);

        let reversed = " ";

        //console.log("O/p 2 is ...: " +reverseString.length-1);

        for(index = chars.length-1 ; index >= 0 ;  index--) {
            console.log("O/p 2 is ...: " +index);
            console.log("O/p 3 is ...: " +reversed+chars[index]);
            //console.log(reverseString.length-1);
            reversed = reversed+chars[index];
        }
     
        return reversed;
}


console.log(reverseString());



/* 
Assignment : Print the details in the REVERSE Order
Eg
    let course1 = "Playwright" ;
    o/p : thgirwyalp */