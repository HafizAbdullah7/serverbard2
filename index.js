const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

// Configure CORS middleware
const corsOptions = {
  origin: '*', // Allow requests from any origin
  methods: ['GET'], // Allow only GET requests
  allowedHeaders: ['Content-Type'], // Allow Content-Type header
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Set Access-Control-Allow-Origin header
  res.send('Hello, this is the YouTube Video Downloader server!');
});

app.get('/download', (req, res) => {
  const url = req.query.url;
  ytdl(url, { filter: format => format.container === 'mp4' })
    .pipe(res);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
