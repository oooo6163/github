//install: node js
//install web server package: express >npm install express
//install web server package: express >npm install nedb-promises
//install web server package: express >npm install multer
var express = require("express");
var server = express();
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');


// 靜態文件服務
server.use(express.static(__dirname + "/EndTern"));


var DB = require("nedb-promises");

var ProductDB = DB.create(__dirname + "/product.db");


//ProfolioDB.insert([
//    { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
//    { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
//    { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
//    { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
//    { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
//    { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }
//])

server.get("/shop", (req, res) => {
  //DB
  ProductDB.find({}).then(results => {
    if (results != null) {
      res.send(results);
    } else {
      res.send("Error!");
    }
  })
})



server.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/EndTern/upload.html');
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/EndTern/img2'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });


server.use(bodyParser.json());

server.post('/api/upload', upload.array('img', 5), async (req, res) => {
  try {
    const imageUrls = req.files.map(file => '/img2/' + file.filename);

    await ProductDB.insert({
      id: req.body.id,
      name: req.body.name,
      text: req.body.text,
      price: req.body.price,
      category: req.body.category,
      img: imageUrls
    });

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

ProductDB.insert({ id: "1", img: "img/img01.jpg", name: "商品1 ", text: "介紹", price: "500", category: "分類一" },
  { id: "2", img: "img/img02.jpg", name: "商品2", text: "介紹", price: "600", category: "分類二" },
  { id: "3", img: "img/img03.jpg", name: "商品3", text: "介紹", price: "500", category: "分類三" },
  { id: "4", img: "img/img04.jpg", name: "商品4", text: "介紹", price: "300", category: "分類一" },
  { id: "5", img: "img/img05.jpg", name: "商品5", text: "介紹", price: "800", category: "分類二" },
  { id: "6", img: "img/img04.jpg", name: "商品6", text: "介紹", price: "900", category: "分類四" },
  { id: "7", img: "img/img01.jpg", name: "商品7", text: " 介紹", price: "500", category: "分類一" },
  { id: "8", img: "img/img02.jpg", name: "商品8", text: "介紹", price: "600", category: "分類二" },
  { id: "9", img: "img/img03.jpg", name: "商品9", text: "介紹", price: "500", category: "分類三" },
  { id: "10", img: "img/img04.jpg", name: "商品10", text: "介紹", price: "300", category: "分類一" },
  { id: "11", img: "img/img05.jpg", name: "商品11", text: "介紹", price: "800", category: "分類二" },
  { id: "12", img: "img/img04.jpg", name: "商品12", text: "介紹", price: "900", category: "分類四" })





server.listen(80, () => {
  console.log("Server1 is running at port 80.");
})