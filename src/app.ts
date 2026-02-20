import express from "express";

const app = express();
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("Hello, Word Paraguai /home!");
});

export default app;
