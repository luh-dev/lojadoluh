const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let converData = JSON.stringify(data);

    localStorage.setItem('lead', converData)

    let content = document.getElementById('content')

    let carregando = `<p class = 'loading'>carregando ...<p>`

    let gif = '<center> <img src= "assets/loading-gif.gif" "loading" width = 50px height = 50px></center>'
    
    let pronto = `<p class ='loading'>pronto!<p>`

    let confere = '<center> <img src= "assets/check-gif.gif" "check" width = 50px height = 50px></center>'

    content.innerHTML = carregando + gif

    setTimeout(() => {
        content.innerHTML = pronto + confere
    }, 1000)
})
