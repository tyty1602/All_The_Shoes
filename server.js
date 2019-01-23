var cheerio = require("cheerio");
var axios = require("axios");
var allShoesArray = [];
// var designerResults = [];
// var descriptionResults = [];
// var myDumbVariable;
var cors = require('cors');
const express = require('express'),bodyParser = require('body-parser'),path = require('path')
const app = express();

// Middleware necessary for front end to talk to backend
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}));

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app_client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './app_client/', './public/index.html'));
});


app.get('/scrape', function (req, res) {
  axios.get("https://www.net-a-porter.com/us/en/d/shop/Sale/Shoes/All?pn=1&npp=60&image_view=product&dScroll=0").then(function (response) {
    var $ = cheerio.load(response.data);
    $("div.product-image").each(function (i, element) {
      let obj = {
        image: '',
        designer: '',
        description: ''
      }
      //console.log("<MMMMMMMMMMMMMMM", element);
      var imageUrl = $(element).find("img").attr("data-src");
      obj.image = imageUrl;
      allShoesArray.push({
        obj
      });
    });

    $("div.description").each(function (i, element) {
      //console.log(element);
      //Axios call for description and designer
      var description = $(element).find("a").attr("title");
      var designer = $(element).find(".designer").text();
      //var title = $(element).attr("title");
      // Save these tittleResults in an object that we'll push into the allShoesArray array we defined earlier
      allShoesArray[i].obj.designer = designer;
      allShoesArray[i].obj.description = description;
    });

    // designer and description in the same each to grab the fields and asssign at the given index
    return allShoesArray;

    //console.log(allShoesArray);
    //res.send(allShoesArray);
  }).then(allShoesArray => console.log("mmmmmmmmmmmmmmmmmmmmmmmm", allShoesArray));
  res.send(allShoesArray);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

