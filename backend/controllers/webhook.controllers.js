import User from "../models/user.model.js";
import { Webhook } from "svix";

export const clerkWebHook = async (req, res) => {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Webhook secret needed!");
  }

  const payload = req.body;
  const headers = req.headers;

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(payload, headers);
  } catch (err) {
    return res.status(400).json({
      message: "Webhook verification failed!",
    });
  }
  console.log(evt.data);

  if (evt.type === "user.created" || evt.type === "user.updated") {
    try {
      const { id, username, email_addresses, image_url, first_name, last_name } = evt.data;

      await User.findOneAndUpdate(
        { clerkUserId: id },
        {
          clerkUserId: id,
          username: username || email_addresses[0]?.email_address.split("@")[0],
          email: email_addresses[0]?.email_address,
          profileImage: image_url,
          fullName: `${first_name || ""} ${last_name || ""}`.trim(),
        },
        { upsert: true, new: true }
      );

      return res.status(200).json({ message: "User created/updated successfully" });
    } catch (error) {
      console.error("Error saving user:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  if (evt.type === "user.deleted") {
    try {
      await User.findOneAndDelete({ clerkUserId: evt.data.id });
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(200).json({ message: "Webhook received, but no action taken" });
};
