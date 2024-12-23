import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

class Config {
    constructor() {
        this.config = null;
        this.loadConfig();
    }

    loadConfig() {
        //this.config = require('./config.json');
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const configPath = path.resolve(__dirname, 'config.json');
        this.config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    }

    getConfig() {
        return this.config;
    }
}

export default Config;