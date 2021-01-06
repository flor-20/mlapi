const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    const query = req.query.q;

    axios({
        method: 'GET',
        url:`https://api.mercadolibre.com//sites/MLA/search?q=${query}`
    })
    .then(answer =>{
        res.send(answer.data.results)
    })
    .catch(error => console.log(error))
})

module.exports = router;