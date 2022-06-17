const exclusionList = require('metro-config/src/defaults/exclusionList');//eslint-disable-line

module.exports = {
  resolver: {
    blacklistRE: exclusionList([/#current-cloud-backend\/.*/]),
  },
};
