import { randomUUID } from "crypto"

export default class Funcionario {
    id: string
    nome: string
    cargo: string
    taxaHoraria: number
    horasTrabalhadas: number[]


    constructor(nomeP: string, cargoP: string, taxaHorariaP: number) {
        this.id = randomUUID().substring(0, 5)
        this.nome = nomeP
        this.cargo = cargoP
        this.taxaHoraria = taxaHorariaP
        this.horasTrabalhadas = []
    }


    registrarHoras(idFuncionario: string, numHoras: number) {
        if (this.id == idFuncionario) {
            this.horasTrabalhadas.push(numHoras)
            return
        }
    }

    calcularSalarioMensal() {
        let totalHoras = 0
        this.horasTrabalhadas.map(hora => {
            totalHoras += hora
        })
        return totalHoras * this.taxaHoraria
    }



}