# Express.js Route with Inadequate Error Handling

This repository demonstrates a common error in Express.js route handlers: insufficient error handling.  The provided code attempts to retrieve a user based on a provided ID. However, it fails to gracefully handle cases where the ID is invalid or not found.

## Bug

The primary issue lies in the absence of error handling around the `parseInt` function and the lack of specific error messages.  If the `userId` parameter is not a valid integer, `parseInt` will return `NaN`, leading to a potential crash or unexpected results.

## Solution

The solution improves error handling by:

1. Checking if `parseInt` results in a valid number.
2. Providing more informative error messages.
3. Using appropriate HTTP status codes to signal errors more accurately.

## How to Run

1. Clone the repository.
2. Run `npm install` to install dependencies (assuming the user object is defined).
3. Run `node bug.js` to see the buggy behavior, and `node bugSolution.js` to see the improved version.
