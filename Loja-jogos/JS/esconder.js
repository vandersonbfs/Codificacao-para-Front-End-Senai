// Efeito de esconder o formulário de cadastro

$(document).ready(function() {  // Espera o documento (página) estar totalmente carregado
    // Quando o botão com o id 'botao-cadastrar' for clicado
    $("#botao-cadastrar").click(function() {
        // Alterna a visibilidade do formulário de cadastro com animação de deslizamento (slideToggle)
        // O parâmetro "slow" define a velocidade do efeito
        $("#form-cadastrar").slideToggle("slow");

        // Alterna a visibilidade da seção de login (também com animação)
        $("#section-login").slideToggle("slow");

        // Esconde o botão de cadastro após ser clicado
        $("botao-cadastrar").hide();
    });
});
