const mqtt = require('mqtt');

class MqttHandler {
  constructor() {
    this.devId = '';
    this.mqttClient = null;
    this.host = 'ajoan.com';
    this.username = 'roach'; // mqtt credentials if these are needed to connect
    this.password = '0206@tw';
  }

  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    // this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });
    // this.mqttClient = mqtt.connect(this.host, {});
    this.mqttClient = mqtt.connect("mqtt://ajoan.com", { username: this.username, password: this.password });
    console.log("connected flag  " + this.mqttClient.connected);

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      // mqtt subscriptions
      this.mqttClient.subscribe('devId', { qos: 0 }, (err) => {
        console.log('err mqtt sub: ', err);
      });
      console.log(`mqtt client connected`);
    });

    // When a message arrives, console.log it
    this.mqttClient.on('message', (topic, message) => {  
      if (topic === 'devId') {
        // overwrite devId whenever a robot car is powered on and sending devId to mqtt broker
        this.devId = message.toString();
        console.log(this.devId);
      }
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(topic, message) {
    return this.mqttClient.publish(topic, message, console.log);
  }
}

module.exports = MqttHandler;