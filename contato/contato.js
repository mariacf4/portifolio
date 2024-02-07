function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Aqui você pode adicionar validações adicionais se necessário

    // Exemplo de exibição dos dados na console
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Mensagem:', message);

    // Aqui você pode adicionar lógica para enviar os dados para um servidor ou fazer o que for necessário com eles
}
