

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    // Do something amazing here
    
    // If your code succeeeds this is called
    //resolve('foo'); // I commented this to show you the error (if you uncomment it, reject will never be called)

    // If you code fails, do this instead
    reject(new Error('fail'));
  }, 300);
});

promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
    },
    function(error) {
    console.log(error);
    // expected output: "Error: fail"
    });

// This gets ran first before the 300ms timer trips
console.log(promise1);
// expected output: [object Promise]

