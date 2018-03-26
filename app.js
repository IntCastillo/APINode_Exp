const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: false}))

const places = [
  {
     'title': 'Oficina retórica',
     'description': 'Descripción óptima',
     'address': '0123091203' 
  },
  {
    'title': 'Oficina retórica',
    'description': 'Descripción óptima',
    'address': '0123091203'
  },
  {
    'title': 'Oficina retórica',
    'description': 'Descripción óptima',
    'address': '0123091203'
  },
  {
    'title': 'Oficina retórica',
    'description': 'Descripción óptima',
    'address': '0123091203'
  },

];
app.get('/', (req,res)=>{
    res.json(places);
});

app.post('/',(req,res)=>{
   res.json(req.body.nombre);
});

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Ready for new orders!')
});
