const calculateChange = function(amount) {
    let quarters = Math.floor(amount / 25)
    amount = amount % 25
    
    let dimes = Math.floor(amount / 10)
    amount = amount % 10
    
    let nickles = Math.floor(amount / 5)
    amount = amount % 5
    let pennies = Math.floor(amount / 1)
    return `${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies.`
}

console.log(calculateChange(99))