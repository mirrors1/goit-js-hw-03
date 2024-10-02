`use strict`
function makeArray(firstArray, secondArray, maxLength) {
    const array = [];
    let indexArray = 0;    
    for (const element of firstArray) {            
        if (indexArray++ < maxLength) {
            array.push(element);
        } else {
            return array;
        }
    }   
    for (const element of secondArray) {
        if (indexArray++ < maxLength) {
            array.push(element);
        } else {
            return array;
        }
    }    
    return array;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []