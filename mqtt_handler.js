const mqtt = require('mqtt');

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'ajoan.com';
    this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    this.password = 'YOUR_PASSWORD';
  }
  
  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    // this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });
    // this.mqttClient = mqtt.connect(this.host, {});
    this.mqttClient  = mqtt.connect("mqtt://ajoan.com",{});
    console.log("connected flag  " + this.mqttClient.connected);

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();cle
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe('mytopic', {qos: 0});

    // When a message arrives, console.log it
    this.mqttClient.on('message', function (topic, message) {
      console.log(message.toString());
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(topic, message) {
    this.mqttClient.publish(topic, message, ()=>{
      
    });    
  }
}

module.exports = MqttHandler;