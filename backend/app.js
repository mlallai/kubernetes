const express = require('express');
const app = express();
const port = 80;

const welcometext = `App listening at http://localhost:${port} - Environment is: ${process.env.NODE_ENV} and Log Level is: ${process.env.LOG_LEVEL}`;

app.get('/', (req, res) => {
  res.send(welcometext);
});

app.listen(port, () => {
  console.log(welcometext);
});
