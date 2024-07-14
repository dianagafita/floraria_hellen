// // pages/api/cart.js
// import { getSession } from "lucia";
// import db from "../../lib/db";

// export default async (req, res) => {
//   const session = await getSession(req, res);
//   if (!session) {
//     return res.status(401).json({ message: "Not authenticated" });
//   }

//   const userId = session.userId;
//   const { cart } = req.body;

//   await db.cart.deleteMany({ where: { userId } });
//   await db.cart.createMany({
//     data: cart.map((item) => ({ ...item, userId })),
//   });

//   res.status(200).json({ message: "Cart updated" });
// };
