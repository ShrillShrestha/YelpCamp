var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "The flower",
        image: "https://images.unsplash.com/photo-1574086068064-81cb96f586fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa ullam itaque labore ex fugiat nisi in temporibus. Nesciunt sunt odit rem a, incidunt odio cumque! Minima velit accusamus quas!"
    },
    {
        name: "White houses",
        image: "https://images.unsplash.com/photo-1573995975748-e8bca4f0ba7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa ullam itaque labore ex fugiat nisi in temporibus. Nesciunt sunt odit rem a, incidunt odio cumque! Minima velit accusamus quas!"
    }
]

function seedDB() {
    Campground.deleteMany({}, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log("Removed!!!");
    //     data.forEach(function (seed) {
    //         Campground.create(seed, function (err, campground) {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 console.log("Camp Added!");
    //                 Comment.create({
    //                     text: "Hello for the comment.",
    //                     author: "Some random guy"
    //                 }, function (err, comment) {
    //                     if (err) {
    //                         console.log(err);
    //                     } else {
    //                         campground.comments.push(comment);
    //                         campground.save();
    //                         console.log("Comment created");
    //                     }
    //                 });
    //             }
    //         });
    //     });
    });
}

module.exports = seedDB;