import { app } from './app';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: './../../config.env' });

app.use(cors());
app.options('*', cors());

const PORT: number = 3001;
app.listen(PORT, () => {
  console.log(process.env.NODE_ENV);
  console.log(`App running on port ${PORT}...`);
});
