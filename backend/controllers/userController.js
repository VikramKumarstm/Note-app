import User from '../models/userSchema.js'

export const registerUser = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        // 1. Validate input
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Every field is required"
            });
        }

        // 2. Check if user exists
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        // 3. Create user
        const newUser = await User.create({
            username,
            email,
            password
        });

        // never send password in response
        newUser.password = undefined;

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: newUser
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
        
    }
} 