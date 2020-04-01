/*
 * @Description: 
 * @Author: superman
 * @Date: 2020-04-01 13:54:27
 * @LastEditors: superman
 * @LastEditTime: 2020-04-02 00:04:22
 */
const express = require('express')
const fs = require('fs');
const path = require('path')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static/index.html'));
})

app.get('/css/index.css', (req, res) => {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname, 'static/css/index.css'));
    console.log('css');
  }, 0);
})

app.get('/images/taylor.jpeg', (req, res) => {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname, 'static/images/taylor.jpeg'));
    console.log('jpeg');
  }, 0);
})

app.get('/js/index.js', (req, res) => {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname, 'static/js/index.js'));
    console.log('index.js');
  }, 0);
})

app.get('/js/another.js', (req, res) => {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname, 'static/js/another.js'));
    console.log('another.js');
  }, 0);
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
