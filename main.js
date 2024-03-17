//  Q no 31
var users = ["Safadr", "Almas", "Zafar"];
if (users.length > 0) {
    console.log("List of users:");
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
    users = [];
}
else {
    console.log("we need to find some users !");
}
// Q no 32
var currentUsers = ["user1", "user2", "Raheel", "Zafar", "Almas"];
var newUsers = ["Zafar", "Almas", "user3", "Jawwad", "user4"];
var _loop_1 = function (newUser) {
    var usernameExists = currentUsers.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); });
    if (usernameExists) {
        console.log("the username ".concat(newUser, " is not available please enter a new username"));
    }
    else {
        console.log("the username ".concat(newUser, " is available"));
    }
};
for (var _a = 0, newUsers_1 = newUsers; _a < newUsers_1.length; _a++) {
    var newUser = newUsers_1[_a];
    _loop_1(newUser);
}
//  Q no 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
