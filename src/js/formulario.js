document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contato-formulario');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            // Redireciona para a página de confirmação
            window.location.href = `pagina-de-confirmacao.html?nome=${encodeURIComponent(nome)}`;
        });
    }

    // mensagem personalizada com o nome do usuário que está no input do formulário
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    if (nome) {
        const mensagemDeAgradecimento = document.getElementById('mensagem-de-agradecimento');
        if (mensagemDeAgradecimento) {
            mensagemDeAgradecimento.textContent = `Muito obrigado, ${nome}! Em breve entraremos em contato com você.`;
        }
    }
});




