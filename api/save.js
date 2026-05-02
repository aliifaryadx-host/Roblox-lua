export default function handler(req, res) {
  if (req.method === 'POST') {
    // Ini buat nangkep kiriman data map dari script Delta lu
    console.log("Data Map Masuk:", req.body);
    return res.status(200).json({ message: 'Mantap bree, data masuk!' });
  }
  res.status(200).send('API Server is Running...');
}

