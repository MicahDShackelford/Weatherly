const express = require('express');

const app = express();
const port = 3000;

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  }else {
    console.log(`[Server] Listening on port ${port}`)
  }
});