import express from 'express';
import connectDB from './database.js';
import productRoutes from './Routes/productRoutes.js';
import cors from 'cors';         

connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());                  
app.use(express.json());           

// Product Routes
app.use('/products', productRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});

// Error Hndling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start  server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
