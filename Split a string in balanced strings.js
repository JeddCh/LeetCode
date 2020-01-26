var balancedStringSplit = function(s) {
    var left = 0;
    var right = 0;
    var count = 0;
    
    for(var i = 0; i < s.length; i++){
        
        if(s[i] == 'R'){
            right++
        }
        else {
            left++;
        }
        
        if(left == right){
            left = 0;
            right = 0;
            count++;
        }
        
    }
    
    return count;
};