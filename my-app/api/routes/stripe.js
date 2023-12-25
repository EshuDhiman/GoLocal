const router = require("express").Router();
const KEY =
  "sk_test_51MwItuSF5CB8v0XVGZSjVxe9o46pt2IYMfEI3UTRCDAyDXs4SUINNZ8bVL7mxxAkaPUUEjbvYgKGl7Dp1jlRtsu40024EPXTWC";
const stripe = require("stripe")(KEY);

router.post("/payment", async (req, res) => {
  try {
    // Create a customer and attach the source to it
    const customer = await stripe.customers.create({
      source: req.body.tokenId,
    });

    // Create the payment intent using the customer's default payment method
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      customer: customer.id,
      confirm: true,
    });

    res.status(200).json(paymentIntent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

