const express = require("express")
const cors = require("cors")
const axios = require("axios")
const bodyParser = require('body-parser');

require('dotenv').config()

const stripe = require("stripe")(process.env.STRIPE_KEY)
const app = express();
const port = 3001;

app.use(bodyParser.json());
// const upload = multer();
// soem changes
console.log("one")
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.post('/pay', async (req, res) => {

  
 const {product}= await req.body;

 const lineItems= product.map((el)=>({
     price_data:{
        currency:"usd",
        product_data:{
            name:el.title, 
           // image:el.image
            // address: {
            //   line1: '510 Townsend St',
            //   postal_code: '98140',
            //   city: 'San Francisco',
            //   state: 'CA',
            //   country: 'US',
            // }
        },
        unit_amount:Math.round(el.price*100),
    },
quantity:el.cartQuant
})
)

// const customer = await stripe.customers.create({
//   name: 'Jenny Rosen', //
//   address: {
//     line1: '510 Townsend St',
//     postal_code: '98140',
//     city: 'San Francisco',
//     state: 'CA',
//     country: 'US',
//   },
// });


 const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    mode:"payment",
    success_url:"http://localhost:5173/success",
    cancel_url:"http://localhost:5173/demo"
 })
  res.json({id:session.id });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
