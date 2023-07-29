// Create Web Server 
const express = require('express');
const app = express();

// Create Route
app.get('/comments', (req, res) => {
    // res.send('Hello World');
    res.json([
        {
            id: 1,
            username: 'Bilbo Baggins',
            comment: 'What is this place?'
        },
        {
            id: 2,
            username: 'Gandalf',
            comment: 'This is a comment!'
        }
    ]);
});

// Start Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});