import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  try {
    const { amount } = await req.json();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "ron",
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
