const Express = require('express')
// 👇 creating an instance of a express web app server
const App = Express();

App.use((request, response, next) => {
  // MIDDLEWARE functions are called in order of appearance in the code
  const {method, path} = request;

  const message = `METHOD ==> ${method} /// PATH ==> '${path}' /// at DATE ==> ${new Date()}`
  console.log(message);
  // NEXT is a function given to MIDDLEWARE callbacks as an argument
  // it is ALWAYS the third argument when called. Express will move onto the NEXT middleware line
  next();
})

App.get('/', (request, response) => {
  response.send("Hello, World! AGAIN!");
})

const PORT=4545;
const ADDRESS='127.0.0.1';
App.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening on port http://${ADDRESS}:${PORT}`);
})