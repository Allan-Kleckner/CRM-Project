//dependencies >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//client schema <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const clientSchema = new Schema ({
    first: String,
    last: String,
    phone: String,
    linkedIn: String,
    notes: String
})


//create mongoose model  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const Client = mongoose.model('Client', clientSchema);
//exports   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
module.exports = Client;