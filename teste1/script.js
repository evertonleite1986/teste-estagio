function alturaEdificio() {
    let alturaAndar = parseFloat(document.getElementById('altura').value);
    let quantAndares = parseInt(document.getElementById('andar').value);

    let alturaTotal = alturaAndar * quantAndares;

    document.getElementById('altTotal').innerHTML = alturaTotal;
}

