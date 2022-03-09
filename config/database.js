const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    mongoose.connect('mongodb+srv://admin2:admin123456@fiap-tecnico.dsp0j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    //conexão local
    //mongoose.connect('mongodb://localhost/fiap')
} 
module.exports = conexao
