var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models");
require('dotenv').config();

var PORT = process.env.PORT;
// Initialize Express
var app = express();
// morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGO_URI;
try {
  mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
   });
} catch (error) {
console.log("error: " + error)
}



app.get("/postCreate", function(req, res) {
    const ricardoTest = {
            author: "Ricardo",
            description: "description",
            content: "photo url",
            created: new Date(),
            comments: "comments",
            group: "toys",
          }
    db.Posts.create(ricardoTest)
      .then(function(ricardoTest) {
        console.log(ricardoTest);
      })
      .catch(function(err) {
        console.log(err);
      });
      res.send("successful test insertion");
  });

//get the fetched articles from MongoDB, using mongoose
app.get("/posts", function(req, res) {
  db.Posts.find({})
    .then(function(posts) {
      res.json(posts);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// create route when getting specific article by ID from the DB
// app.get("/articles/:id", function(req, res) {
//   db.Article.findOne({ _id: req.params.id })
//     //get the headline of that article and populate notes that associate with it
//     //'note' key from ArticleSchema (Article.js)
//     .populate("note")
//     .then(function(dbArticle) {
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// });

// Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function(req, res) {
//   // Create a new note and pass the req.body to the entry
//   db.Note.create(req.body)
//     .then(function(dbNote) {
//       //return the updated note
//       return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//     })
//     .then(function(dbArticle) {
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// });

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


// require("dotenv").config();
// var express = require("express");
// // var exphbs = require("express-handlebars");

// var db = require("./models");

// var app = express();
// var PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// // app.use(express.static("public"));

// // Handlebars
// // app.engine(
// //   "handlebars",
// //   exphbs({
// //     defaultLayout: "main"
// //   })
// // );
// // app.set("view engine", "handlebars");

// // Routes


// var routes = require("./controllers/main.js");

// app.use(routes);


// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

