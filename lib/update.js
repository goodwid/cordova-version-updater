module.exports = {
  patch: v => {
    let version = v.split('.')
    version[2]++
    return version.join('.')
  },
  minor: v => {
    let version = v.split('.')
    version[1]++
    return version.join('.')
  },
  major: v => {
    let version = v.split('.')
    version[0]++
    return version.join('.')
  }
};
