const express = require('express');
const router = express.Router();
const Vigilante = require('../models/vigilantes');


//get list of vigilantes
router.get('/vigilantes', (req, res) => {
    Vigilante.find({})
    .then((vigilantes) => {
        res.send(vigilantes);
    })
    .catch((err) => {
        console.log(err);
    });

    // Vigilante.collection.geoNear(
    //     {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance: 100000, spherical: true}
    // )
    // .then((vigilantes) => {
    //     res.send(vigilantes);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
});

//add new vigilante the database
router.post('/vigilantes', (req, res) => {
    Vigilante.create(req.body)
    .then((vigilante) => {
        res.send(vigilante);
    })
    .catch((err) => {
        console.log(err);
    });
});

//update vigilante data to the database
router.put('/vigilantes/:id', (req, res) => {
    const id = req.params.id;

    Vigilante.findByIdAndUpdate(id, req.body)
    .then(() => {
        Vigilante.findOne({id})
        .then((vigilante) => {
            res.send(vigilante);
        })   
    })
    .catch((err) => {
        console.log(err);
    });
});

//delete vigilante record on the database
router.delete('/vigilantes/:id', (req, res) => {
    const id = req.params.id;

    Vigilante.findByIdAndDelete(id)
    .then((vigilante) => {
        res.send(vigilante);
    })
    .catch((err) => {
        console.log(err)
    });
});

module.exports = router;