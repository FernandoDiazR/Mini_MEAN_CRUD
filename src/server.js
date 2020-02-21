const express = require('express');
const app = express();
const cors = require('cors');

//----------SETTINGS-------------------------
if(process.env.NODE_ENV !== 'production') require('dotenv').config();
app.set('port', process.env.PORT || 3000);
require('./database');

//----------MIDDLEWARE-----------------------
if(process.env.NODE_ENV !== 'production'){
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors({
    origin: 'https://cocky-noyce-049128.netlify.com/'
}));

//-----------ROUTES--------------------------
app.use('/api/employees', require('./employee/employee.routes'));

//----------STARTING_SERVER------------------

app.listen(app.get('port'));
