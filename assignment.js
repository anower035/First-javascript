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
