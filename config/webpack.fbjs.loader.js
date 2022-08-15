module.exports = function(source) {
  return source.replace(
      /require\((['"])setimmediate(['"])\)/g,
      "require($1setImmediate$2)"
  );
};