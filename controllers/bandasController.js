let listaDeBandas = require('../bandas')
let bandasController = {
    index: function(req, res){
    return res.render('listadoBandas', {listaDeBandas})
    },

    id: function(req, res){
    let id = req.params.id 
    let bandasPorId = {}
    for(let i=0; i<listaDeBandas.length; i++){
        if(listaDeBandas[i].id == id){
            bandasPorId = listaDeBandas[i] 
        }
        else {
            console.log("Este id no existe")
        }
    }
    return res.render('detalleBanda', {bandasPorId})
    },

    genero: function(req, res){
    let genero = req.params.genero
    let bandasPorGenero = []
    for(let i=0; i<listaDeBandas.length; i++){
        if(listaDeBandas[i].genero == genero){
            bandasPorGenero.push(listaDeBandas[i])
        }
        else {
            res.send("Este género no existe")
        }
    }
    return res.render('porGenero', {bandasPorGenero})
    },
  
}
module.exports = bandasController