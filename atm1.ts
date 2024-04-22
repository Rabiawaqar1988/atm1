#!/usr/bin/env node

import inquirer from "inquirer";
interface answerType {
  userid: string;
  userpin: number;
  name: string;
  accountType: string;
  transactionType: string;
  amount: number;
}

let myBalance = 80000; //Dollar

console.log(myBalance);
const mypin: number = 1414;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === mypin) {
  console.log("correct pin code!!!");

  let actionAns = await inquirer.prompt([
    {
      name: "action",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fastcash"],
    },
  ]);
  console.log(actionAns);

  if (actionAns.action === "withdraw"){

   let transaction = await inquirer.prompt(
    [
        {
    name: "transactionType",
    message: "enter your amount",
    type: "number"
   }]);
   if(transaction.transactionType <= myBalance) {
    myBalance -= transaction.transactionType
    console.log("Remaining Balance is : " + myBalance) 
  }else if (transaction.transactionType > myBalance) {
   console.log("INSUFFICIENT BALANCE")
  }else{
         console.log("Enter Valid Amount") 
  } 
  
}

else if (actionAns.action === "fastcash"){
    let fastcash = await inquirer.prompt([
        {
            name: "fastcash",
            message: "please select amount",
            type: "list",
            choices: [1000,5000,10000,15000,20000,25000]
        }
    ]
    );
    if (fastcash.fastcash === 1000 ) {
        console.log("Your remaining balance is : " + (myBalance -= 1000)) 
    }else if (fastcash.fastcash === 5000 ) {
        console.log("Your remaining balance is : " + (myBalance -= 5000)) 
    }else if (fastcash.fastcash === 10000 ) {
            console.log("Your remaining balance is : " + (myBalance -= 10000)) 
        }else if (fastcash.fastcash === 15000 ) {
            console.log("Your remaining balance is : " + (myBalance -= 15000)) 
        }else if (fastcash.fastcash === 20000 ) {
            console.log("Your remaining balance is : " + (myBalance -= 20000))
        }else if (fastcash.fastcash === 25000 ) {
                console.log("Your remaining balance is : " + (myBalance -= 25000))
            
            }

}
else if (actionAns.action === "check balance"){
    console.log("your balance is: " +myBalance )
}
}
else {
    console.log("invalid Pin")
}
