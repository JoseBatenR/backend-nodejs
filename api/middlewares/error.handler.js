const boom = require('@hapi/boom');
const { ValidationError } = require('sequelize');

function logErrors(error, request, response, next) {
  next(error);

}

function errorHandler(error, request, response, next) {
  response.status(500).json({
    message: error.message,
    stack: error.stack
  });

}

function boomErrorHandler(error, request, response, next) {
  if (error.isBoom) {
    const { output } = error;
    response.status(output.statusCode).json(output.payload);
  } else {
    next(error);
  }

}

const queryErrorHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    response.status(409).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors
    });
  }
  next(error);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, queryErrorHandler };
