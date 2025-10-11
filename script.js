function validarFormulario() {

    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const mensagemErroEmail = document.getElementById('mensagemErro');
    const mensagemErroSenha = document.getElementById('mensagemErroSenha');
    const mensagemErroConfirmacao = document.getElementById('mensagemErroConfirmacao');
    const btnEnviar = document.getElementById('btnEnviar');

    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValido = false;
    if (email === "") {
        mensagemErroEmail.textContent = "Digite seu e-mail para continuar";
        mensagemErroEmail.className = "mensagem-status";
    } else if (emailRegex.test(email)) {
        mensagemErroEmail.textContent = "Email válido!";
        mensagemErroEmail.className = "mensagem-status sucesso";
        emailValido = true;
    } else {
        mensagemErroEmail.textContent = "Email inválido!";
        mensagemErroEmail.className = "mensagem-status erro";
    }

    let senhaValida = false;
    if (senha === "") {
        mensagemErroSenha.textContent = "Digite uma senha para continuar";
        mensagemErroSenha.className = "mensagem-status";
    } else if (senha.length >= 6) {
        mensagemErroSenha.textContent = "Senha válida!";
        mensagemErroSenha.className = "mensagem-status sucesso";
        senhaValida = true;
    } else {
        mensagemErroSenha.textContent = "A senha deve ter no mínimo 6 caracteres!";
        mensagemErroSenha.className = "mensagem-status erro";
    }

    let confirmacaoValida = false;
    if (confirmarSenha === "") {
        mensagemErroConfirmacao.textContent = "Confirme a senha para continuar";
        mensagemErroConfirmacao.className = "mensagem-status";
    } else if (senhaValida && confirmarSenha === senha) {
        mensagemErroConfirmacao.textContent = "Senhas iguais!";
        mensagemErroConfirmacao.className = "mensagem-status sucesso";
        confirmacaoValida = true;
    } else if (!senhaValida) {
        mensagemErroConfirmacao.textContent = "Primeiro, digite uma senha válida (mín. 6 caracteres)";
        mensagemErroConfirmacao.className = "mensagem-status erro";
    } else {
        mensagemErroConfirmacao.textContent = "As senhas não coincidem!";
        mensagemErroConfirmacao.className = "mensagem-status erro";
    }

    const todasValidas = emailValido && senhaValida && confirmacaoValida;
    btnEnviar.disabled = !todasValidas;
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!document.getElementById('btnEnviar').disabled) {
        const email = document.getElementById('email').value;

        alert('Cadastro enviado com sucesso! Email: ' + email);

    }
});

validarFormulario();
