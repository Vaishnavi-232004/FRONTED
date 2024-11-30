const mongoose=require("mongoose")

const employeeSchema=new mongoose.Schema({
    empId:{
        type:Number,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    empAddress:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Employee",employeeSchema);