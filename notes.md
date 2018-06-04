## Notes from Udemy class about Weird Parts of JS



# Concepts: Syntax Parsers, Execution Contexts, Lexical Environments

### Syntax Parsers

Author is talking about the JS interpreter engine inside the browser.  I've heard this
referred to as the Chrome API.  

This "parser" or "interpreter" is what reads the code and starts converting it to 
the actual binary code that the engine executes.  Like a compiler.  But this 
interpreter is what checks the syntax and removes ambiguities by throwing errors
where the syntax rules are not complied with.  If the meaning of the code is 
unclear, the Syntax Parser is what catches it and forces the user to clarify
the intention.


### Execution Context

This is where the currently running function is running from.  If the function
is being called from the top or global context, then in Chrome this is the 
_window_ environment.  It's the global namespace.  If the function is being 
called from inside another function, the execution context is that calling
function's namespace.  BTW, I'm using the word _namespace_.  I don't think 
the author uses the word namespace here.  Not sure why.

The author carefully uses the word _scope_ here.  I think he's just talking about 
_scope_ though.

Each execution context also includes a _Reference to the Outer Environment_.

_Scope_ is where a name is available to your code.

### Lexical Environments

Actually, I think this _is_ scope he's talking about here.  But he doesn't want
to use the word he's trying to define.  So, he's avoiding a word that can be
misunderstood.  He's trying to define the idea or the concept first.  Then I
suspect he'll start calling that idea _scope_.  For now, he's using the word
_Lexical Environments_.

Also, Lexical Environment refers to the physical location of a variable or function
relative to the global environment and to other functions or variables.

```
function a(){
    console.log(myVar);
}
function b(){
    myVar = 2;
    a();
}
var myVar = 1;
b()
```
In this case, the _Lexical Environment_ of a() is the global namespace.  Therefore,
it cannot see the value for myVar declared inside b(), even though it's being 
called from b().  But it _does_ see its _outter_ environment, which in this case is
the Global namespace.

So, _Lexical Environment_ refers to where the function a() is located.  If it were
being called from _within_ b(), then the lexical environment would be b() and the 
console.log within a() would output a value of 2 to the console.


### What's the difference between _Execution Context_ and _Lexical Environment_?

I think _Context_ is just the idea of where the call is coming fromt.  The _Environment_ is 
the where and the what else.  The _Environment_ is going to include a bunch of other
stuff.  

The _lexical environment_ is the current _THIS_ for whatever is currently running.

## Objects and Name Value Pairs

In JS, _Objects_ are name-value pairs.  (duh)  But the _this_ lexical environment
always includes the objects that are already a part of its scope.  For example,
in the global scope, there's already a huge collection of stuff you get for free.

Each scope is basically an object.  Each of these objects contain name-value pairs
of stuff, and there are rules about what can be seen from within each level of 
each object.  And when something is called which is _not_ seen, there are rules
about what the sequences of places to search is.

### Hoisting

This is simply the idea that the names of the variables and functions are initialized
in memory before the values of those variables and functions are stored in those 
locations.  The first thing the syntax parser does is create spaces for variables 
and functions, and then later the values declared for the variables and functions
are stored in those places.  _Undefined_ means that the name of the variable or
function is recognized but empty.  If the name is not recognized, the parser 
throws an error.

You could say _Hoisting_ refers to the _create phase_ of the syntax parser's 
sequence of execution.  It creates a namespace for variables and functions.

But it doesn't look inside functions for more declarations.  It only looks inside
when it's creating namespaces for that function, during the _create phase_ of that
function.

## Single-Threaded and Synchronous Execution

JS is single-threaded.  It has synchronous execution.  But at this point the author
is not talking too much about asynchronous events.  He wants to drive home that
JS is single-threaded and does its work one-job-at-a-time.

## Execution Stack

This is what I've thought of as _The Call Stack_.  I'm pretty sure it's the same
thing.  This is what the Event Loop takes from the _call stack_ and puts into the 
queue?

I'm just going by the YouTube video about how the _Event Loop_ works with the 
task queue and the call stack.

## Scope Chains: Functions, Contexts, and Variable Environments

### Variable Environments

Just refers to where the variable lives and how it relates to other names in
that memory space.

### Scope Chain

Where does the Syntax Parser look if it doesn't find a name in the current
scope?  Where does it go next?  The _Scope Chain_ defines the order of places
the Syntax Parser will look for names in its attempt to resolve this question.

Since each Execution Context also includes a reference to the outter 
environment, the scope chain includes access to names in that outter 
environment.

### ES6 and _let_

Ecmascript 2015 or ES6 introduces block scoping with _let_.  So 
`let myVar = "whatever"` will only be available from within the context
it was declared in.  _Let_ does _not_ behave like var.  

## Singled-Threaded Asnychronous Execution (Callbacks)

### Parts of Browser Environment

* Network handler

* JS Engine (V8)

* Event Queue (task queue)

* HTML Rendering Engine


