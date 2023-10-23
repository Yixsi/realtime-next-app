const dbUrl = process.env.UPSTASH_REDIS_REST_URL;
const authToken = process.env.UPSTASH_REDIS_REST_TOKEN;

type Commands = 'zrange' | 'sismember' | 'smembers' | 'get';
