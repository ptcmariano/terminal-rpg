function terminalCards() {
    const cards = document.querySelectorAll('.terminal-card')
    fetch('https://baconipsum.com/api/?type=all-meat&sentences=4&start-with-lorem=2')
    .then(function(response) {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
    .then(function(data) {
        cards.forEach(item => {
            item.innerHTML = `
            <header>Siga as pistas e enfrente o que vier para conquistar</header>
            <div>${data}</div>
            `
        })
    })
}