module.exports = {

  proxyEnable: true,


  redis: {
      host: process.env.REDIS_PORT_6379_TCP_ADDR,
      port: process.env.REDIS_PORT_6379_TCP_PORT,
      auth: process.env.REDIS_PASSWORD
  },

  proxy: process.env.PROXY

}
