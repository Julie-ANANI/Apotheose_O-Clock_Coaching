
const redis = require('redis');

//Configure redis client
const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
});

redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
    console.trace(err);
});

redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});

module.exports = redisClient;