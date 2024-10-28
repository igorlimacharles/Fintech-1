// Dados iniciais para receitas e despesas
let receitas = 8200;
let despesas = 4500;
const saldoTotalElement = document.getElementById('saldo-total');

// Função para atualizar o saldo
function atualizarSaldo() {
    const saldoTotal = receitas - despesas;
    saldoTotalElement.textContent = `R$ ${saldoTotal.toFixed(2)}`;
}

// Funções de navegação
function irParaTelaInicial() {
    alert("Tela Inicial");
    // Aqui você pode implementar a lógica para mostrar a tela inicial
}

function irParaTransacoes() {
    alert("Transações");
    // Aqui você pode implementar a lógica para mostrar as transações
}

function irParaPlanejamento() {
    alert("Planejamento");
    // Aqui você pode implementar a lógica para mostrar o planejamento
}

function irParaReceitas() {
    alert("Ver Receitas");
    // Aqui você pode implementar a lógica para mostrar as receitas
}

function irParaDespesas() {
    alert("Ver Despesas");
    // Aqui você pode implementar a lógica para mostrar as despesas
}

function irParaMeusCartoes() {
    alert("Meus Cartões");
    // Aqui você pode implementar a lógica para mostrar os cartões
}

function irParaMinhasContas() {
    alert("Minhas Contas");
    // Aqui você pode implementar a lógica para mostrar as contas
}

// Função para adicionar uma nova conta
function adicionarConta() {
    const novaConta = prompt("Digite o nome da nova conta:");
    if (novaConta) {
        alert(`Conta "${novaConta}" adicionada!`);
        // Aqui você pode implementar a lógica para realmente adicionar a conta
    }
}

// Atualiza o saldo inicial no carregamento
atualizarSaldo();

// Função para mostrar/ocultar a lista de meses
function toggleMesesDropdown() {
    const dropdown = document.getElementById('meses-dropdown');
    dropdown.classList.toggle('d-none'); // Adiciona ou remove a classe que esconde o dropdown
}

// Função para selecionar o mês
function selecionarMes(mes) {
    const mesAtual = document.getElementById('mes-atual');
    mesAtual.innerHTML = `${mes} <i class="bi bi-caret-down-fill"></i>`; // Atualiza o título com o mês selecionado
    toggleMesesDropdown(); // Fecha o dropdown após a seleção
}
