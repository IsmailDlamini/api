import jwt from "jsonwebtoken";

// LOGIC
export const verifyToken = async (req, res, next) => {
  const headerAvailable = req.headers.authorization;

  if (headerAvailable && headerAvailable.startsWith("Bearer ")) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("incorrect token,  not authorized");
    }
  }
};
