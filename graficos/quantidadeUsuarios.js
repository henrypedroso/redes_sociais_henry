async function quantidadeUsuarios() {
    const url = 'https://github.com/guilhermeonrails/api/blob/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    
}

quantidadeUsuarios();