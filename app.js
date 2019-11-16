var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campdata = [
    {name: "Sunny Vale", image: "https://images.unsplash.com/photo-1573840392340-548fbb2447e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Rainny town", image: "https://images.unsplash.com/photo-1573850863352-688921f4eb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Autmy Coral", image: "https://images.unsplash.com/photo-1573843464747-0d506ecb4a5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Sunny Vale", image: "https://images.unsplash.com/photo-1573840392340-548fbb2447e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Rainny town", image: "https://images.unsplash.com/photo-1573850863352-688921f4eb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Autmy Coral", image: "https://images.unsplash.com/photo-1573843464747-0d506ecb4a5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Sunny Vale", image: "https://images.unsplash.com/photo-1573840392340-548fbb2447e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Rainny town", image: "https://images.unsplash.com/photo-1573850863352-688921f4eb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
    {name: "Autmy Coral", image: "https://images.unsplash.com/photo-1573843464747-0d506ecb4a5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
    
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campdata});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image= req.body.image;
    var newCamp = {name: name, image: image};
    campdata.push(newCamp);
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("Running on 3000");
});