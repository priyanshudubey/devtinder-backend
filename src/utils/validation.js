const validator = require("validator");

const validateSignupData = (req) => {
  const { firstName, lastName, emailId, password, photoURL } = req.body;

  if (!firstName) {
    throw new Error("Please enter the First Name!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Enter a valid email Id");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password!");
  }
  // photoURL is optional; only validate if provided
  if (photoURL && !validator.isURL(photoURL)) {
    throw new Error("Please enter a valid URL");
  }
};

const validateLoginData = (req) => {
  const { emailId, password } = req.body;
  // require at least an email and a password
  if (!emailId || !password) {
    throw new Error("Please enter a valid login credentials");
  }
};

const validateEditProfileData = (req) => {
  const allowedFields = [
    "firstName",
    "lastName",
    "photoURL",
    "gender",
    "age",
    "skills",
    "about",
  ];

  const isEditAllowed = Object.keys(req).every((fields) =>
    allowedFields.includes(fields)
  );
  return isEditAllowed;
};

module.exports = {
  validateSignupData,
  validateLoginData,
  validateEditProfileData,
};
