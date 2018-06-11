const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  //   check Validator:
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be over 2 chars and under 30 chars";
  }
  return {
    errors,
    isValid: isEmpty
  };
};
