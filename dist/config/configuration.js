"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
const fs_1 = require("fs");
const configFileNameObj = {
    dev: 'dev',
    test: 'test',
    prod: 'prod',
};
const env = process.env.NODE_ENV || 'dev';
const configPath = `./${configFileNameObj[env]}.yml`;
exports.default = () => {
    return (0, js_yaml_1.load)((0, fs_1.readFileSync)((0, path_1.join)(__dirname, configPath), 'utf8'));
};
//# sourceMappingURL=configuration.js.map