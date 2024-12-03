// utils/authUtils.js
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
export const generateAuthToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};
