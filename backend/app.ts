import express, { Request, Response } from 'express';

const app = express();
const port = 80;

const welcometext = `App listening at http://localhost:${port} - Environment is: ${process.env.NODE_ENV} and Log Level is: ${process.env.LOG_LEVEL}`;

app.get('/', (req: Request, res: Response) => {
  res.send(welcometext);
});

app.listen(port, () => {
  console.log(welcometext);
});
