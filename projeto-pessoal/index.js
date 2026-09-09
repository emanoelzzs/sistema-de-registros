const prompt = require('prompt-sync')();

console.log("Olá, seja bem vindo(a) ao livro de registros\n")

const alunos = []

function sep(){
    console.log("\n===============================\n")
}

class Alunos {
    #matricula
    constructor(nome, turma, matricula, registro){
    this.nome = nome
    this.turma = turma
    this.#matricula = matricula
    this.data = new Date()
    this.registro = registro
}

    visualizarAlunos(){
        sep()
        console.log(`Nome: ${this.nome}`)
        console.log(`Turma: ${this.turma}`)
        console.log(`Matricula: ${this.#matricula}`)
        console.log(`Dia do acontecido: ${String(this.data.getDate()).padStart(2, 0)}/${String(this.data.getMonth() + 1).padStart(2, 0)}/${String(this.data.getFullYear())}`)
        console.log(`Registro: ${this.registro}`)
        sep()
    }

    editarRegistro(novoRegistro){
        this.registro = novoRegistro
    }

    get matricula(){
        return this.#matricula
    }
}

function adicionarAluno(){
    let nome
    let turma
    let matricula
    let registro 

    do{
        sep()
        nome = prompt("Nome do aluno: ")
        if(nome === ""){
            sep()
            console.log("Insira o nome do aluno")
        }
    }while(nome === "")
    do{ 
        sep()
        turma = prompt("Turma: ")
        if(turma === ""){
            sep()
            console.log("Insira a turma do aluno")
        }
    }while(turma === "")
    do{
        sep()
        matricula = prompt("Matrícula: ")
        if(matricula == ""){
            sep()
            console.log("Insira a matrícula do aluno")
        }
    }while(matricula === "")
    do{
        sep()
        registro = prompt("Registro: ")
        if(registro == ""){
            sep()
            console.log("Insira o registro do aluno")
        }
    }while(registro === "")

    let novoAluno = new Alunos(nome, turma, matricula, registro)
    alunos.push(novoAluno)
    console.log("Aluno adicionado com sucesso!")
    sep()
}

function pesquisarAluno(){
    sep()
    const pesquisa = prompt("Qual o nome ou matrícula do aluno? ")
    sep()
    const alunoEncontrado = alunos.find(aluno => pesquisa.toLowerCase() === aluno.nome.toLowerCase() || 
    pesquisa === aluno.matricula
)

return alunoEncontrado
}

function visualizarAluno(){
    const aluno = pesquisarAluno()

    if(aluno){
        aluno.visualizarAlunos()
    } else {
        sep()
        console.log("aluno não encontrado")
    }
}

function editarAluno(){
    const aluno = pesquisarAluno()

    if(aluno){
        sep()
        const novoRegistro = prompt("digite um novo registro: ")
        aluno.editarRegistro(novoRegistro)
        console.log("Registro editado com sucesso!")
        sep()
    } else{
        sep()
        console.log("aluno não encontrado")
    }
}

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
            adicionarAluno()
        } 
        else if (opcao === "2") {
            visualizarAluno()
        } 
        else if (opcao === "3") {
            editarAluno()
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
