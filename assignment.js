
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

//PROJECT-5
//AnimalCounter

function animalCalculator(depth){

    var animal = 0 ;
    
        if(depth <= 10){
            animal = depth * 50 ;
        } else if(depth <= 20){
            var firstPart = 10*50 ;
            var remaining = depth - 10 ;
    
            var secondPart = remaining * 100 ;
    
            animal = firstPart + secondPart ;
        }
        else{
            var firstPart = 10 * 50 ;
            var secondPart = 10 * 100 ;
    
            var remaining = depth - 20 ;
    
            var thirdPart = remaining * 300 ;
    
            animal = firstPart + secondPart + thirdPart ;
        }
    
        return animal ;
    
    }
    
    var count = animalCalculator (32) ;
    
    console.log(count) ; 
