const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello");
})

app.get("/contact", function(req,res) {
    res.send("Contact me at: example@example.com");
})

app.get("/about", function(req, res) {
    res.send("Hi");
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
});