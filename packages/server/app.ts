import express, { Express, Request, Response } from 'express';
import cors from 'cors';
export { app };

const app: Express = express();

app.use(cors());
app.options('*', cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(`Hello from the server side ${process.env.NODE_ENV}!`);
});

app.get('/testdata', (req: Request, res: Response) => {
  res.json({ foo: 'test' });
});

app.use(express.static(`${__dirname}/../../cilent/public`));

// import NextFunction --> next: NextFunction
