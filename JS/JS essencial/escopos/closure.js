function init(){
    const ex = 'teste - mostra esta variável';
    //o ideal é que cada functio recebe o parametro exemplo e o retornasse, 
    //principalmente quando aumenta a complexidade
    return function(){
        console.log('1 - 0 valor da variável ex. é: ' + ex);
        return function(){
            console.log('2 - 0 valor da variável ex. é: ' + ex);
            return function(){
                //console.log('3 - 0 valor da variável ex. é:  &(ex).');
                console.log('3 - 0 valor da variável ex. é: ' + ex);
            }  
        } 
    }
}

/*
const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();
initFn3();*/
//outra forma de chamar as funções acima é, chamar todas as funções de uma vez só:
//essa não é a forma usual no dia-a-dia, apenas para entender q consegue executar todas as funções em uma linha só
init()()()();