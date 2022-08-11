const buyClay = () => {
    const pottery = {

    }
    return pottery
}
let finishedPottery = buyClay()

const makePottery = (objectMake ) => {
    objectMake.shape = "Bowl"
    return objectMake
}
let objectMake = makePottery(finishedPottery)

const bisqueFire = (objectMake) => {
    objectMake.readyForGlazing = true
    return objectMake
}   
objectMake = bisqueFire(finishedPottery)

const glazePottery = (objectMake) => {
    if (objectMake.readyForGlazing === true){
        objectMake.glazing = "Midnight Blue"
    } else {
       objectMake.glazing = "Make sure you bisque fire the pottery before you glaze it"
    }
    return objectMake
}
objectMake = glazePottery(finishedPottery)

const finalFiring = (objectMake, tempKiln) => {
    if (tempKiln > 1200) {
        objectMake.cracked = true
    } else {objectMake.cracked = false}
    return objectMake
}
// const temp1300 = finalFiring(glazePottery, 1300)
// console.log(temp1300)
// const temp1000 = finalFiring(glazePottery, 1000)
// console.log(temp1000)
objectMake = finalFiring(finishedPottery, 1300)
console.log(finishedPottery)