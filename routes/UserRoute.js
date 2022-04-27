const express = require("express");

const router = express.Router();
//get the functions
const {
    findAllUsers,
    createUser,
    editById,
    removeUserById,
} = require("../controller/UserC");

router.get("/allUser", findAllUsers);
router.post("/addUser", createUser);
router.put("/updateUserById/:id", editById);
router.delete("/removeUser/:id", removeUserById);

module.exports = router;