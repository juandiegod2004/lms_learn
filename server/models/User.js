const mogoose = require ('mogoose'); 

const UserSchema = new mongoose.Schema({
    userName : String,
    userEmail : String,
    password : String,
    role : String,

    
});

modele.exports = mogoose.model('User', UserSchema);