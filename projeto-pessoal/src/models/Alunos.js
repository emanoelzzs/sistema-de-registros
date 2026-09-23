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

module.exports = Alunos