export function getPositionY(positionBiggerScreen, positionLowerScreen){
    let finalPosition = 0;
    if (screen.width >= 1200){
        finalPosition = positionBiggerScreen
    } else {
        finalPosition = positionLowerScreen
    }
    
    return finalPosition
}