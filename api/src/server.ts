import express from 'express';
import cors from 'cors';
import './database';

const app = express();

app.use(cors());

app.use(express.json());

app.listen(3333, () => console.log('backend started at port 3333 🙌'));
