// ./image-loader.js
module.exports = function (src, width, quality) {
    // For static export, return the original src path
    // Add basePath if you're deploying to a subpath
    const basePath = process.env.NODE_ENV === 'production' ? '/profile' : '';
    return `${src}`;
  };