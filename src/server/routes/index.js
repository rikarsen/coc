'use strict';

const express = require('express');
const router = express.Router();
const request = require('request');
const moment = require('moment');
const customRequest = request.defaults({'proxy': process.env.FIXIE_URL});

let currentDate = '';
let ninjaBearFightData;

router.get('/main/:id', function (req, res) {
    let options = {
        uri: process.env.COC_CLAN_ID_PATH + req.params.id,
        method: 'GET',
        auth: {
            bearer: process.env.COC_KEY
        }
    };

    let todaysDate = moment().utc().format("DD-MM-YYYY");

    if (todaysDate === currentDate) {
        res.send(ninjaBearFightData);
    } else {
        customRequest(options, function (error, response) {
            if (!error && response.statusCode == 200) {
                currentDate = todaysDate;
                ninjaBearFightData = response.body;
                res.send(ninjaBearFightData);
            } else {
                res.send(false);
            }
        })
    }
});

module.exports = router;