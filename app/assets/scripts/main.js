
import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

var config = require('./config');


console.log.apply(console, config.consoleMessage);
if (config.environment === 'staging') {
  console.log('STAGING');
}


//Who made the commits//
var request = require('request');
request('https://api.github.com/repos/developmentseed/missingmaps/commits?access_token=3a8fe667d7aaf34f051f6707ef4faf8dcf4278f7', function (error, response, body) {
  if (!error && response.statusCode === 200) {
       JSON.parse(console.log(body.name));
    }
   else console.log(error);
});

//Return the number of times a person commits
function returnRequest(request) {
    var a = [], b = [], prev;

    request.sort();
    for (var i = 0; i < request.length; i++) {
        if ( request[i] !== prev ) {
            a.push(request[i]);
            b.push(1);
        } else {
            b[b.length-1]++ ;
        }
        prev = request[i];
    }

    console.log([a],[b]);
}

//React for number of commits
var commitList = React.createClass({
  render: function() {
    return (
      <div className="commitList">
        console.log([a],[b]);
      </div>
    );
  }
});