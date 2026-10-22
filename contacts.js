document.getElementById('copyLink').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем переход по ссылке

    const textToCopy = this.getAttribute('data-text'); // получаем текст

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('E-Mail copiata!');
    }).catch(err => {
        console.error('Errore: ', err);
    });
});

document.getElementById('discordLink').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем переход по ссылке

    const textToCopy = this.getAttribute('data-text'); // получаем текст

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Discord copiato!');
    }).catch(err => {
        console.error('Errore: ', err);
    });
});