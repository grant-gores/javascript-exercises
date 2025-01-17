const palindromes = function (str) {
    let arr = str.split("").filter(char => /[a-zA-Z0-9]/.test(char));
    let forArr = arr.join("").toLowerCase();
    let revArr = arr.slice().reverse().join("").toLowerCase();
    console.log(forArr);
    console.log(revArr);
    if (forArr === revArr){
        return true;
    }
    else{
        return false;
    }
};

// Example usage
console.log(palindromes("racecar, racecar")); // Output: "racecarracecar"

// Do not edit below this line
module.exports = palindromes;
