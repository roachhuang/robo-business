//Install express server
const express = require('express');
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new Express application instance 
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors());
app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'sitemap.xml'));
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000, () => {
    console.log("The server started on port 5000");
})

const sendMail = (user, callback) => {
    const mailOptions = {
        from: 'student',
        to: 'giraftw2002@gmail.com',
        subject: "singing up",
        html: `<h1>user: ${user.name}, tel: ${user.tel}</h1>`
    };
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "giraftw2002@gmail.com",
            // https://myaccount.google.com/security 
            // must enable 2 steps certification to get an app psswd for nodemailer to work with gmail.
            pass: "qeosqinfsspcfznr"
        }
    });
    transporter.sendMail(mailOptions, callback);
    console.log('come this far');
}


// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => { 
    let user = req.body;
    // console.log(user.name);
    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});
