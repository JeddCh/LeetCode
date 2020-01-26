var judgeCircle = function(moves) {
    var count = 0;
    for (var x = 0; x < moves.length; x++){
        
        if(moves[x] == "U"){
            count++;
        }else if (moves[x] == "D"){
            count--;
        }
        else if (moves[x]== "L"){
            count+=2;
        }
        else 
            count-=2;
    }
    
    return(count == 0);
        
};