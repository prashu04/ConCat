const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
const app = express();
const port = process.env.PORT; //dynamic port on server
app.use(bodyParser.urlencoded({ extended: true }));

//To access the static files we need to move relative to the public folder
app.use(express.static("public"));

//Start Server and listen to the port for requests
app.listen(port || 3000, () => {
    console.log(`Server listening on port ${port}`)
});

//Handle get requests to the root signin directory
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signin.html");
});

//Handle post requests to the root sigin directory
app.post("/", function(req, res) {
    var emailAddress = req.body.emailAddress;
    var password = req.body.password;

    if (emailAddress == password) {
        console.log("Login Successful!");
        res.redirect("/intentions");
    } else {
        console.log("Incorrect password");
        res.redirect("/");
    }
});

//Handle get requests to the help page
app.get("/help", function(req, res) {
    res.send("Hello World this should be the help page!");
});

//Handle get requests to the Intentions page
app.get("/intentions", function(req, res) {
    res.sendFile(__dirname + "/intentions.html");
});

//Handle post request to the Intentions Page
app.post("/intentions", function(req, res) {
    console.log(req.body);

    //Capture form input on server
    var requestorName = req.body.requestorName;
    var massDate = req.body.massDate;
    var massTime = req.body.massTime;
    var noOfIntentions = req.body.noOfIntentions;
    var massType = req.body.massType;
    var intentionsList = req.body.intentionsList;
    var paymentMethod = req.body.paymentMethod;

    const d = new Date(massDate);
    var n = d.getDay();
    var selPrice;

    //If mass date is a weekend OR if special condition is applied
    if (n < 1 || n > 5 || massType == "special") {
        selPrice = 100;
    } else {
        selPrice = 50;
    }

    var totalAmount = noOfIntentions * selPrice;

    console.log("Total Amount Payable = Rs " + totalAmount);
    res.redirect("/intentions");
});

//Handle get requests to the Donations page
app.get("/donations", function(req, res) {
    res.sendFile(__dirname + "/donations.html");
});

//Handle post request to the Donations Page
app.post("/donations", function(req, res) {
    console.log(req.body);

    //Capture form input on server
    var donorName = req.body.donorName;
    var donationDate = req.body.donationDate;
    var donationTime = req.body.donationTime;
    var donationAmount = req.body.donationAmount;
    var paymentMethod = req.body.paymentMethod;
    var referenceID = req.body.referenceID;

    var totalAmount = donationAmount;

    console.log("Total Amount Payable = Rs " + totalAmount);
    res.redirect("/donations");
});