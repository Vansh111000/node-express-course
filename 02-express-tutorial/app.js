const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");


//static assets. we will get a form data by using express.static method
app.use(express.static("./methods-public"));

//parse from data. we will get user  input data by using express.urlencoded method also both are middleware.
//also in other words this middleware convertes the data (content-type to : application/x-www-form-urlencoded) so now we can access the data by using req.body

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// app.get() is removed or you can add a valid route and callback function

app.use('/login',auth);

app.use('/api/people',people);
app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
