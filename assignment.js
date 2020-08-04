function feettoMile(feet){
    var Mile= feet*0.000189394;
    return Mile;
}



function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount   =  bed  * 5;

    var totalWood= chairCount+tableCount+bedCount;
    return totalWood;
}



function tinyFriend(friends){
    var shorttestFriend=friends[0];
    for(i=0; i < friends.length; i++){
        var element=friends[i];
        if(element.length<shorttestFriend.length){
            shorttestFriend=element;
        }
    }
    return shorttestFriend;
}


function brickCalculator(floorNum){
    var brickNum=0;
    if(floorNum<=10){
        var height=floorNum*15;
        brickNum=height*1000;
    }
    else if(floorNum<=20){
        var height10=150;
        var remainFloor=floorNum-10;
        var height20=remainFloor*12;
        var totalHeight=height10+height20;
        brickNum=totalHeight*1000;
    }
    else{
        var height10=150;
        var height20=120;
        var remainFloor=floorNum-20;
        var height30=remainFloor*10;
        var totalHeight=height10+height20+height30;
        brickNum=totalHeight*1000;
    }
    return brickNum;
}
var total=brickCalculator(23);
console.log(total);
