import jwt from 'jsonwebtoken';

const secretKey = 'admin123'; // Replace this with a secure key in production

// Dummy users for admin, driver, and student
const dummyUsers = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'driver', password: 'driver123', role: 'driver' },
  { id: 3, username: 'student', password: 'student123', role: 'student' },
];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Find user by username
    const user = dummyUsers.find((u) => u.username === username);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, secretKey, { expiresIn: '1h' });

    return res.status(200).json({ token, role: user.role });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}


