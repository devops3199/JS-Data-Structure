const express = require('express');
const app = express();

let cnt = 0;

app.get('/', (req, res) => { 
    cnt++;
    res.send(cnt.toString()); // request마다 쓰레드 생성 안함 
 })

app.listen(3000, () => {
  console.log(`server up and running`);
})