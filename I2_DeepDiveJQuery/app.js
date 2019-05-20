var q = $("ul.people li");
console.log(q);

///////////////////////////////////////////////////////////////////
// These are some more built-in functions to jQuery's prototype or
// $.fn
///////////////////////////////////////////////////////////////////
console.log($.isArray(q));
let s = $.expando;
console.log(s);
let r = {};
let t = $.isEmptyObject(q);
let u = $.isEmptyObject(r);
console.log("Empty Ojbects?  t: ",t," u: ",u);
let myArr = [r, t, u];
console.log("is 'r' inside an array of myArr? ", $.inArray(r, myArr));
// What are the parents of the people list?
console.log("Parents of the people list: ",q.parents());
