var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

router.get("/", function(req, res){
    Campground.find({}, function(err, campdata){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds: campdata});
        }
    });
});

router.post("/", isLoggedIn, function(req, res){
    var newCamp = req.body.camp;
    newCamp.author = {
        id: req.user._id,
        username: req.user.username
    };
    Campground.create(newCamp, function(err, newCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
});

router.get("/new", isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;