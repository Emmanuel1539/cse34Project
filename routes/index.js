const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello my friends there, my new friends');
});


module.exports = router;