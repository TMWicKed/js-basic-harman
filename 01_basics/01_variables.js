const accountId = 14453
let accountEmail = "harman@google.com"
var accountPassword = "12345"
accountCity = "Agra"

// accountId = 5 not allowed to change value in a contant
accountEmail = "harman26@google.com"
accountPassword = "123456"
accountCity = "agra" /*should not use this but it can be used */
let accountState

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

