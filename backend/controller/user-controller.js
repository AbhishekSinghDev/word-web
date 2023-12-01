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
    const response = await User.findById(userid).populate("blogs");
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
const getSingleUserDetail = async (req, res) => {
  const userid = req.params.id;

  if (!userid) {
    return res.status(400).json({
      success: false,
      message: "User id not provided",
    });
  }

  try {
    const response = await User.findById(userid).populate("blogs");
    if (response) {
      res.status(200).json({
        success: true,
        user: response,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "User not found",
      });
    }
  } catch (err) {
    console.log("Error while fetching single user details");
    console.log(err);
  }
};

export { getUserDetails, getSingleUserDetail };