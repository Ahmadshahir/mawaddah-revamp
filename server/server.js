const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

const exampleRoutes = require('./routes/exampleRoutes');

// Middleware
app.use(express.json());

// API routes
app.use('/api/example', exampleRoutes);

// Serve the React build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Fallback for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
