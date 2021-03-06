// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080,

  // Firebase connection options
  firebase: {
    databaseURL: 'https://progettp.firebaseio.com',
    serviceAccount: 'progettp/prod.json'
  },

  loggerLevel: 'info'
};
