const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Sample Mock Data (Formations & Coaches)
let formations = [
  { id: 1, title: 'Full-Stack Web Dev', instructor: 'Sarah Connor', status: 'Active' },
  { id: 2, title: 'UI/UX Design', instructor: 'Alex Pierce', status: 'Upcoming' }
];

// --- ROUTES ---

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend connected successfully!' });
});

// Get all formations
app.get('/api/formations', (req, res) => {
  res.json(formations);
});

// Add a formation
app.post('/api/formations', (req, res) => {
  const newFormation = { id: Date.now(), ...req.body };
  formations.push(newFormation);
  res.status(201).json(newFormation);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});