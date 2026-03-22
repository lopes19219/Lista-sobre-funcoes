function calcularDesconto(){
    let preco = Number (prompt('Digite o preço do produto: '));
    let desconto = Number (prompt('Digite a porcentagem de desconto: '));
    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;
    document.writeln('Preço original: R$' + preco.toFixed(2) + '<br>');
    document.writeln('Desconto: ' + desconto + '%' + '<br>');
    document.writeln('Preço final: R$' + precoFinal.toFixed(2));
}
