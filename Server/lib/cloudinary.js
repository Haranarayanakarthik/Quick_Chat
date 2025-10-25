import { v2 as cloudinary } from "cloudinary";

// Configure directly from the single CLOUDINARY_URL in your .env
cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

export default cloudinary;
