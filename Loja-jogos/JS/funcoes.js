// Efeito do botão voltar ao topo

function topo() {
    // A função scroll permite rolar a página para a posição desejada
    window.scroll(
        {
            top: 0,           // A posição no eixo vertical (0 é o topo da página)
            left: 0,          // A posição no eixo horizontal (0 é a posição inicial)
            behavior: 'smooth' // Define o tipo de rolagem como suave (smooth)
        }
    );
}

// Validação do login

function login() {
    var logado = 0;  // Inicializa a variável que irá controlar o status de login (0 = não logado)
    
    // Obtém os valores dos campos 'usuario' e 'senha' preenchidos no formulário de login
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Verifica se os dados de usuário e senha estão corretos (neste caso, 'admin' e '1234')
    if (usuario == 'admin' && senha == '1234') {
        alert("Bem-vindo Admin"); // Exibe um alerta de boas-vindas se as credenciais forem corretas
        window.location = 'index.html'; // Redireciona o usuário para a página principal (index.html)
        logado = 1;  // Marca como logado (alterando o valor de 'logado' para 1)
    }

    // Se a variável 'logado' ainda for 0, significa que o login falhou
    if (logado == 0) {
        alert("Acesso negado. Dados incorretos"); // Exibe um alerta de erro
    }
}

// Ativar alert no botão cadastro

function cadastrar() {
    // Exibe um alerta informando que o cadastro foi realizado com sucesso
    alert('Cadastro com sucesso!');
    
    // Redireciona o usuário para a página principal após o alerta
    window.location.href = 'index.html';
}
