(function(global, $) {
    
    // 'new' an object
    let Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }

    // original code used 'var' and I changed this to 'let'
    
    // these variables are hidden within the scope of the IIFE and not 
    // directly accessible
    let supportedLangs = ['en', 'es'];
    
    // informal greetings
    let greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // formal greetins
    let formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // if we want log messages...
    let logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    // methods put into prototype to save memory space
    Greetr.prototype = {
        
        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },
        
        // supportedLangs is only accessible from within this closure.
        // only 'en' and 'es' are supported at this time.
        validate: function() {
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        // retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        // chainable methods return their own containing object
        greet: function(formal) {
            let msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            } else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        log: function() {
            // do the log
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }

            // make 'chainable'                
            return this;
        },
                            
        setLang: function(lang) {
            // make sure the language is a valid choice
            this.validate();
            // set the language
            this.language = lang;
            
            // make 'chainable'
            return this;
        },

        HTMLGreeting: function(selector, formal){

            // ensure we have jQuery object
            if (!$){
                throw 'jQuery not loaded';
            }

            // ensure we have passed a selector
            if (!selector){
                throw 'missing jQuery selector';
            }

            let msg; 

            // figure out the message to return
            if (formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            // use jQuery selector to return the message element
            $(selector).html(msg);

            // make chainable
            return this;
        }
        
    };
    
    // Here's the actual object that gets created and returned here...
    // We can 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {
        
        let self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;
    
    // attach our Greetr to the global object, provide easier shortcut '$G'
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));
