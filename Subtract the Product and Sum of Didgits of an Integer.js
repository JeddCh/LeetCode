var subtractProductAndSum = function(n) {
    var products = 1;
    var sum = 0;
    var total = 0;
    
    while (n>0){
        products *= n%10;
        sum += n%10;
        total = products - sum;  
        n = (n - n%10)/10;
        
    }
    
    return total;
};