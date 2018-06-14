var a, b = '2', c = 3;


// This will coerce b to number 2
a = Number(b) + c;    // 5

// This will make 'a' be a string '23'
//a = b + c;     // 23

// There is a bias toward strings.
// If one value is a string, JS will 
// coerce the second value to be a string.
console.log('Value: ',a);


// This can all be confusing when there's 
// a lot of code between, say, line 2 and line 15
