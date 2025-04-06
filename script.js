const botoes = document.querySelectorAll('.escudo-html, .escudo-css, .escudo-js');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const id = botao.getAttribute('data-id');
        const texto = document.getElementById(`texto-${id}`);
        const visivel = texto.style.display === 'block';

        
        document.querySelectorAll('.texto').forEach(div => div.style.display = 'none');

        
        texto.style.display = visivel ? 'none' : 'block';
    });
});
