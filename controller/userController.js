const taskModel = require("../model/taskModel");
const userModel = require("../model/userModel")

const storage = require('node-persist');
storage.init( /* options ... */);

exports.u_login = async (req,res)=>{
    var data = await userModel.find({"u_email":req.body.u_email});
    
    if(data.length>0){
        if(data[0].u_password==req.body.u_password){

            var id = await storage.setItem('id',data[0].id);
            
            // var task = await userModel.findByIdAndUpdate(data[0].id,{u_task:taskname})

            res.status(200).json({
                status:"User Login Success"
            })
        }else{
            res.status(200).json({
                status:"Check Your Email And Password"
            })
        }
    }else{
        res.status(200).json({
            status:"Check Your Email And Passwordddd"
        })
    }
}

exports.u_register = async (req,res)=>{
    var data = await userModel.create(req.body);

    res.status(200).json({
        status:"User Register",
        data
    })
}

exports.u_tasks = async (req,res)=>{
    var id = await storage.getItem('id');

    var data = await taskModel.find({user_id:id});

    res.status(200).json({
        status:"User Task",
        data
    })
}