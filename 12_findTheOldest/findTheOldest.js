const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear(); // Get current year

    return people
        .map(person => ({
            ...person,
            age: (person.yearOfDeath || currentYear) - person.yearOfBirth
        }))
        .sort((a, b) => b.age - a.age)[0]; // Sort descending & return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
