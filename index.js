const data = require('./data')
let totalUser = data.length;
let underAgeUsers  =0;
let eligibleUsers = 0;

data.forEach((user)=>{
    if(user.age>18) eligibleUsers += 1
    else underAgeUsers +=1
})

console.log({
    Total_Users:totalUser,
    Eligible_Users:eligibleUsers,
    Under_Age_Users:underAgeUsers
})