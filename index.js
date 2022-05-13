const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello my new node with nice felling World!')
});

const users = [
    { id: 1, name: 'Ahmed Sharif', email: 'ahmed76052786@gmail.com', phone: '01799375493' },
    { id: 2, name: 'Omar Sharif', email: 'omar76052786@gmail.com', phone: '01799375493' },
    { id: 3, name: 'Sabreena', email: 'sabreenabegum@gmail.com', phone: '01799375493' },
    { id: 4, name: 'Saima Begum', email: 'saimabegum@gmail.com', phone: '01799375493' },
    { id: 5, name: 'Khidaja Begum', email: 'khedijabegum@gmail.com', phone: '01799375493' },
    { id: 6, name: 'Safina Begum', email: 'safinabegum@gmail.com', phone: '01799375493' },
    { id: 7, name: 'Joynal Abdin', email: 'joynalabdin@gmail.com', phone: '01799375493' }
]

app.get('/user', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});