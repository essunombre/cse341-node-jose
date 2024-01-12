const express = require("express");
const app = express();
// const lesson1Controller = require('./controllers/lesson1');

// app.get("/", (req, res) => {
//   res.send("Karol Robles");
// });

// app.get("/jose", (req, res) => {
//     res.send("Jose Robles");
// });

// app.get("/", lesson1Controller.karolRobles);

// app.get("/liz", lesson1Controller.lizAlbancando);
const port = 3000;

app.use('/', require('./routes/index'))



app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || 3000));
});
