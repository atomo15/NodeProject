const express = require("express");

let app = new express();

var homepage = require("./homepage");

app.use(express.static(__dirname));


app.get("/", function(req, res) {
    res.send(homepage.homepage);
});

app.get("/about", function(req, res) {
    res.send("About this web app");
});


app.get("/contact", function(req, res) {
    res.send("Thunnathorne");
});

app.get("*", function(req, res) {
    res.send("Not have this page 404");
});



let port = 1234;
app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});