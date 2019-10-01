const Express = require('express')
const Logger = require('morgan');

// 👇 creating an instance of a express web app server
const App = Express();
// 👇 config Express to use the 'ejs' templating language to RENDER OUR VIEWs
// For this to work you must have the EJS package INSTALLED
App.set('view engine', 'ejs');
App.use(Logger('dev'));



// MIDDLEWARE functions are called in order of appearance in the code
// App.use((request, response, next) => {
//   const {method, path} = request;

//   const message = `METHOD ==> ${method} /// PATH ==> '${path}' /// at DATE ==> ${new Date()}`
//   console.log(message);
//   // NEXT is a function given to MIDDLEWARE callbacks as an argument
//   // it is ALWAYS the third argument when called. Express will move onto the NEXT middleware line
//   next();
// })

// -----------
// NOTE ABOUT ROUTES
// -----------
// URL(Uniform Resource Locator)
// URL http://127.0.0.1:4545/hello_world
//     scheme | host   |port| path
/**
 * "Scheme" identifies the protocol being used
 * to communicate. Could be HTTP, HTTPS,SSH, FTP,TCP,WS etc
 * The "HOST" identifies the domain or IP that is hosting the server
 * The "PORT" specifies the port that is being used  by the web app on server
 * The 'Path' identifies the location of a resource on the server.
 * 
 * The following method creates a "route"
 * the name od the method (i.e.'get' ) corresponds to an HTTP VERB (get,post, delete, patch, put, etc)
 * The first argument to the method is the 'path' of a URL
 * The second argument is a callback that is triggered when a client makes
 * a request tothat route
 * using the correct/matching HTTP VERB
 * So in this case, when a client makes a GET request to '/hello_world'
 * the Callback will execute
 */

App.get('/hello_world', (request, response) => {
  response.send("Hello, World! AGAIN!");
});

App.get('/', (request, response) => {
  // response will render template (a file from /views)
  // Specify the file by its path skipping '/views' and disregarding the extension .ejs
  response.render('index');
})
App.get('/contact_us', (request, response) => {
  response.render('contactUs');
})

App.get('/thank_you', (request, response) => {
  const params = request.query;
  // console.log('params', params);
  // The object properties of params are named based on the 'NAME' attributes for the inputs of the form.
  // aka ==> fullName && favouriteColor && favouriteDay && message
  const fullName = params.fullName;
  const favouriteColor = params.favouriteColor;
  const favouriteDay = params.favouriteDay;
  const message = params.message;
  response.render('thankYou', {
    fullName,
    favouriteDay,
    favouriteColor,
    message,
  });
})

const PORT=4545;
const ADDRESS='127.0.0.1';
App.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening on port http://${ADDRESS}:${PORT}`);
})



// to start server run NPM RUN START