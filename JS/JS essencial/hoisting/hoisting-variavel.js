function fn(){
    console.log(text);
    var text = 'Exemplo hoisting de variável';
    console.log(text);
}

fn();

/**
 function fn() {
    var text;
    console.log(text);
    text = 'Exemplo';

    console.log(text);;
     
 }
 */