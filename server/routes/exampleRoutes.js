const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from Mawaddah API!' });
});

router.post('/', (req, res) => {
  const { data } = req.body;
  // Example logic
  res.json({ success: true, received: data });
});

module.exports = router;
