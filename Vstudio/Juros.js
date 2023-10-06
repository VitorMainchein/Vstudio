function JurosSimples(ci, txj, ta){
    var juros = ci * txj * ta
    
    var montante = ci + juros
    
    console.log(`O montante é ${montante}`)
}
JurosSimples(1000,0.02,1) 

function JurosCompostos(ci, txj, ta){
    var juroscompostos = ci * (1+txj)**ta

    console.log(`O montante composto é ${juroscompostos}`)
}
JurosCompostos(1000,0.02,2)