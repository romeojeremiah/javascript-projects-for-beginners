const feetToCent = (feet, inch) => {
    if (feet < 0){
        console.log('Please enter a feet value greater than 0!')
        return
    }
    if (inch < 0 || inch > 12){
        console.log('Please enter an inches value between 0 and 12!')
        return
    }

    const feetToInch = feet * 12
    const totalInch = feetToInch + inch
    const centimeters = (totalInch * 2.54).toFixed(2)
    let isPlural = 'es'

    if (inch === 1){
        isPlural = ''
    }

    return `${feet} feet and ${inch} inch${isPlural} is equal to ${centimeters} centimeters`
}

const centimeters = feetToCent(5, 13)

if (centimeters === undefined){
    console.log('There was an error! Try again!')
} else {
console.log(centimeters)
}