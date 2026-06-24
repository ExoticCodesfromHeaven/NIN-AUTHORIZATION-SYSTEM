const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const User = require("../models/User");
const getUserByNIN = require("../services/ninService");

const register = async (req, res) => {
  try {
    const { nin, password } = req.body;

    if (!nin || !password) {
      return res.status(400).json({
        message: "NIN and password are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ nin });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Fetch NIN details
    const ninData = getUserByNIN(nin);

    if (!ninData) {
      return res.status(404).json({
        message: "NIN not found",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = await User.create({
      nin,
      password: hashedPassword,
      ...ninData,
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        nin: user.nin,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const login = async (req, res) => {
    try {
        const { nin, password } = req.body;

        if (!nin || !password) {
            return res.status(400).json({
                message: "NIN and password are required"
            });
        }

        const user = await User.findOne({ nin });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

const profile = async (req, res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

};

module.exports = {
  register,
  login,
  profile
};