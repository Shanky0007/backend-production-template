import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

console.log('Cloud name:', cloudinary.config().cloud_name);

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        
        console.log("File is uploaded on cloudinary:", response.secure_url);
        fs.unlinkSync(localFilePath);
        return response;
        
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
};

export { uploadOnCloudinary };