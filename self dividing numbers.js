var selfDividingNumbers = function(left, right) {
    var arr = [];
    for(var x = left; x <= right; x++){
        if(x % 10 !== 0){
            
            var count = 0;
            var temp = x.toString();
            var length = temp.length;
            
            if(length > 1){
                for(var i = 0; i < length; i++){
                    if(x % temp[i]!= 0){
                        i = length;
                    }
                    else{
                        count++;
                    }
                }
            }
            if(count == length || length == 1){
                arr.push(x);
            }
        }
    }
    return arr;
};