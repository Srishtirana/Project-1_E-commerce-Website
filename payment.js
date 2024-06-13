const express = require('express');
const stripe = require('stripe')('your-secret-key');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/charge', async (req, res) => {
  try {
    const { token } = req.body;
    const charge = await stripe.charges.create({
      amount: 1000, // Amount in cents
      currency: 'usd',
      source: token,
      description: 'Real Estate Purchase'
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
