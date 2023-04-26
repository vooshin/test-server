const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  const host = req?.headers?.host;
  res.json({
    message: "base route",
    data: {
      host,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
