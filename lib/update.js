const MAJOR = 0;
const MINOR = 1;
const PATCH = 2;


function update(position, v, options = { zero: false }) {
  let version = v.split('.');
  version[position]++;
  if(options.zero) {
    if(position === MAJOR) version[MINOR] = version[PATCH] = 0;
    if(position === MINOR) version[PATCH] = 0;
  } 
  return version.join('.');
}

module.exports = {
  patch: (...args) => update(PATCH, ...args),
  minor: (...args) => update(MINOR, ...args),
  major: (...args) => update(MAJOR, ...args),
};
