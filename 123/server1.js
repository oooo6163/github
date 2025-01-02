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

server.get("/api/product/:id", async (req, res) => {
  try {
    const id = req.params.id;               // 從網址路徑上取參數
    const product = await ProductDB.findOne({ id: id });  
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

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







server.listen(80, () => {
  console.log("Server1 is running at port 80.");
})