function arredondar(n){
    var arredondar = n.toFixed(2)
    return `R$${arredondar.replace('.',',')}`
}
console.log(arredondar(0.30000000000000004)) 