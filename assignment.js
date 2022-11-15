
//PROJECT-1
// FeetToMile --- Which converts the value given in feet into mile! //

function feetToMile(feet){

    const mile = feet/5280 ;

    return mile ;

}

var result = feetToMile (20000) ;

console.log("Answer is Mile : " + result.toFixed(2)) ;



//PROJECT-2
/**
 * Wood Calculator which tell you how much cubic feet of wood will be require for making things!
 *  to make 1 chair needs 1 cubic feet wood
 *  to make 1 table needs 3 cubic feet wood
 *  to make 1 Bed needs 5 cubic feet wood
 */

function woodCalculator(chair, table , bed ){
    var chair = chair * 1 ;
    var table = table * 3 ;
    var bed = bed * 5 ;

    var total = chair + table + bed ;

    return total ;
}

var result = woodCalculator(12 , 12 , 12) ;

console.log("Cubic Feet Of Wood Will Require : " + result ) ;


//PROJECT-3
/**
 * Brick CalCulator Which will tell you how much brick require to make building per feet..
 * 1-10 floor- 15 feet , 11-20 floor- 12 feet , 20+ floor- 10feet
 * for 1 feet Bricks required 1000 pieces
 */


function brickCalculator(floorNumber) {
    var perFloor = floorNumber * 1000 ;
    let totalBrick ;

    if (floorNumber > 0 && floorNumber <= 10) {
        totalBrick = perFloor * 15;
    }

    else if (floorNumber > 10 && floorNumber <= 20) {
        totalBrick = (perFloor * 12) + 30000 ;
    }

    else if (floorNumber > 20 ) {
        totalBrick = (perFloor * 10) + 70000 ;
    }

    else {
        console.log('Enter a Valid Number') ;
    }

    return totalBrick ;

}

var result = brickCalculator(100) ;
console.log("total Brick Will Require : " + result) ;


//PROJECT-4 
// TinyFriend 

function TinyFriend(friend) {

    var shortestName = friend[0] ;

    for(var i= 0 ; i < friend.length ; i++){

        if (shortestName.length > friend[i].length){
            shortestName = friend[i] ;

        }
    }

    return shortestName
}

var result = TinyFriend(["tohura","Arpitaaa","Mubba","Samin Bhai","Ashik","Mim"]) ;

console.log("Shortest Name Is : " + result) ;