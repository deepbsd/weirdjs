
let g = G$("John", "Doe", "en");

//console.log(g);
console.log(g.greet().setLang('es').greet(true));
// What happens on a bad language parameter?
console.log("Can we change language to French?  ", g.setLang('fr'));
