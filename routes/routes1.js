const router = require("express").Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const middleWare = require('../middleware/middle')

router.get("/", (req, res) => {
  res.send("This is Default Route");
  console.log("This is Default Route");
});

// Example For Middle Ware ,Data From FrontEnd (Get)  
router.get("/home/:name",middleWare, (req, res) => {

});

// Example For Middle Ware ,Data From FrontEnd (Post)  
router.post("/Contact",middleWare, (req, res) => {
    console.log(req.body.name);
}); 

module.exports = router;
