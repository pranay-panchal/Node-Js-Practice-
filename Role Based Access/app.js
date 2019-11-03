const express = require('express');
const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

const PORT = 5000;

app.listen();