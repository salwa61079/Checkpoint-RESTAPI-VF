const User = require("../models/User");


//find all users
exports.findAllUsers = async (req,res ) => {
    try {
      const allUsers = await  User.find().sort([['fullName', 'ascending']]);
      res.status(200).send({message: "all users: ", allUsers});   
  } 
  catch (err) {
      res.status(500).send(err);
      console.log(err)
  }
  };
  
  
  //create user
 exports.createUser =(req,res) => {
    try {   
      const newUser = new User(req.body);
      newUser.save();
      res.status(200).send({
          message: "user added successfully",
          newUser,
      });
  } catch (err) {
      res.status(500).send(err);
  }
  }
  
  //edit  user by id
    exports.editById = async (req, res) => {
      try {
        const editUser = await User.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        );
        res.status(200).send({
            message: "user is edited successfully: "});   
    } 
    catch (err) {
        res.status(500).send(err);
    }
    };
    
    //remove user by id
    exports.removeUserById =async (req, res) => {
      try {
        const deleteUser = await User.deleteOne({_id: req.params.id})       
        res.status(200).send({
            message: "user is deleted successfully: ",deleteUser});   
    } 
    catch (err) {
        res.status(500).send(err);
    }
    };
    