# Unexpected Type Coercion in TypeScript Leading to Runtime Errors

This example demonstrates a common issue in TypeScript where type coercion can lead to unexpected runtime errors that are not caught during compilation.  The `add` function is designed to work with numbers, but due to TypeScript's type coercion, it compiles without error even when given a string.  This results in a runtime error. The solution shows how to utilize type guards to prevent this behavior.

## How to Reproduce
1. Clone this repo.
2. Compile and run the code using a TypeScript compiler.
3. Observe the runtime error caused by passing a string to the `add` function.

## Solution
The solution provided utilizes a type guard to prevent the unintended type coercion, catching the invalid input before the addition occurs, providing a more robust solution.