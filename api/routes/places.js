const express = require('express');
const Place = require('../models/Place');
let router = express.Router();
const placesController = require('../controllers/PlacesController');

router.route('/')
 .get(placesController.index)
 .post(placesController.create)

 router.route('/:id')
   .get(placesController.show)

  .put(placesController.update)
    //   Place.findById(req.params.id)
    //   .then(doc=>{
    //     doc.title = req.body.title;
    //     doc.description = req.body.description;
    //
    //     doc.save();
    //   })
    //Búsqueda y valores a asignar =>>>
 .delete(placesController.destroy)

 //CRUD 'operaciones usadas' = {
 // create,
 //read,
 //update,
 //delete  
 //};

 module.exports = router;