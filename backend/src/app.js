const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/thoughts", (req, res) => {
  res.status(200).json([]);
});

app.get("/api/thought/:id", (req, res) => {
  const id = Number(req.params.id);
  // Simulate a database request
  const thought = { id: id, content: "This is a thought from the database." };
  res.status(200).json(thought);
});

app.post("/api/thought", (req, res) => {
  const content = trim(req.body.content);
  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  } else {
    // Simulate saving to the database
    const newThought = { id: 88, content: content };
    res.status(201).json(newThought);
  }
});

module.exports = app;
