/*jshint node:true*/

import express from 'express';

const app = express();
const port = 1337;

app.get('*', (req, res) => {
  res.status(200).send('ping');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;
