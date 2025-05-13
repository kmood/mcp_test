import { join } from 'path';
import { load } from 'js-yaml';
import { readFileSync } from 'fs';
const configFileNameObj = {
  dev: 'dev',
  test: 'test',
  prod: 'prod',
};

const env = process.env.NODE_ENV || 'dev';
const configPath = `./${configFileNameObj[env]}.yml`;

export default () => {
  return load(
    // readFileSync(join(__dirname, `./${configFileNameObj[env]}.yml`), 'utf8'),
    readFileSync(join(__dirname, configPath), 'utf8'),
  ) as Record<string, any>;
};
