const config = require('../config/database');
const {Livro} = require('../models');




const LivroController = {
    index: async(req, res) => {
      try{
        let livros = await Livro.findAll()
        res.render('livros', {livros});     
      }catch(err){
        console.log(err);
      }
         
    },

    create:async(req,res)=>{
        res.render('criarLivros');
    },
    store:async(req,res)=>{
       const {titulo, quantidade_paginas, autor, ano_lancamento, estoque} = req.body;
       let livro = await Livro.create({
           titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
       }) 
       console.log(livro);
       res.redirect('/livros');
    },
    edit:async(req, res) => {
        const {id} = req.params;

        let livro = await Livro.findOne({
            where: {id: id}
            
        })
        
        res.render('editarLivros',{livro});
    },
    update:async(req,res)=>{
        const {id} = req.params;

        const {titulo, quantidade_paginas, autor, ano_lancamento,estoque} = req.body;
        let updateLivro = await Livro.update({
            titulo: titulo,
            quantidade_paginas: quantidade_paginas,
            autor: autor,
            ano_lancamento: ano_lancamento,
            estoque: estoque

        },{
            where: {id: id}

        })
        console.log(updateLivro);
        res.redirect('/livros');
    },
    delete:async(req,res)=>{
        const {id} = req.params;
        let deleteLivro = await Livro.destroy({
            where: {id: id}
        })
        console.log(deleteLivro);
        res.redirect('/livros');
    }

}


module.exports = LivroController;
