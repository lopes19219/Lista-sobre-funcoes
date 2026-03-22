function converterIdade(){
    let anos = Number (prompt('Digite sua idade'));
    let meses = anos * 12;
    let dias = anos * 365;
    document.writeln('Idade em anos: ' + anos + '<br>');
    document.writeln('Idade em meses: ' + meses + '<br>');
    document.writeln('Idade em dias: ' + dias + '<br>');
}
