const mongoose = require('mongoose');

contactSchema = new mongoose.Schema({
    name : {
        type : String,
        required  : true
    },
    email : {
        type : String,
        required  : true
    },
    message : {
        type : String,
        required  : true
    }
},{
    timestamps : true
});


module.exports =  mongoose.model('Contact', contactSchema);
