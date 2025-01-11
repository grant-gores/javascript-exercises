const sumAll = function(num1, num2) {
    let result = 0;
    if(num1 < 0 || typeof(num1) !== "number" || !Number.isInteger(num1)){
        return 'ERROR';
    }
    else if(num2 < 0 || typeof(num2) !== "number" || !Number.isInteger(num1)){
        return 'ERROR';
    }
    else{
        if (num2 > num1){
            for(i = num2; i >=0; i--){
                result += i;
        }
        return result;
        }
        else{
            for(i = num1; i >=num2; i--){
                result += i;
            }
            return result;
        }
    }
};

sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
