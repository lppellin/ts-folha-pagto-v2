import exp from "constants"
import { randomUUID } from "crypto"

class Funcionario {
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

    calcularInss() {
        let salarioBruto = this.calcularSalarioMensal()
        let inss = 0

        if (salarioBruto > 4000.04) {
            inss = salarioBruto * 14 / 100
        } else if (salarioBruto > 2666.69) {
            inss = salarioBruto * 12 / 100
        } else if (salarioBruto > 1412.01) {
            inss = salarioBruto * 9 / 100
        } else {
            inss = salarioBruto * 7.5 / 100
        }

        if (inss > 908.85) {
            inss = 908.85
        }

        return inss
    }

}
export default Funcionario