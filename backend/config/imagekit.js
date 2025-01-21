import ImageKit from "imagekit";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: '.env.local' });

// Verify environment variables
const publicKey = process.env.IMAGEKIT_PUBLIC_KEY_2;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

if (!publicKey || !privateKey || !urlEndpoint) {
    throw new Error('ImageKit configuration missing. Please check .env.local file');
}

const imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint
});

console.log('ImageKit initialized successfully');

export default imagekit;