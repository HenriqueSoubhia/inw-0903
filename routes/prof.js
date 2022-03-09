const profs = require('../models/profs')

module.exports = (app)=>{
    //abrir o formulario professor.ejs
    //com a requisição /professor
    app.get('/professor',(req,res)=>{
        res.render('professor.ejs')
    })

    app.post('/professor',(req,res)=>{
        var infos = req.body

        var conexao = require('../models/profs')

        var documento = new profs({
            nome:infos.nome,
            disciplina:infos.disciplina,
            turma:infos.turma,
            email:infos.email
        }).save()
        .then((result)=>{
            res.redirect('/professor')
        })
        .catch((err)=>{
            console.log(err)
        })
    })


}