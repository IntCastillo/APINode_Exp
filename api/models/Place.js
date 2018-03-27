const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const uploader = require('./uploader');

//Generar un esquema

let placeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,  
    },
     description: String,
     acceptsCreditCard: {
         type: Boolean,
         default: false
     },
     coverImage: String,
     avatarImage: String,
     openHour: Number,
     closeHour: Number
});

placeSchema.methods.updateImage = function(path, imageType){
    //1ro. Subir imagen
    //2do. Guardar el lugar
     return uploader(path)
     .then(secure_url => this.saveImageUrl(secure_url,imageType));
}

placeSchema.methods.saveImageUrl = function(secureUrl, imageType){
  this[imageType +'Image'] = secureUrl;
  return this.save();
}

placeSchema.plugin(mongoosePaginate);

let Place = mongoose.model('Place', placeSchema);

module.exports = Place;