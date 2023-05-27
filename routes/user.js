var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products = [
    {
      name : "IPhone 13",
      category: "mobiles",
      description : "latest from Apple",
      price:'5000',
      image : "https://www.jiomart.com/images/product/420x420/491997703/apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.jpeg"
    },
    {
      name : "one plus",
      category : "mobiles",
      description : "chines",
      price:'5000',
      image : "https://www.jiomart.com/images/product/420x420/491997703/apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.jpeg"
    },
    {
      name : "IPhone 13",
      category: "mobiles",
      description : "latest from Apple",
      price:'5000',
      image : "https://www.jiomart.com/images/product/420x420/491997703/apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.jpeg"
    },
    {
      name : "one plus",
      category : "mobiles",
      description : "chines",
      price:'5000',
      image : "https://www.jiomart.com/images/product/420x420/491997703/apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.jpeg"
    }
  ]
  res.render('index', { products,admin:false });
});

module.exports = router;
