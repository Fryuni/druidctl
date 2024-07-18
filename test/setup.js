import { register } from 'node:module';

process.env.DRUID_BASE_URL = 'http://localhost:8081';
// process.env.DRUIDCTL_CONTENT_TYPE = 'json';

register('ts-node/register', import.meta.url);
register('ts-node/esm', import.meta.url);
