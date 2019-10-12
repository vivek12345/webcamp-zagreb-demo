module.exports = function(babel) {
  const t = babel.types;
  return {
    visitor: {
      ArrowFunctionExpression: function(path) {
        const params = path.node.params;
        const body = path.node.body;
        path.replaceWith(
          t.functionExpression(
            null,
            params,
            t.blockStatement([t.returnStatement(body)])
          )
        );
      }
    }
  };
};
