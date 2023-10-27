var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

const port =  process.env.PORT  || 2410;

let {products, users,carts} = require("./data")



app.post("/login", function(req,res){
    const  email= req.body.email;
    const password = req.body.password;

    const user = users.find((u) => u.email=== email && u.password === password);

    if(user === undefined)
    {
        res.status(500).send("Invalid Credentials")
    }
    else
    {
        const userRec = {
            name: user.name,
            email: user.email,
            role: user.role
          }
          res.send(userRec)
        }
});


app.get("/products/:category/:prodCode", function(req,res){
  let prodCode = req.params.prodCode
  let category = req.params.category
  let filteredData = products.find((f) => f.prodCode === prodCode && f.category === category )
  res.send(filteredData)
})

app.get("/products/:category", function(req,res){
  let category = req.params.category
  let filteredData = products
  if(category){
      filteredData = products.filter((f) => f.category === category)
  }     
  res.send(filteredData)
})

app.get("/products", function (req, res) {
  const nameQuery = req.query.q;
  let filteredData = products;

  if (nameQuery) {
      filteredData = products.filter((product) =>
          product.name.toLowerCase().startsWith(nameQuery.toLowerCase())
      );
  }

  res.send(filteredData);
});

app.post("/products", function(req,res){
  let body = req.body;
  let senddata = {
    ...body
  }
  products.push(senddata)
  res.send(senddata)
})


app.put("/products/:prodCode", function(req,res)
{
  let prodCode = req.params.prodCode;
  const product = req.body;
  let index = products.findIndex((obj1) => obj1.prodCode === prodCode);
  if (index >= 0) {
    products[index] = product;
    res.send(product);
  } else res.send("not found");


})

app.delete("/products/:prodCode", function (req, res) {
  let prodCode = req.params.prodCode;
  let index = products.findIndex((obj1) => obj1.prodCode === prodCode);
  if (index >= 0) {
    let product = products.splice(index, 1);
    res.send(product);
  } else res.send("not found");
});



app.get("/getCarts", function(req,res){
  res.send(carts)
})

app.post("/addToCarts", function(req,res){
  let body = req.body;

  let json = {
      id : carts.length + 1,
      quantity : 1,
      ...body
  }
  carts.push(json)
  res.send(json)
})


app.put("/updateQuantity/:prodCode", function(req,res){
  let body = req.body
  let prodCode = req.params.prodCode
  const cartItem = carts.find((item) => item.prodCode === prodCode);
  if (cartItem) {
    cartItem.quantity = (cartItem.quantity || 0) + body.quantity;
    if (cartItem.quantity <= 0) {
      carts.splice(carts.indexOf(cartItem), 1);
  }
  res.send("quantity Updated")
  }
} )





















app.listen(port, () => console.log(`Node app listening on port ${port}!`));