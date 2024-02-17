const mongoose = require('mongoose');

const creatSchema= (schema) => {
    return new mongoose.Schema(schema);   
};
module.exports = creatSchema;