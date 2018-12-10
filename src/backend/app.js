const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const db = require("./db");

db.connect().then(dbo => {
  app.get("/rest/shows", (req, res) => {
    dbo
      .collection("shows")
      .find({})
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
  });

  app.get("/rest/shows/:id", (req, res) => {
    dbo.collection("shows").findOne({ id: req.params.id }, (err, show) => {
      if (err) throw err;
      res.send(show);
    });
  });

  app.use(express.static(path.join(__dirname, "../../build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../build", "index.html"));
  });

  app.listen(port);
});
