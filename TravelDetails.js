const express = require('express')
const router = express.Router()
const Travel = require('../models/travel')
router.get('/',async(req,res) => {
    try{
          const TravelDetails = await Travel.find()
          res.json(TravelDetails)
    }catch(err){
        res.send('Error '+err)
    }
})

router.post('/',async(req,res) => {
    const travel = new Travel({
        name: req.body.name
    })
    try{
const a1 = await travel.save()
res.send(a1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router