# Type Error in TypeScript Function Arguments

This repository demonstrates a common TypeScript error: passing a string argument to a function that expects a number.  The code includes functions `add` and `subtract` that correctly operate on numbers. However, attempting to use these functions with string arguments will result in a type error.  The solution demonstrates type guarding techniques to prevent this error.

## How to Reproduce

1. Clone this repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. You will see the compiler error related to type mismatches in `bug.ts`
4. Review the solution in `bugSolution.ts` demonstrating how type guarding helps handle this correctly.