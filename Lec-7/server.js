const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

let userData = [];
app.get('/adduser', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});
app.post('/adduser', (req, res) => {
    const { name, email, password } = req.body;
    userData.push({ name, email, password });
    console.log(`User Registered: Name - ${name}, Email - ${email}`);
    res.send(`Registration successful, ${name}!`);
});
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
