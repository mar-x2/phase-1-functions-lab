
function distanceFromHqInBlocks(number){
    if(number < 42){
        return (42 - number);
    }
    return (number - 42);
}

function distanceFromHqInFeet(number){
    return (distanceFromHqInBlocks(number) * 264);

}

function distanceTravelledInFeet(num1, num2){
    if(num1 < num2){
        return ((num2 - num1)*264);
    }
    return ((num1 - num2)*264);

}

function calculatesFarePrice(start, destination){
 const i = distanceTravelledInFeet(start, destination); 
    
    if( i < 400){
    return 0;
    }
    else if(i>2500){
        return "cannot travel that far";
    }
    else if( i > 2000){
       return 25;
   }
    else if( i < 2000){
        return ((i-400) * 0.02);
    } 
   
   

};