import { Schema } from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
},{ timestamps:true });

export const User = mongoose.model("User", userSchema);


const refreshTokenSchema = new Schema ({
    userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  tokenHash: { 
    type: String, 
    required: true 
  },
  expiresAt: { 
    type: Date, 
    required: true, 
    index: { expires: 0 } // Automatically deletes document when expired
  }
}, { timestamps: true });

export const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchemaSchema);
