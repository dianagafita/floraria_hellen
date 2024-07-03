// pages/api/auth.js

import { verifyAuth } from "@/lib/auth"; // Adjust the import path as per your project structure

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const result = await verifyAuth();

    // Return the result as JSON response
    res.status(200).json(result);
  } catch (error) {
    console.error("Error verifying authentication:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
