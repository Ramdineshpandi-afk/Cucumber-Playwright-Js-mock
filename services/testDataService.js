import fs from 'fs';
import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

class TestDataService {
    getUserData(userType) {
        const filePath = path.resolve(__dirname, '../testdata/users.json'); // Ensure the path is correct
        const data = fs.readFileSync(filePath, 'utf8'); // Read the file content as string
        const parsedData = JSON.parse(data); // Parse the string content to JSON

        if (!parsedData[userType]) {
            throw new Error(`No data found for user: ${userType}`);
        }

        return parsedData[userType]; // Return the data for the specified userType
    }
}

export default new TestDataService();
