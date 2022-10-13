const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', (req, res) =>{
    res.send('users')
})

module.exports = router;