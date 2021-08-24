'use strict';


const express = require('express');
const cors = require('cors');
const morgan = require('morgan');



const notFoundHandler = require('./error-handler/404');
const errorHandler = require('./error-handler/500');


const routesV1 = require('./routes/v1');
const routesV2 = require('./routes/v2');
const authRoutes = require('./routes/auth');



const app = express();


app.use(cors());
app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/',(req,res)=>{
  res.send('welcome to my site')
});


app.use('/api/v1', routesV1);
app.use('/api/v2', routesV2);
app.use('/auth', authRoutes);



app.use(notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};