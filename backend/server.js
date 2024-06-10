const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const notesRouter = require('./routes/notes');

   const app = express();
   const port = 5000;

   // Middleware
   app.use(cors());
   app.use(express.json());

   // Connect to MongoDB
   mongoose.connect('mongodb://localhost:27017/notes-app', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   // Routes
   app.use('/api/notes', notesRouter);

   // Start the server
   app.listen(port, () => {
     console.log(`Server running on http://localhost:${port}`);
   });


   