const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task_name:{
        type:String
    },
    user_id:{
        type:String
    }
})

module.exports = mongoose.model("task",taskSchema)