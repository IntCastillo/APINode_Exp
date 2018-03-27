const express = require('express');
const Place = require('../models/Place');
let router = express.Router();
const placesController = require('../controllers/PlacesController');

  router.route('/')
 .get(placesController.index)
 .post(placesController.create)

  router.route('/:id')
  .get(placesController.find,placesController.show)

  .put(placesController.find,placesController.update)
    //   Place.findById(req.params.id)
    //   .then(doc=>{
    //     doc.title = req.body.title;
    //     doc.description = req.body.description;
    //
    //     doc.save();
    //   })
    //Búsqueda y valores a asignar =>>>
  .delete(placesController.find,placesController.destroy)

 //CRUD 'operaciones usadas' = {
 // create,
 //read,
 //update,
 //delete  
 //};

 module.exports = router;