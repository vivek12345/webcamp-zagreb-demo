module.exports = function(babel) {
  const t = babel.types;
  return {
    visitor: {
      CallExpression: function(path) {
        if (path.node.callee.name === 'alert') {
          const args = path.node.arguments;
          path.replaceWith(
            t.callExpression(
              t.memberExpression(t.identifier('console'), t.identifier('warn')),
              args
            )
          );
        }
      }
    }
  };
};
