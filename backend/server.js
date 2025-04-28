const wol = require('wol');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

const macAddress = process.env.MAC 

const publicIP = process.env.IP  


const port = 9;

app.get('/wake-pc', (req, res) => {
  // Gửi gói Magic Packet tới IP công cộng của router
  wol.wake(macAddress, { address: publicIP, port: port }, (error) => {
    if (error) {
      return res.status(500).send('Error waking up PC');
    }
    res.send('PC is waking up');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
