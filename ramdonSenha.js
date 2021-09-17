function randomSenha(num) {
    let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Y', 'Z', '*', '-', '/', '#', "$", '%', "&", '(', ')']
    let senha = []
    if(!num || num == 0 || num == undefined) {
        return "Informe um numero valido"
    } else {
        for (let i = 0; i < num; i++) {
            let number = Math.floor(Math.random() * char.length)
            senha.push(char[number])
        }
        let pass = ''
        senha.forEach(val => pass += val)
        return pass
    }
}

let numSenha = document.getElementById('numsenha')
let btn = document.getElementById('GerarSenha')
let senha = document.getElementById('senha')

btn.addEventListener('click', () => {
    let ramSenha = randomSenha(numSenha.value)
    console.log(ramSenha);
    senha.innerHTML = ramSenha
})