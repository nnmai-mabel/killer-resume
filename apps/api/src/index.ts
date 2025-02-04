import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Use the CORS middleware
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from killer-resume-api123');
});

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello from apps/api');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
