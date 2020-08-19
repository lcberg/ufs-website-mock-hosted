module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/ufs-website-mock-hosted/'
      : '/'
  }