module.exports = function(babel) {
  const t = babel.types;
  return {
    visitor: {
      DebuggerStatement: function(path) {
        path.remove();
      }
    }
  };
};
