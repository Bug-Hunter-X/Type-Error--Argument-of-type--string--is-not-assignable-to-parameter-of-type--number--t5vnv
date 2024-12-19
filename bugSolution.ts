function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error("Error: Both arguments must be numbers");
    return 0; // Or throw an error
  }
}

function subtractSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return subtract(a, b);
  } else {
    console.error("Error: Both arguments must be numbers");
    return 0; // Or throw an error
  }
}

const result1 = addSafe(5, 3); // Correct: 8
const result2 = subtractSafe(10, 5); // Correct: 5
const result3 = addSafe(5, "3"); // Safe: Error message and returns 0
const result4 = subtractSafe(10, "5"); // Safe: Error message and returns 0