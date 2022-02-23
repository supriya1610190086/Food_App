const mongoose = require("mongoose");
var schema = mongoose.Schema;
const employeeSchema = new schema({
    email:{type: String,
        required: true,
        },
    username : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const Register = new mongoose.model("register", employeeSchema);
module.exports = Register;