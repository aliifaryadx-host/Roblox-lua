export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Data diterima:", req.body);
    return res.status(200).json({ status: 'Data Masuk, Bree!' });
  }
  res.status(200).send('API Ready');
}

