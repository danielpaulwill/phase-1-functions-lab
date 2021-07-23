const HQ = 42

function distanceFromHqInBlocks(destinationBlock) {
    if (destinationBlock >= HQ){
        return parseInt(destinationBlock - HQ);
    }
    else return parseInt(HQ - destinationBlock);
}

function distanceFromHqInFeet(destinationBlock) {
    let result = distanceFromHqInBlocks(destinationBlock);
    return result * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    if (startBlock <= endBlock) {
        return parseInt(endBlock - startBlock) * 264;
    }
    else return parseInt(startBlock - endBlock) * 264;
}

function calculatesFarePrice(start, destination) {
    let result = distanceTravelledInFeet(start, destination);
    if (result <= 400)
        return 0;
    else if (result > 2500)
        return "cannot travel that far"
    else if (result > 2000)
        return 25;
    else (result > 400)
        return (result - 400) * .02;
    
    

}




console.log(calculatesFarePrice(34, 32));