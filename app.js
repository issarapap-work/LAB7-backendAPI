const express = require('express');
const cors = require('cors');
const { userProfile } = require('./db');
const app = express();

app.use(cors()); // เพิ่มการใช้งาน CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user-register', async (req, res) => {
    try {
        const { userName, password, firstName, lastName } = req.body;
        await userProfile.create({
            username: userName,
            password: password,
            firstname: firstName,
            lastname: lastName
        });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Start server on port 3000');
});
