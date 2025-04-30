const User = require('../Models/UserModel');
const { createSecretToken } = require('../util/SecretToken');
const bcrypt = require('bcryptjs');

module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already signed up" });
        }
        const user = await User.create({
            email,
            password,
            username
        });

        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            httpOnly: true,        
            secure: true,           
            sameSite: 'none',       
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(201).json({ message: "User signed in successfully!", success: true, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during signup." }); 
    }
};

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields required!" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email not registered yet!" });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(400).json({ message: "Password didn’t match" });
        }
        const token = createSecretToken(user._id);
        res.cookie('token', token, {
            httpOnly: true,         
            secure: true,          
            sameSite: 'none',       
            maxAge: 24 * 60 * 60 * 1000 
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "An error occurred during login." });
    }
};