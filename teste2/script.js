function maior() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);    
        if(nota1 >= nota2 && nota1 >= nota3 && nota1 >= nota4) {
            document.getElementById('maior').innerHTML = nota1;
        }else if(nota2 >= nota1 && nota2 >= nota3 && nota2 >= nota4) {
            document.getElementById('maior').innerHTML = nota2;
        }else if(nota3 >= nota1 && nota3 >= nota2 && nota3 >= nota4) {
            document.getElementById('maior').innerHTML = nota3;
        }else if(nota4 >= nota1 && nota4 >= nota2 && nota4 >= nota3) {
            document.getElementById('maior').innerHTML = nota4;
        }else{
            return 'Nota Inválida'
        }
            
    }

function menor() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);    
        if(nota1 <= nota2 && nota1 <= nota3 && nota1 <= nota4) {
            document.getElementById('menor').innerHTML = nota1;
        }else if(nota2 <= nota1 && nota2 <= nota3 && nota2 <= nota4) {
            document.getElementById('menor').innerHTML = nota2;
        }else if(nota3 <= nota1 && nota3 <= nota2 && nota3 <= nota4) {
            document.getElementById('menor').innerHTML = nota3;
        }else if(nota4 <= nota1 && nota4 <= nota2 && nota4 <= nota3) {
            document.getElementById('menor').innerHTML = nota4;
        }else{
            return 'Nota Inválida'
        }
    }

function media() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    
    let mediaNotas = (nota1 + nota2 + nota3 + nota4)/4;
    document.getElementById('media').innerHTML = mediaNotas;
    }

