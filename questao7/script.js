function tabuada(){
    let numero = Number (prompt('Digite um número: '));
    for(let i = 1; i <= 10; i++){
        document.writeln(numero + 'x' + i + '=' + (numero * i) + '<br>');
    }
}
