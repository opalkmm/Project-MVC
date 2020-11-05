var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/posts", function() {
  // Before each test begins, create a new request server for testing
  //delete all posts from the db aka reset
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all posts", function(done) {
    // Add some examples to the db to test with
    db.Post.bulkCreate([
        {
            author: "author of the first post",
            description: "caption",
            content: "the url",
            created: "the posting date",
            comments: "comments in the comment section"
        },
        {
            author: "author of the second post",
            description: "caption",
            content: "the url",
            created: "the posting date",
            comments: "comments in the comment section"
        }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/posts").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response
        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
        //response from bulkcreate method
          .to.be.an("array");
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            author: "author of the firstpost",
            description: "caption",
            content: "the url",
            created: "the posting date",
            comments: "comments in the comment section"
        });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({ 
            author: "author of the firstpost",
            description: "caption",
            content: "the url",
            created: "the posting date",
            comments: "comments in the comment section"
            });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
