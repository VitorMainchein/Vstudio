function triangulo (a, b, c){
    if (a == b && b == c){
        console.log ("O triangulo é equilatero")
    }
    else if (a == b && b != c || a == c && c != b){
        console.log ("O triangulo é isoceles")
    }
    else if (a != b && b != c){
        console.log ("O triangulo é escaleno")
    }
}
triangulo (2, 4, 2)