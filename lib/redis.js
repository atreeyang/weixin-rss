var co = require('co');
var config = require('../config/global');
var redisClient = require('redis').createClient(config.redis.port, config.redis.host);
redisClient.auth(config.redis.auth);
redisClient.on("error", function (err) {
    console.log("redis-config:" + config.redis.port + "  " + config.redis.host + " " + config.redis.auth);
    console.log("Error " + err);
});
var wrapper = require('co-redis');
var redisCo = wrapper(redisClient);
module.exports = redisCo;
