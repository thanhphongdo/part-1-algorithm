function printFizzBuzz(n, fizz = 3, buzz = 5) {
    if (fizz <= 0 || buzz <= 0) {
        console.log("fizz and buzz must be positive integers");
        return;
    }
    for (let i = 1; i <= n; i++) {
        if (i % (fizz * buzz) === 0) {
            console.log("FizzBuzz");
        } else if (i % fizz === 0) {
            console.log("Fizz");
        } else if (i % buzz === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage:
printFizzBuzz(16);

// Example with custom fizz and buzz values:
// printFizzBuzz(50, 3, 8);
