//  Q no 31

let users : string [] = ["Safadr","Almas","Zafar"];
if(users.length > 0){
    console.log("List of users:");

for ( let user of users){
    console.log(user);
}

users = [];
}
else {
    console.log("we need to find some users !");
}

// Q no 32
let currentUsers : string[] = ["user1","user2","Raheel","Zafar","Almas"];
let newUsers : string[] = ["Zafar","Almas","user3","Jawwad","user4"];

for (let newUser of newUsers) {
   let usernameExists = currentUsers.some(user => user.toLowerCase() === newUser.toLowerCase());
    if (usernameExists){
        console.log(`the username ${newUser} is not available please enter a new username`)
    }
    else{
        console.log(`the username ${newUser} is available`);
    }
}    

//  Q no 33
let numbers : number[] = [1,2,3,4,5,6,7,8,9,];
for (let number of numbers){
    if(number === 1){
      console.log(`${number}st`);
    }
    else if (number === 2){
        console.log(`${number}nd`);
    }
    else if (number === 3){
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
