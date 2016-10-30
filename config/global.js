module.exports = {


  proxyEnable: false,

  redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
  },

  proxy: 'http://114.36.105.161:8088'

}
