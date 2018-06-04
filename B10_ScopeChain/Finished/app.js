function a() {
    
    //var someVar = "whatever";
    //var myVar = 3;
    
    function b() {
        console.log("function b() ",myVar);

        function c() {
            // yourVar is 2 levels up.  
            // But the scope chain keeps looking.
            console.log("function c() ",yourVar);

            function d() {
                console.log("function d()", someVar);
            }

            d();
        }

        c();
    }
    
	b();
}

var someVar = 10;
var yourVar = 5;
var myVar = 1;
a();
