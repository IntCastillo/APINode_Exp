const express = require('express');
const app = express();

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

];
app.get('/', (req,res)=>{
    res.json(places);
});

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Ready for new orders!')
});
