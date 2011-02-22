/*
 * Add new routes to the router
 * 
 * Route paths can be either strings or regular expressions. 
 * There is a slight performance hit when utilizing regular expressions 
 * due to the overhead have to compile and test the expressions. 
 * Routes can be associated with a static resource (e.g. somepage.html), 
 * or a function call defined in another module.  
 */ 
 
var Router = require('./router').Router; 
var TestModule = require('../modules/testModule').TestModule; 

var r = new Router();

/*
 * Define routes here!
 */
r.add('/', 'index.html'); 
r.add('/foo', TestModule.foo); 
r.add('/fooBar', TestModule.fooBar);
r.add(/^\/\d{3}$/, 'about.html'); 
r.add(/^\/home$/, 'about.html'); 


exports.router = r;