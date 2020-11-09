// const fetch = require('node-fetch')

fetch('http://localhost:8000/')
  .then(r => r.text())
  .then(console.log)