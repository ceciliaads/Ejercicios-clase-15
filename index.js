//17. obtenerCompetencia(a, b)
//Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b

//obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
//obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
//obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`

const obtenerCompetencia = (a, b) => {
    return `${a} vs ${b}`
}

console.log(obtenerCompetencia('JavaScript','Python'))
console.log(obtenerCompetencia('Coca','Pepsi'))
console.log(obtenerCompetencia('Perros','Gatos'))


//18. generarEmail(usuario, dominio)
//Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

//generarEmail('adalovelace', 'gmail') // 'adalovelace@gmail.com'

const generarEmail = (usuario, dominio) => {
    return `${usuario}@${dominio}.com`
}

console.log(generarEmail('adalovelace','gmail'))

//19. calcularPuntaje(facil, normal, dificil)
//Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. 
//Debe tomar como argumento tres numeros que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

//facil: 3 puntos
//normal: 5 puntos
//dificil: 10 puntos
//calcularPuntaje(3, 0, 0) // 9
//calcularPuntaje(0, 2, 1) // 20
//calcularPuntaje(5, 1, 2) // 40

const calcularPuntaje = (facil, normal, dificil) => {
    let puntosFacil = 3
    let puntosNormal = (5)
    let puntosDificil = (10)
    return (puntosFacil * facil) + (puntosNormal * normal) + (puntosDificil * dificil)
}

console.log(calcularPuntaje(3, 0, 0))
console.log(calcularPuntaje(0, 2, 1))
console.log(calcularPuntaje(5, 1, 2))

// O

const calcularPuntajeDos = (facil, normal, dificil) => {
    const totalFaciles = facil * 3
    const totalNormales = normal * 5
    const totalDificiles = dificil * 10
    return totalFaciles + totalNormales + totalDificiles
}

console.log(calcularPuntajeDos(3, 0, 0))
console.log(calcularPuntajeDos(0, 2, 1))
console.log(calcularPuntajeDos(5, 1, 2))
