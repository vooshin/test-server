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

const x = {
  km1: {
    url: "https://ec2-3-109-132-198.ap-south-1.compute.amazonaws.com/",
  },
  km2: {
    url: "https://ec2-13-235-135-43.ap-south-1.compute.amazonaws.com/",
  },
  km3: {
    url: "https://ec2-3-110-151-38.ap-south-1.compute.amazonaws.com/",
  },
};
