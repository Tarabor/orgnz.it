// Development specific configuration
// ==================================
module.exports = {
  // Firebase connection options
  firebase: {
    databaseURL: 'https://povertyapp.firebaseio.com',
    serviceAccount: 'server/account/account.json',
    serviceAccountTest: 'server/account/accountTest.json'
  },
  
  mailProvider: {
    mailAccount: 'account/mailAccount.json'
  },

  loggerLevel: 'debug'
};
