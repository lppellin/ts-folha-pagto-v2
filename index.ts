import Funcionario from "./src/classes/Funcionario";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const listaFuncionarios: Funcionario[] = []

function adicionarFuncionario(nome: string, cargo: string, taxaHoraria: number): void {
    const novoFuncionario = new Funcionario(nome, cargo, taxaHoraria)

    listaFuncionarios.push(novoFuncionario)
    console.log(`Funcionário criado com sucesso. ID: ${novoFuncionario.id}`)
}

function exibirLista() {
    console.log("-------- LISTA DE FUNCIONÁRIOS ---------- \n");
    listaFuncionarios.forEach(func => {
        console.log(`ID: ${func.id}, Nome: ${func.nome}, Horas Trabalhadas: ${func.horasTrabalhadas}`);
    });
}

function gerarRelatorioPagamento() {
    console.log("-------- RELATÓRIO DE PAGAMENTOS ---------- \n");

    listaFuncionarios.map((func) => {

        let totalHoras = func.calcularTotalHoras()
        let salarioBruto = func.calcularSalarioMensal()
        let inss = func.calcularInss()

        console.log(`Nome: ${func.nome}`)
        console.log(`Cargo: ${func.cargo}`)
        console.log(`Total de horas trabalhadas: ${totalHoras}`)
        console.log(`Valor do INSS: R$ ${inss.toFixed(2)}`)
        console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`)
        console.log(`Salário líquido: R$ ${(salarioBruto - inss).toFixed(2)}`)
        console.log("---------------- \n")
    })
}

function gerenciarFolhaPagamento() {
    function exibirMenu(): void {
        console.log("\n------- Sistema de Folha de Pagamento -------");
        console.log("1 - Adicionar Funcionário");
        console.log("2 - Registrar Horas Trabalhadas");
        console.log("3 - Exibir lista de funcionários");
        console.log("4 - Exibir Relatório de Pagamento");
        console.log("5 - Sair\n");
    }

    let opcao;

    do {
        exibirMenu();
        opcao = prompt("Digite a opção desejada: ");
        switch (opcao) {
            case "1":
                let nome = prompt("Digite o nome do funcionário: ");
                let cargo = prompt("Digite o cargo do funcionário: ");
                let taxaHoraria = Number(prompt("Digite a taxa horária do funcionário: "));

                adicionarFuncionario(nome, cargo, taxaHoraria);
                break;

            case "2":
                let idFuncionario = prompt("Digite o id do funcionário: ");
                let numHoras = Number(prompt("Digite o número de horas trabalhadas: "));

                let funcionarioExiste = false

                listaFuncionarios.map(func => {
                    if (func.id == idFuncionario) {
                        func.registrarHoras(numHoras);
                        funcionarioExiste = true
                    }
                })

                if (!funcionarioExiste) {
                    console.log(`O funcionário com id ${idFuncionario} não existe`)
                }
                break;

            case "3":
                exibirLista()
                break;

            case "4":
                gerarRelatorioPagamento();
                break;

            case "5":
                console.log("Saindo do sistema...\n");
                break;

            default:
                console.log("Opção inválida!");
        }
    } while (opcao != "5");
}

gerenciarFolhaPagamento();