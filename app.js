new Set([1, 1, 2, 2, 3, 4]);
// {1, 2, 3, 4}


[...new Set("referee")].join("");
// ref


let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// {Array(3) => true, Array(3) => false]}


// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

const hasDuplicate = (array) => new Set(array).size !== array.length;


// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }

function vowelCount(str) {
    const map = new Map();
    const vowels = 'aeiou';
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            let count = map.get(char) || 0;
            map.set(char, count + 1);
        }
    }
    return map;
}