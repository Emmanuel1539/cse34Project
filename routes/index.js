const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    // swagger.tags-['Hello People']
    res.send('Hello my friends there!!!');
});

router.use('/users', require('./users'));

module.exports = router;