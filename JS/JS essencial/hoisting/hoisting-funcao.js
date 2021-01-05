function fn() {
    //em projeto real deve-se configurar algum *linter* para não permitir isso
    //não permitir chamar uma função antes de ser criada
    //log('Hoisting de função'); boa prática, sempre declarar a função antes de usar
    function log(value) {
        console.log(value);        
    }

    log('Hoisting de função');
    
}

fn();

/**
 * function fn() {
 *  function log(value) {
        * console.log(value); 
    }
    log('Hoisting de Função');
 }
 */