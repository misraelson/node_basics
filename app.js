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

const PORT=4545;
const ADDRESS='127.0.0.1';
App.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening on port http://${ADDRESS}:${PORT}`);
})