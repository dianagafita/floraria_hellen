// // import Stripe from "stripe";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // export async function POST(req, res) {
// //   try {
// //     const { amount } = await req.json();
// //     const paymentIntent = await stripe.paymentIntents.create({
// //       amount: amount,
// //       currency: "ron",
// //       automatic_payment_methods: { enabled: true },
// //     });

// //     res.status(200).json({ clientSecret: paymentIntent.client_secret });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // }
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export function convertToSubcurrency(amount, factor) {
//   return Math.round(amount * factor);
// }

// export async function POST(req, res) {
//   try {
//     const { amount } = await req.json();

//     if (!amount || isNaN(amount)) {
//       throw new Error("Invalid amount provided.");
//     }

//     const amountInMinorUnits = convertToSubcurrency(parseFloat(amount), 100); // Convert amount to integer in bani

//     if (amountInMinorUnits < 200) {
//       throw new Error("Amount must be at least 2.00 RON.");
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amountInMinorUnits,
//       currency: "ron",
//       automatic_payment_methods: { enabled: true },
//     });

//     res.status(200).json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error("Error creating payment intent:", error.message); // Log the error message
//     res.status(500).json({ error: error.message });
//   }
// }
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export function convertToSubcurrency(amount, factor) {
  return Math.round(amount * factor);
}

export async function POST(req) {
  try {
    const { amount } = await req.json();

    if (!amount || isNaN(amount)) {
      throw new Error("Invalid amount provided.");
    }

    const amountInMinorUnits = convertToSubcurrency(parseFloat(amount), 100); // Convert amount to integer in bani

    if (amountInMinorUnits < 200) {
      throw new Error("Amount must be at least 2.00 RON.");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInMinorUnits,
      currency: "ron",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating payment intent:", error.message); // Log the error message
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
