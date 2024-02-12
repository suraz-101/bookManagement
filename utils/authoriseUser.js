const { verifyToken } = require("./jwtTokenManager");
const checkRole = (sysRole) => {
  return (req, res, next) => {
    const result = verifyToken(req.headers.token);
    const comparision = sysRole.some((role) =>
      result.data.roles.includes(role)
    );
    if (!comparision) throw new Error("Permision Denied!!");
    next();
  };
};

checkRole(["user"]);
module.exports = { checkRole };
