const prompt = require('prompt-sync')();

console.log("Olá, seja bem vindo(a) ao livro de registros")

const alunos = []

class Alunos {
    #matricula
    constructor(nome, turma, matricula, data, registro){
    this.nome = nome
    this.turma = turma
    this.#matricula = matricula
    this.data = new Date()
    this.registro = registro
}

visualizarAlunos(){
    console.log(`Nome: ${this.nome}`)
    console.log(`Turma: ${this.turma}`)
    console.log(`Matricula: ${this.#matricula}`)
    console.log(`Dia do acontecido: ${String(this.data.getDate()).padStart(2, 0)}/${String(this.data.getMonth() + 1).padStart(2, 0)}/${String(this.data.getFullYear())}`);
    console.log(`Registro: ${this.registro}`)
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
    do{
        nome = prompt("Nome do aluno: ")
        if(nome === ""){
            console.log("Insira o nome do aluno")
        }
    }while(nome === "")
    do{ 
        turma = prompt("Turma: ")
        if(turma === ""){
            console.log("Insira a turma do aluno")
        }
    }while(turma === "")
    let matricula = prompt("Matrícula: ")
    let registro = prompt("Registro: ")

    let novoAluno = new Alunos(nome, turma, matricula, registro)
    alunos.push(novoAluno)
    console.log("Aluno adicionado com sucesso!")
}

function pesquisarAluno(){
    const pesquisa = prompt("Qual o nome ou matrícula do aluno? ")
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
        console.log("aluno não encontrado")
    }
}

function editarAluno(){
    const aluno = pesquisarAluno()

    if(aluno){
        const novoRegistro = prompt("digite um novo registro: ")
        aluno.editarRegistro(novoRegistro)
        console.log("Registro editado com sucesso!")
    } else{
        console.log("aluno não encontrado")
    }
}

function menuProfessor() {
    let opcao

    do {
        console.log("===== LIVRO DE REGISTROS =====")
        console.log("1 - Adicionar aluno")
        console.log("2 - Visualizar aluno")
        console.log("3 - Editar registro")
        console.log("4 - Sair")

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