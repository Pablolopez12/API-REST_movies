const { Router } = require('express')
const router = Router(); 

router.get('/', (req, res) => {
    const data = 
        {
        "title":"Hello World",
    }
    res.json(data)
    });
    
    module.exports = router;