const separador = require("./sep")
const Alunos = require("../models/Alunos")

class Factory {
    constructor(){
        this.alunos = []
    }

    adicionarAluno(nome, turma, matricula, registro){ 
        if(nome || turma || matricula || registro){
            this.alunos.push(new Alunos(nome, turma, matricula, registro))
            console.log("Aluno adicionado com sucesso!")
            separador()
        }
    }

    pesquisarAluno(pesquisa){
        return this.alunos.find(aluno => pesquisa.toLowerCase() === aluno.nome.toLowerCase() || 
        pesquisa === aluno.matricula)
    }

    editarAluno(aluno, novoRegistro){
        if(aluno){
            separador()
            aluno.editarRegistro(novoRegistro)
            console.log("Registro editado com sucesso!")
            separador()
        } else{
            separador()
            console.log("aluno não encontrado")
        }
    }
}

module.exports = Factory