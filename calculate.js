const readline = require('readline');  
const rl = readline.createInterface({     //to obtain the input and output of users
    input: process.stdin,  
    output: process.stdout  
});  
  
let unit1, unit2, unit3, unit4;  
let userResponse;  
let totalscore, averscore;  
let name;  
  
// Function to ask for user input  
function askQuestion(question, callback) {  
    rl.question(question, (answer) => {  
        callback(answer);  
    });  
}  
  
// Function to calculate the score  
function calscore() {  
    if (userResponse) {  
        askQuestion("Please enter your name:", (answer) => {  
            name = answer;  
            askQuestion("Please enter a value for unit1:", (answer) => {  
                unit1 = parseInt(answer, 10); // Assuming the input is a number  
                askQuestion("Please enter a value for unit2:", (answer) => {  
                    unit2 = parseInt(answer, 10);  
                    askQuestion("Please enter a value for unit3:", (answer) => {  
                        unit3 = parseInt(answer, 10);  
                        askQuestion("Please enter a value for unit4:", (answer) => {  
                            unit4 = parseInt(answer, 10);  
                            totalscore = unit1 + unit2 + unit3 + unit4;  
                            averscore = totalscore / 4;  
                            console.log(`Thank you for using the programme, ${name}! Total Score: ${totalscore}, Average Score: ${averscore}`);  
                            rl.close(); // Close the readline interface once done  
                        });  
                    });  
                });  
            });  
        });  
    } else {  
        console.log('All right');  
        rl.close(); // Close the readline interface  
    }  
}  
  
// Ask the user if they need help  
askQuestion("Need any help? (yes/no)", (answer) => {  
    userResponse = answer.toLowerCase() === 'yes';  
    calscore(); // Call the function based on the user's response  
});


//Time 223190626