function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

isNumber: (arg: any) : arg is number => {
    return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
    if(isNumber(a) && isNumber(b)){
        return add(a,b);
    }
    else{
        throw new Error("Invalid input: Both parameters must be numbers.");
    }
}

let result = add(5, 3); // Correct
console.log(result); // 8

result = subtract(10, 5); // Correct
console.log(result); // 5

try {
  result = addSafe(5, "3"); //Throws error
  console.log(result);
} catch (error) {
  console.error(error.message); // Catches the error
}

result = addSafe(5,3); // Correct
console.log(result); // 8