var sortArrayByParity = function(A) {
    
    for (var x = 0, i = 0; x < A.length; x++){
        //checks to see if number is even
        if(A[x]%2 == 0){
            var temp = A[i];
            //set value at i to be the even number at x and then add 1 to i
            A[i++] = A[x];
            //set the new x value to the temp value
            A[x] = temp;
        }
    }
    return A;
};