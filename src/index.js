const prompt = require('prompt-sync')();
const Factory = require("./services/Factory")
const separador = require("./services/sep")

const fac = new Factory()
console.clear()
console.log("Olá, seja bem vindo(a) ao livro de registros\n")

function menuProfessor() {
    let opcao

    do {
        console.log("===== LIVRO DE REGISTROS =====\n")
        console.log("1 - Adicionar aluno")
        console.log("2 - Visualizar aluno")
        console.log("3 - Editar registro")
        console.log("4 - Sair")
        console.log("\n==============================\n")
        opcao = prompt("Escolha uma opção: ")

        if (opcao === "1") {
            console.clear()
            let nome
            let turma
            let matricula
            let registro

            do{
                separador()
                nome = prompt("Nome do aluno: ")
                if(nome === ""){
                    sep()
                    console.log("Insira o nome do aluno")
                }
                
            }while(nome === "")
            
            do{ 
                separador()
                turma = prompt("Turma: ")
                if(turma === ""){
                    sep()
                    console.log("Insira a turma do aluno")
                }
            }while(turma === "")

            do{
                separador()
                matricula = prompt("Matrícula: ")
                if(matricula == ""){
                    sep()
                    console.log("Insira a matrícula do aluno")
                }
            }while(matricula === "")

            do{
                separador()
                registro = prompt("Registro: ")
                if(registro == ""){
                    sep()
                    console.log("Insira o registro do aluno")
                }
            }while(registro === "")
            console.clear()
            fac.adicionarAluno(nome, turma, matricula, registro)
        } 
        else if (opcao === "2") {
            console.clear()
            separador()
            let pesquisa = prompt("Qual o nome ou matrícula do aluno? ")
            separador()
            console.clear()
            console.log(fac.pesquisarAluno(pesquisa))
        } 
        else if (opcao === "3") {
            console.clear()
            separador()
            let pesquisa = prompt("qual o nome ou matricula do aluno: ")
            const alunoPesquisado = fac.pesquisarAluno(pesquisa)
            let novoRegistro = prompt("digite um novo registro: ")
            console.clear()
            fac.editarAluno(alunoPesquisado, novoRegistro)
        } 
        else if (opcao === "4") {
            console.log("Saindo do sistema...")
        } 
        else {
            console.log("Opção inválida!")
        }

    } while (opcao !== "4")
}

menuProfessor()