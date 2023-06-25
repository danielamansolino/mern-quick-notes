// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
//should I requiere my notes ? 
const Notes = require('./models/notes')

// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, note, item, category, order;
let users, notes, items, categories, orders;
