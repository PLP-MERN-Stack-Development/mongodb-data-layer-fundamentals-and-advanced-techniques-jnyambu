const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const db_url = 'mongodb+srv://nyamburajosephine36_db_user:Josephine36@@mernweek1assignment.hg2daaf.mongodb.net/?retryWrites=true&w=majority&appName=mernweek1assignment';
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
