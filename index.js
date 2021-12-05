import path from "path";
import http from "http";
import fs from "fs";
import express from "express";
import { fileURLToPath } from "url";
const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', "index.html"))
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', "about.html"))
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', "contact-me.html"))
});

app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', "404.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
