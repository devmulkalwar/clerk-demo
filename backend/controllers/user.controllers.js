import User from "../models/user.model.js";

/**
 * @desc Insert additional user data
 * @route POST /api/users/:id
 */
export const insertAdditionalData = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, phoneNumber, bio, socialLinks, preferences, address } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { clerkUserId: id },
      {
        fullName,
        phoneNumber,
        bio,
        socialLinks,
        preferences,
        address,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @desc Get all users
 * @route GET /api/users
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v");
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * @desc Get a user by Clerk ID
 * @route GET /api/users/:id
 */
export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ clerkUserId: id }).select("-__v");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
