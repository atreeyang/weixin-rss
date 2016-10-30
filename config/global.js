module.exports = {

  proxyEnable: false,


  redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      autu: process.env.REDIS_AUTH,
  },

  proxy: 'http://114.36.105.161:8088'

}
