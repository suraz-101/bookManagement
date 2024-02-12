const userModel = require("./user.model");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");
const { mail } = require("../../services/mailer");
const { generateToken, otpCode } = require("../../utils/jwtTokenManager");

const create = async (payload) => {
  // receive data from client as payload
  const { password } = payload;
  // if payload is empty throw an error ""
  const hash = await hashPassword(password);
  payload.password = await hash;

  // else hash the password using bcrypt
  // add hashed password in payload
  // create the data
  const user = await userModel.create(payload);
  // if data isnot registered then throw error "registration failed"
  if (!user) throw new Error("Registration failed");
  const { email } = payload;

  //send the mail to the user with successfull message
  const res = await mail(
    email,
    "Registration Status",
    "Registration Completed, CONGRATULATIONS!!"
  );

  if (!res) throw new Error("Registration Failed");
  return "Registration completed, Congratualations";
};

const getAllUsers = () => {
  return userModel.find();
};

const updateUser = (_id, payload) => {
  return userModel.updateOne({ _id }, payload);
};

const deleteUser = (_id) => {
  return userModel.deleteOne({ _id });
};

const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) throw new Error("email and password are mandatory");
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) throw new Error("email does not exists");
  const { password: hash } = await user;
  const passwordComparision = await comparePassword(password, hash);
  console.log(passwordComparision);
  if (!passwordComparision) throw new Error("Password is incorrect");
  const tokenPayload = {
    name: user.name,
    email: user.email,
    roles: user.roles,
  };
  return generateToken(tokenPayload);
};

const generateOTP = async (payload) => {
  const { email } = payload;
  console.log(email);
  if (!email) throw new Error("Email is mandatory");
  const user = await userModel.findOne({ email });
  if (!user)
    throw new Error(
      "email does not matched , Please enter correct email address"
    );
  const otp = otpCode();
  const updatedUser = await userModel.updateOne({ email }, { otp });
  if (!updatedUser) throw new Error("failed");
  const mailling = await mail(email, "OTP CODE", `The otp code is : ${otp}`);
  if (!mailling) throw new Error("failled");
  return "mail sent";
};

const otpVerification = async (payload) => {
  const { email, otp, newPassword } = payload;
  if (!email || !otp || !newPassword)
    throw new Error(
      "please provide all the required informations like email, otp and new password"
    );
  const user = await userModel.findOne({ email });

  if (!user) throw new Error("user doesnot exists");
  const hashedPass = await hashPassword(newPassword);
  if (otp !== user.otp) throw new Error("OTP invalid");
  const update = await userModel.updateOne(
    { email },
    { otp: "", password: hashedPass }
  );
  if (!update) throw new Error("password change unsuccessfull");
  return "Password changed";
};

module.exports = {
  create,
  getAllUsers,
  updateUser,
  deleteUser,
  loginUser,
  generateOTP,
  otpVerification,
};
