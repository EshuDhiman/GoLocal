const router = require("express").Router();
//const KEY = "stripe key put yours";
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

