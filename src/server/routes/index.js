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
        uri: 'https://api.clashofclans.com/v1/clans/%23' + req.params.id,
        method: 'GET',
        auth: {
            bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImUyYWViYjYzLWJmYjMtNGMxOS1iYjdlLTk3NjJhOGE5NGY4MiIsImlhdCI6MTQ4Mzk3Mzk5OCwic3ViIjoiZGV2ZWxvcGVyLzY3ZjI4YzUzLWQyZWMtMzIxYi1lZTkwLTM2ZmU2NTI1MjZhZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjUuNjMuMTY1LjE2MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.voZquJ0NB5JH2963gH8hkhL7jf3FpZBt52X4cJdV8nnJ8VprNSmxUX2uvSxSkZeh8CcRckkj-Salsu0mTo6pdg'
        }
    };

    let todaysDate = moment().utc().format("DD-MM-YYYY");

    if (todaysDate === currentDate) {
        res.send(ninjaBearFightData);
    } else {
        customRequest(options, function (error, response, body) {
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