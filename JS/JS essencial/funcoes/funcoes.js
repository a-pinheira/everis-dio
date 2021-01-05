//conceitos de funções de primeira classe
function getName() {
    return 'Simone Pinheiro Machado';
}

function logFn(fn) {
    console.log(fn());
    //ou retorna só a implementação da função
}

//pode também atribuir para uma variável
const logFnResult = logFn;

//pode ser passada por argumento
logFnResult(getName);

/*
//pode também atribuir um objeto (estrutura de dados)
const obj = {
    logFn: logFn;
}

//ou ainda pode atribuir a um array
const arr = [logFn]

//ou ainda, pode ser retornada
*/
