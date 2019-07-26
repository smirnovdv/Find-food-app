// // Client ID
// B4tBs5lRvfBC4Q7jmtKOxg

// API Key
// PPTr_crOO4P-W4rx7jJXTQsU3kc6pJpJugCbo8yfwMh2jnUOzhXambkkTjYuNOkzAJjGd1v56DPXZ0b_3KumUO7u3k_EcaZ-bBjacfmm-DFlNfkMsY2OP4FoRw85XXYx

'use strict';

const express = require("express")
const app = express();
const yelp = require('yelp-fusion');
const client = yelp.client('PPTr_crOO4P-W4rx7jJXTQsU3kc6pJpJugCbo8yfwMh2jnUOzhXambkkTjYuNOkzAJjGd1v56DPXZ0b_3KumUO7u3k_EcaZ-bBjacfmm-DFlNfkMsY2OP4FoRw85XXYx');
 
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/results", (req, res) => {
    
    client.search({
        location: req.query.search,
        radius: 5000,
        limit:10,
        sort_by:"distance"
      }).then(response => {
        console.log(response.jsonBody);
        res.render("results.ejs",{data:response.jsonBody.businesses});
      }).catch(e => {
        console.log(e);
      });
    
})

app.use(express.static('public'))

app.listen(port, ()=> {
  console.log("Server running on port "+ port)
})