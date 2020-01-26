var repeatedNTimes = function(A) {
    
    let dump = [];
    
    for(let i = 0; i < A.length; i++) {
        if(dump.indexOf(A[i]) == -1) {
            dump.push(A[i]);
        } else {
            return A[i];            
        }
    }
};