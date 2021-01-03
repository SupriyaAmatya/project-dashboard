import './env';
import './db';

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import routes from './routes'; 

const app = express();

// Body parser Middleware
app.use(bodyParser.json());

// CORS Middleware
app.use(cors());

// Use Routes
app.use('/api', routes);

const port = config.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
