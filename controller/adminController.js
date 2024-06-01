const adminModel = require("../model/adminModel");
const taskModel = require("../model/taskModel");
const userModel = require("../model/userModel");

const storage = require('node-persist');
storage.init( /* options ... */);

exports.a_login = async (req,res)=>{
    var data = await adminModel.find({"a_email":req.body.a_email});

    if(data.length>0){
        if(data[0].a_password==req.body.a_password){
            res.status(200).json({
                status:"Admin Login Success"
            })
        }else{
            res.status(200).json({
                status:"Check Your Email And Password"
            })
        }
    }else{
        res.status(200).json({
            status:"Check Your Email And Password"
        })
    }
}

exports.a_register = async (req,res) =>{
    var data = await adminModel.create(req.body);

    res.status(200).json({
        status:"Admin Register",
        data
    })
}

exports.view_user = async (req,res) =>{
    var total_user = await userModel.find().count();
    var data = await userModel.find();

    res.status(200).json({
        status:"View All User",
        total_user,
        data
    })
}

exports.single_user = async (req,res) =>{
    var id = req.params.id;
    var data = await userModel.findById(id);

    res.status(200).json({
        status:"View Single User",
        data
    })
}

exports.update_user = async (req,res) =>{
    var id = req.params.id;
    var data = await userModel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"Update Single User",
        data
    })
}

exports.manage_user = async (req,res) =>{
    var id = req.params.id;
    var data = await userModel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"Manage Single User",
        data
    })
}

exports.add_task = async (req,res) =>{
    // var uid = await storage.getItem('id');
    var data = await taskModel.create(req.body);

    // if(data.user_id==uid){
        // var task = await storage.setItem('task',data.task_name)
        
        res.status(200).json({
            status:"One Task Added",
            data
        })
    // }
}

exports.view_task = async (req,res) =>{
    var data = await taskModel.select();

    res.status(200).json({
        status:"View All Task",
        data
    })
}

exports.view_single_task = async (req,res) =>{
    var id = req.params.id;
    var data = await taskModel.findById(id);

    res.status(200).json({
        status:"View Single Task",
        data
    })
}

exports.delete_task = async (req,res) =>{
    var id = req.params.id;
    var data = await taskModel.findByIdAndDelete(id);

    res.status(200).json({
        status:"Delete One Task",
        data
    })
}

exports.update_task = async (req,res) =>{
    var id = req.params.id;
    var data = await taskModel.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"Update One Task",
        data
    })        
}

exports.manage_task = async (req,res) =>{
    var id = req.params.id;
    var data = await taskModel.findByIdAndUpdate(id,req.body.user_id);

    res.status(200).json({
        status:"Manage One Task",
        data
    })        
}