function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Correct
console.log(result); // 8

result = subtract(10, 5); // Correct
console.log(result); // 5

result = add(5, "3"); // Type Error, but can compile
console.log(result); // Type Error at runtime