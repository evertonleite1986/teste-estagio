function encontrarVogal() {
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;

    var frase = document.getElementById('frase').value;

    for (const letra of frase) {
        if (letra === 'a') {
            a += 1;
        }else if(letra === 'e') {
            e += 1;
        }else if(letra === 'i') {
            i += 1;
        }else if(letra === 'o') {
            o += 1;
        }else if(letra === 'u') {
            u += 1;
        }
    }
    
    document.getElementById('vogalA').innerHTML = a;
    document.getElementById('vogalE').innerHTML = e;
    document.getElementById('vogalI').innerHTML = i;
    document.getElementById('vogalO').innerHTML = o;
    document.getElementById('vogalU').innerHTML = u;
}