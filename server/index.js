import express from 'express';
import dotenv from 'dotenv'; 
import cors from 'cors';
5

import OpenAI from 'openai'; 
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' })); 

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from DALL.E' });
});

app.listen(8080, () => {
  console.log('server started port 8080');
});
