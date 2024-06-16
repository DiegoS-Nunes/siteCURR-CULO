import express from 'express'

const server = express();
const PORT = 3000;

server.get('/', async (req, res) => {
    return res.send('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});