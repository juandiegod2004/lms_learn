 const express = require('express');
 const {registerUser, loginUser} = require('../../controllers/auth-controller/index');
 const authenticateMidlleware =  require('../../middleware/auth-middleware')
 const router = express.Router();

 router.post('/register', registerUser);
 router.post('/login', loginUser);
 router.get('/check-auth', authenticateMidlleware, (req,res)=>{
    const user = req.user

    res.status(200).json ({
        success: true,
        message: "User is authenticated",
        data: {
            user
        }
    })
 })
 module.exports = router;