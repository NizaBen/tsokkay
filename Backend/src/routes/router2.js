const express = require('express');

const router2 = express.Router();

router2.get('/yes',(req,res)=> {
   res.send('Hello world from Ariana!');
});

module.exports = router2;