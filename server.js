'use strict';

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:8000',
    credentials: true,
    methods: ['GET', 'HEAD', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  }),
);

app.post('/login', function (req, res) {
  res
    .cookie('jwt', 'test', {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 6,
      path: '/',
      sameSite: 'Lax',
    })
    .end();
});

app.listen(3200, 'localhost', () => console.log('server started on 3100'));
