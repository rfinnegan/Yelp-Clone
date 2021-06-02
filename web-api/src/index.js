const express = require("express");
const app = express();
app.listen(8080, function() {
    console.log("I'm listening on port 8080");
});

app.get("/restaurants", function(req, res) {
    res.send("I don't have any restaurants");
});

/*telling api to listen to get requests, at the /restaurants url
when it hears something, it will run the function.
*/