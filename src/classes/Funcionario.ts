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


    registrarHoras(numHoras: number): void {
        this.horasTrabalhadas.push(numHoras)
    }

    calcularSalarioMensal() {
        const totalHoras = this.horasTrabalhadas.reduce((soma, horas) => soma + horas, 0);    
        return totalHoras * this.taxaHoraria;  
    }



}