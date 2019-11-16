var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/yelp_camp", {useUnifiedTopology: true, useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campdata){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds: campdata});
        }
    });
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image= req.body.image;
    var description = req.body.description;
    var newCamp = {name: name, image: image, description: description};
    Campground.create(newCamp, function(err, newCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds")
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function(){
    console.log("Running on 3000");
});