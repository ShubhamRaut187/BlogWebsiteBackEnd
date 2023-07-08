const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://rautshubham4554:Shubham123@cluster0.oku2dyt.mongodb.net/evaluation");

module.exports = {
    connection
}