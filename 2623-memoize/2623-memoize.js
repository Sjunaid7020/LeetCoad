/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  // Create an empty object to store the cache
  const cache = {};

  return function memoizedFn(...args) {
    // Create a unique key for the arguments (considering order for sum function)
    const key = args.map(arg => JSON.stringify(arg)).join('|');

    // Check if the key exists in the cache
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    // If not, call the original function and store the result in the cache
    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */