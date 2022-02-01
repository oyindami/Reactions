// const express = require('express');
// const db = require('./config/connection');
// const routes = require('./routes');

// const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);

// router.use((req, res) => {
//   return res.send('Wrong route');
// });

// module.exports = router;

const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
// const activity = cwd.includes('01-Activities')
//   ? cwd.split('/01-Activities/')[1]
//   : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});