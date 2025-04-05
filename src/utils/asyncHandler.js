/**
 * This function takes a function `fn` as an argument and returns a new function
 * that wraps the original function. The new function takes three arguments: `req`, `res`, and `next`.
 * It calls the original function with the three arguments and catches any errors that may be thrown.
 * If an error is thrown, it calls the `next` function with the error as an argument.
 * If no error is thrown, it simply returns the result of the original function.
 * This is a common pattern in Express.js for handling asynchronous code.
 */
export const asyncHandler = (fn) => (req, res, next) => {
    // Call the original function with the three arguments
    // and catch any errors that may be thrown.
    Promise.resolve(fn(req, res, next)).catch(next);
};

