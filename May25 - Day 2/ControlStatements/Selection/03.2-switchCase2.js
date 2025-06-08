// May 25 Session - Control Selection - Switch Case Statement

let rank = 10;

function rating(rank){

let grade;

        switch (true) {

                case (rank == 10):
                    console.log("Case 1: Rank is...." +rank);
                    break; 
                
                case (rank > 5 && rank == 10):
                    console.log("Case 2: Rank is ...." +rank);
                    break;   
                
                case (rank > 20 || rank == 10):
                    grade = "J";
                    console.log("Case 3: Rank is ...." +rank + "  & Grade is..." +grade);
                    break; 

                default:
                    console.log("Default: No Rank....");
                    break;   
        }
}

rating(rank);


/* NOTE: In the above code we check the condition like IF statement and then we print our output,
when thats the case we have to give it as  "switch (true)" */