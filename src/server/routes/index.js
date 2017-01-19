/**
 * Main application routes
 */

'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const moment = require('moment');
// for fixie add-on on heroku to use static IPs
const customRequest = request.defaults({'proxy': process.env.FIXIE_URL});

let currentDate = '';
let ninjaBearFightData;

router.get('/main/:id', function(req, res) {
  let options = {
    uri : process.env.COC_CLAN_ID_PATH + req.params.id,
    method : 'GET',
    auth : {
      bearer: process.env.COC_KEY
    }
  };

  // send back a cashed of today's stats
  // to avoid being billed by fixie proxy for more than 500 requests a month :)
  let todaysDate = moment().utc().format("DD-MM-YYYY");

  if (todaysDate === currentDate) {
    res.send(ninjaBearFightData);
  } else {
    customRequest(options,  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        currentDate = todaysDate;
        ninjaBearFightData = response.body;
        res.send(ninjaBearFightData);
      }else{
        res.send(false);
      }
    })
  }



});


module.exports = router;