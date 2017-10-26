var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render takes 2 args
    // 1. view
    // 2. thing to display
    res.render('index', { title: 'Express Day One!' });
});

router.get('/atl-teams', (req, res) => {
    var atlTeams = [
        'Falcons',
        'United',
        'Hawks',
        'Braves'
    ]
    res.render('teams', { atlTeams: atlTeams });
})

module.exports = router;