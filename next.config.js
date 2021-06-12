module.exports = {
  distDir: 'build',
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  }
}
