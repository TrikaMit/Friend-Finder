var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(port,function() {
    console.log(`App is listening on http://localhost:${port}`)
})




// var answerArray = [];

// $('.submit').on('click', function(event){
//     event.preventDefault();
//     var qOne = ($('input[name="one"]:checked').val());    
//     var qTwo = ($('input[name="two"]:checked').val());    
//     var qThree = ($('input[name="three"]:checked').val());    
//     var qFour = ($('input[name="four"]:checked').val());    
//     var qFive = ($('input[name="five"]:checked').val());    
//     var qSix = ($('input[name="six"]:checked').val());    
//     var qSeven = ($('input[name="seven"]:checked').val());    
//     var qEight = ($('input[name="eight"]:checked').val());    
//     var qNine = ($('input[name="nine"]:checked').val());     
//     var qTen = ($('input[name="ten"]:checked').val());    
//     console.log(qOne,qTwo,qThree,qFour,qFive,qSix,qSeven,qEight,qNine,qTen)
//     answerArray.push(qOne,qTwo,qThree,qFour,qFive,qSix,qSeven,qEight,qNine,qTen);
//     console.log(answerArray);
//     answerArray = [];
    
// })

