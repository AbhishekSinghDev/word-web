import User from "../model/user.js";

const getUserDetails = async (req, res) => {
  const userid = req.userid;
  if (!userid) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized Access",
    });
  }
  try {
    const response = User.findById(userid);
    console.log(response);
    if (response) {
      return res.status(200).json({
        success: true,
        user: response,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    console.log("Error while fetching user details");
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch user details, Internal server error",
    });
  }
};

export { getUserDetails };
