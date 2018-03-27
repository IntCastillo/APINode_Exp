const Place = require('../models/Place');

function find(req,res,next){
    Place.findById(req.params.id)
    .then(place=>{
    req.place = place;
    next();
    }).catch(err=>{
    next(err);    
    });
}
function index(req,res){
    //Todos los lugares
    Place.paginate({},{ page: req.query.page || 1, limit:9, sort: {'_id': -1} })
    .then(docs=>{
    res.json(docs);
    }).catch(err=>{
    console.log(err);
    res.json(err);
    })
}
function create(req,res){
    //Crear nuevos lugares
    Place.create({
        title: req.body.title,
        description: req.body.description,
        acceptsCreditCard: req.body.acceptsCreditCard,
        openHour: req.body.openHour,
        closeHour: req.body.closeHour
     }).then(doc=>{
       res.json(doc)
     }).catch(err=>{
       console.log(err);
       res.json(err);
     });
}
function show(req,res){
    //Busqueda individual
    res.json(req.place);
    //Otra opción:
    //Place.findOne({}) => Place.findById({}) 
}
function update(req,res){
    //Actualizar un recurso
//   let attributes = ['title','description','acceptsCreditCard','openHour','closeHour'];
//   let placeParams = {};
//   attributes.forEach(attr=>{
//    if(Object.prototype.hasOwnProperty.call(req.body,attr))
//   placeParams[attr]= req.body[attr];
//     })
    req.place = Object.assign(req.place,req.body);
    req.place.save()
  //Place.update => Place.findOneAndUpdate
  //Place.findByIdAndUpdate(req.params.id,placeParams,{new: true})
  // Place.findOneAndUpdate({'_id': req.params.id},placeParams,{new: true})
    .then(doc=>{      //Up=> Criterios de búsqueda, campos a actualizar!
    res.json(doc);         
    }).catch(err=>{
    console.log(err);
    res.json(err);
    });
}
function destroy(req,res){
    //Eliminar recursos
    req.place.remove()
    .then(doc=>{
    res.json({})
    }).catch(err=>{
    console.log(err);
    res.json(err);
        })
}

module.exports = {index,show,create,destroy,update,find};