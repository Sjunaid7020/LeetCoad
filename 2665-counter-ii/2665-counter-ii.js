/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    var count = init;
    
   function increment(){
       return ++count;
   }
    
    function reset() {
        count = init;
        return count;
    }
    
    function decrement() {
        return --count;
    }
    
    
    
    return {
        increment: increment,
        reset: reset,
        decrement: decrement
    }
    
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */