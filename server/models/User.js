const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        nin: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },

        gender: {
            type: String,
        },

        dob: {
            type: String,
        },

        phone: {
            type: String,
        },

        address: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);