const accountId = 144533
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengalure"

/*
Note:- Prefer not to use var
beacuse of issue in block scope and functional scope
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
