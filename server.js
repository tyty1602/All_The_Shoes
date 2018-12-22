var cheerio = require("cheerio");
var axios = require("axios");

const express = require('express')
  , bodyParser = require('body-parser')
  , path = require('path')

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app_client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './app_client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


app.get('/scrape', function (req, res) {
  axios.get("https://www.net-a-porter.com/us/en/d/shop/Sale/Shoes/All?pn=1&npp=60&image_view=product&dScroll=0").then(function (response) {

    var $ = cheerio.load(response.data);

    var picResults = [];

    $("div.product-image").each(function (i, element) {


      //console.log("<MMMMMMMMMMMMMMM", element);
      var image = $(element).find("img").attr("data-src");


      picResults.push({
        image: image
      });
    });


    //console.log(picResults);
    res.send(picResults);
  });
});







//  //Scraping Net a Porter website for img, designer and item description



// // Make a request via axios to grab the HTML body from the site of your choice



// axios.get("https://www.net-a-porter.com/us/en/d/shop/Sale/Shoes/All?pn=1&npp=60&image_view=product&dScroll=0").then(function(response) {

//   var $ = cheerio.load(response.data);

//   // An empty array to save the data that we'll scrape
//   var descriptionResults = [];

//   // Select each element in the HTML body from which you want information.
//   // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//   // but be sure to visit the package's npm page to see how it works
//   $("div.description").each(function(i, element) {

//     //console.log(element);
//     var description = $(element).find("a").attr("title");
//     //var title = $(element).attr("title");
//     // Save these tittleResults in an object that we'll push into the picResults array we defined earlier
//     descriptionResults.push({
//       description: description
//     });
//   });

//   // Log the results once you've looped through each of the elements found with cheerio
//   //console.log(descriptionResults);
// });

// axios.get("https://www.net-a-porter.com/us/en/d/shop/Sale/Shoes/All?pn=1&npp=60&image_view=product&dScroll=0").then(function(response) {

//   var $ = cheerio.load(response.data);

//   // An empty array to save the data that we'll scrape
//   var designerResults = [];

//   // Select each element in the HTML body from which you want information.
//   // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//   // but be sure to visit the package's npm page to see how it works
//   $("div.description").each(function(i, element) {

//     //console.log(element);
//     var designer = $(element).find(".designer").text();

//     // Save these tittleResults in an object that we'll push into the picResults array we defined earlier
//     designerResults.push({
//       designer: designer
//     });
//   });

//   // Log the results once you've looped through each of the elements found with cheerio
//   console.log(designerResults);
// });