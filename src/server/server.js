const express = require('express')
const cors = require('cors')

const IncomingForm = require('formidable').IncomingForm

const server = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.post('/upload', function upload(req, res){
  console.log("upload!");
  var form = new IncomingForm()

  form.on('file', (field, file) => {
    console.log(file)
  })

  form.on('end', () => {
    res.json()
  })
  form.parse(req)
})

server.listen(8000, () => {
  console.log('Server started!')
})



// var express = require('express');
// var app = express();
// var multer = require('multer')
// var cors = require('cors');

// app.use(cors())

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//     cb(null, 'public')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' +file.originalname )
//   }
// })

// var upload = multer({ storage: storage }).array('file')

// app.post('/upload',function(req, res) {
//     upload(req, res, function (err) {
//         console.log(err)
//            if (err instanceof multer.MulterError) {
//                return res.status(500).json(err)
//            } else if (err) {
//                return res.status(500).json(err)
//            }
//       return res.status(200).send(req.file)

//     })

// });

// app.listen(8000, function() {

//     console.log('App running on port 8000');

// });