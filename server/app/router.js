const { Router } = require('express');

const router = Router();


router.get('/', (req, res)=>{
    res.send("Hello World !");
});

router.get('/madou', (req,res)=>{
    res.send("Hello Madou !");
});

module.exports = router;