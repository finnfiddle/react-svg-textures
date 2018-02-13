module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSvgTextures',
      externals: {
        react: 'React'
      }
    }
  }
}
