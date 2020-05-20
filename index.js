const express = require("express");
let app = new express();

app.get("/", function(req, res) {
    res.send("<html><center>HELLO WORLD</center></html>");
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

let port = 8080;
app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});