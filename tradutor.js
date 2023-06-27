let dicionario = [];
dicionario.push({ pt: "palavra", it: "parola" })
dicionario.push({ pt: "pergunta", it: "domanda" })
dicionario.push({ pt: "dia", it: "giorno" })

function traduzir() {
    let palavra = document.getElementById("campo").value

    let registro = dicionario.find(p => p.pt.toUpperCase() === palavra.toUpperCase().trim())

    if (registro == undefined) {
        div3.innerText = "Não encontrado"

    } else {
        let traducao = registro.it
        div3.innerText = traducao
        campo.value = '';
    }
}