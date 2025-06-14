const express = require('express')
const app = express() // Whatever Express can do, the app variable can also do.

app.use (function (req, res, next) {
      console.log("Hello in middleware");  // You can add as many middleware as you want.
      next();
});
app.use (function (req, res, next) {
      console.log("Hello in middleware two");
      next();
});
app.get('/', function(req, res) { // make route to write in code is (/).
      res.send ('Hello from world!!')
});

app.get('/profile', function(req, res) { 
      res.send ('Hello from profile!!')
});

app.listen(3000)

//  For example: - https://www.facebook.com/
//               - jatin.com/
//               - twitter.com/
//               - microsoft.com/ 