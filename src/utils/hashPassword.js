const bcrypt = require("bcrypt");

const makeHash = async () => {
  const newPassword = "Password@123"; // Or whatever you want
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPassword, salt);

  console.log(`Your new password is: ${newPassword}`);
  console.log(`Your new hash is: ${hash}`);
};

makeHash();
