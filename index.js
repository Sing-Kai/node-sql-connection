const express = require('express')
const db = require('./db.js')
const app = express();
app.use(express.json());

app.get('/onsite', async function(req,res){
  res.set('Content-Type', 'application/json');
  const data = await db.onSite()
  res.send(data);
});

app.get("/health", (req, res) => res.status(200).send());

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`server is up and running on port: ${port}`));
