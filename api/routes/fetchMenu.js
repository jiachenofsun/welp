var express = require('express');
var jsdom = require('jsdom');
var {JSDOM} = jsdom; // jsdom is a library used to fetch and parse html! 
var router = express.Router();

const url = "https://caldining.berkeley.edu/menus/"; // link to cal dining website


/* GET home page. */
router.get('/', async function(req, res, next) {
  // fromURL fetches the HTML file of the website url
  await JSDOM.fromURL(url).then(dom => {
      parseHTML(dom); // dom -> the document of the website
      res.json({ title: "Here's the menu!", menu: menu }); // send the menu as a response back to client
  });
  
});

// dictionary that contains our menu as a dictionary
let menu = {
  crossroads: {},
  foothill: {},
  cafe3: {},
  clarkkerr: {},
};
// query selector for the location of the food. 
// This means that we select any HTML element that 
// has the class "location-name" and "crossroads"
const Q_NAME = {
  crossroads: ".Crossroads",
  foothill: ".Foothill",
  cafe3: ".Cafe_3",   
  clarkkerr: ".Clark_Kerr_Campus",
};
const Q_TIME = {
  breakfast: ".Breakfast",
  lunch: ".Lunch",
  dinner: ".Dinner",
  brunch:  ".Brunch",
};

function parseHTML(dom) {
  const names = Object.keys(menu); // get the array of keys to the name dictionary
  const times = Object.keys(Q_TIME); // get the array of times to the time dictionary

  // for every dininghall and timeperiod pair...
  names.forEach(name => {
      times.forEach(time => {
          let data = []
          try {
            // save all the menu items under the query.
            // example query: "Find the first element with class .Crossroads and .Breakfast
            // and then within that element, get anything with class .recip and is a <span> object" 
              data = dom.window.document
                .querySelector(Q_NAME[name] + ' ' + Q_TIME[time])
                .querySelectorAll(".recip span")
          } catch (err) { 
              // error! couldn't find menu for this specific time/name
          };

          
          // grab the inside text of every span
          let menuItems = [];
          data.forEach(element => {
              if(element.className == "") {
                  menuItems.push(element.innerHTML);
              }
              
          });
          
          // set each entry in the menu dictionary to the menu list we found 
          menu[name][time] = menuItems;
      });
      
  });
}

module.exports = router;
