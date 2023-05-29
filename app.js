require("dotenv").config();
const express = require("express");
const app = express();
const connectDb=require('./db/connect')
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const productRouter=require('./routes/products')
const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/v1/products',productRouter)
app.use(errorHandler);
app.use(notFound);



const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(8000, () => {
      console.log(`Server started at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()