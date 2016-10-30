module.exports = {

  proxyEnable: false,


  redis: {
      host: process.env.REDIS_PORT_6379_TCP_ADDR,
      port: process.env.REDIS_PORT_6379_TCP_PORT,
      auth: process.env.REDIS_PASSWORD
  },

  proxy: 'http://114.36.105.161:8088'

}
