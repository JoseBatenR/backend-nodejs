const boom = require('@hapi/boom');
const { config } = require("../../config/config");

function checkApiKey(request, response, next) {
  const apiKey = request.headers['api'];

  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkAdminRole(request, response, next) {
  const user = request.user;
  if (user.role === 'admin') {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkRoles(...roles) {
  return (request, response, next) => {
    const user = request.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized());
    }
  }
}

module.exports = { checkApiKey, checkAdminRole,checkRoles }
