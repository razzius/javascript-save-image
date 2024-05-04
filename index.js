const fs = require('node:fs')
const path = require('path')
const express = require('express')
const mime = require('mime')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: 'images',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

app.get('/', (req, res) => {
  const options = {
    root: path.join(__dirname),
  }

  res.sendFile('client.html', options)
})

app.post('/', upload.single('datafile'), (req, res) => {
  res.end('Uploaded file')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000.')
})
