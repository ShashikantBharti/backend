import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // File uploaded successfully
    console.log(`File is uploaded on Cloudinary. ${response.url}`);
    return response;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error.message);

    // Handle file deletion safely after failed upload
    try {
      await fs.promises.unlink(localFilePath);
      console.log(`Local file ${localFilePath} deleted after failed upload.`);
    } catch (unlinkError) {
      console.error(`Failed to delete local file: ${unlinkError.message}`);
    }
    return null;
  }
};
