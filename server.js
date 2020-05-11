//Install express server
const express = require('express');
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new Express application instance 
const app = express();
const mqttHandler = require('./mqtt_handler');
let topic ='';

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors());
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

var mqttClient = new mqttHandler();
mqttClient.connect();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

/* it should use post but for easy test on broswer, i use get instead.
app.get('/moveCar', (req, res) => {
    // console.log(req.query.devId);
    console.log(req.query.payload);
    mqttClient.sendMessage(`moveCar/${req.query.devId}`, req.query.payload);    
    res.sendStatus(200);    // could this solve the mqtt msg in delay receiving issue?
    // res.json({info: "msg published"});
});
*/
app.post('/moveCar', (req, res) => {
    // console.log(req.query.devId);
    console.log(req.body);  // body is a json obj, while mqtt.push takes only string as msg
    mqttClient.sendMessage(`moveCar/${req.body.devId}`,  JSON.stringify(req.body));    
    res.json(req.body);    // could this solve the mqtt msg in delay receiving issue?
    // res.json({info: "msg published"});
});

app.get('/devId', (req, res)=>{    
    res.send(mqttClient.devId);    
});

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
