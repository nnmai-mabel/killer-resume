import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Use the CORS middleware
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from api');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
