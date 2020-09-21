import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import handleErrors from './middlewares/handleErrors';
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleErrors);

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('backend started at port 3333 🙌'));
