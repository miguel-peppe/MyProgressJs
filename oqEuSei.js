//variaveis primitivas;
let item = "Computador";
let valorDoItem = 3000;
let estaDisponivel = true;
let promocao = undefined;
valorDoItem = null; //para apagar dados em variaveis dinamicamente
//console.log(typeof(valorDoItem)); >>>object

//ovariaveis de referencia;
let pessoa = {
    nome: "João",
    idade: 30,
    alcolatra: true,
    qtdFilhos: 2,
    casado: true
}
//console.log(pessoa.alcolatra) >>>true

//objetos
let dict = {
    produto1 : {nome: "computador", especificacoes: {caracteristica: "bom"}},
    produto2 : {nome: "aparelho tecnologiico"},
    produto3 : {nome: "water-cooler"},
    produto4 : {nome: "processador"},
    produto5 : {nome: "fan"},
}
//console.log(dict.produto1.especificacoes.caracteristica) >>>bom


//array
let meuArray = [0, 1, 2, 3, "pedro"] 
//console.log(meuArray[4]) >>>pedro

//arrrowFunc
const arrowFunc = (a, b) => a*b
//console.log(arrowFunc(20,10)) >>>200

//function normal
function dezPorcentoDesconto(n) {
    return n - (n * 10 /100);
}
//console.log(dezPorcentoDesconto(100)) >>>90

//operadores arritimeticos
let soma = "+"
let subtracao = "-"
let multiplicacao = "*"
let divisao = "/"
let resto = "%"
let potencia = "**"
let encremento = "++"
let decremento = "--"

//assignment operator
let numero1 = 1
numero1 += 20
numero1 *= 20
numero1 -= 20
numero1 /= 20
//console.log(numero1) >>>20

// -----------------------------

//comparison operators
comparacao1 = (numero1 <= 21)
//console.log(comparacao1) >>>true
comparacao2 = (numero1 >= 21)
//console.log(comparacao2) >>>false
comparacao3 = (numero1 >= 20) 
//console.log(comparacao3) >>>true
comparacao4 = (numero1 != 20) 
//console.log(comparacao4) >>>false
//
let numeroAnalisado = 1
let numeroUm = "1"
//console.log(numeroAnalisado == numeroUm) >>>true //verifica o valor
//console.log(numeroAnalisado === numeroUm) >>>false //verifica o valor e o tipo

//

//ternary operator
let driver = 50// km/h
let velocidade = driver < 55 ? "Velocidade Abaixo" : "Velocidade permitida"
let speed = driver > 110 ? "Above" : "Below"
//console.log(speed, velocidade) //below Velocidade Abaixo

//

//operadores logicos
let e = "&&"
let ou = "||"
let nao = "!"

let idadeMinima = true
let titulo = true
let podeVotar = idadeMinima && titulo
//console.log(podeVotar) >>>true

//operador ternario em funcao
aluno1 = {"nome":"João", "nota": 7, "faltas": 12}
function aprovador(nome, nota, faltas) {
    if (nota >= 6 && faltas < 24) {
        console.log(`${nome}: Teve ${faltas} faltas, e sua média foi de:${nota}, ele está aprovado`)
        return true
    }else {
        console.log(`${nome}: Teve ${faltas} faltas, e sua média foi de ${nota}, ele está reprovado`)
        return false
    }  
} 
//aprovador(aluno1.nome, aluno1.nota, aluno1.faltas)

corEscolhida = undefined
corPadrao = "azul"
corMostrada = corEscolhida || corPadrao
//verifica da esquerda pra direita, um ou outro 
//console.log(corMostrada)

//

//precedencia dos operadores (math)
resultado = ((3+4)*2)
//console.log(resultado) >>>14

//

//declarações condicioais
function kmhCalculator(currentVel) {
    const velocidadeMaxima = 110
    const velocidadeMinima = 50
    if (currentVel > velocidadeMaxima) {
        console.log("Velocidade acima da permitida")
        return true
    } else if (currentVel < velocidadeMinima) {
        console.log("Velocidade abaixo da permitida")
        return true
    } else{
        console.log("Você está nos parametros de velocidade")
        return false
    }
}
//kmhCalculator(59)

//

//switch case
function acharErro(parametro) {
    switch (parametro) {
        case 145:
            console.log("erro 145")
            break;
        case 148:
            console.log("erro 148")
            break;
        case 196:
            console.log("erro 196")
            break;
        default:
            console.log("unknown error")
    }
}
//acharErro(145) >>>erro145

//

//for loops
//for(variavel, condicao, incremento)
function contarAteDezComFor(){
    for (let i = 1; i <= 10; i++) {
        console.log("Numero:",i); 
    }
}
//contarAteDezComFor()

//while
function contarAteDezComWhile() {
    let i = 1
    while (i <= 10) {
        console.log("numero", i++)
    }
}
//contarAteDezComWhile()

//do {
//  console.log("numero", i++)
//} while(1 <= 10)
const car = {
    modelo: "lancer",
    marca: "mitsubishi",
    ano: 2014,
    cor: "black",
    km: 66000}
function mostrarCaracteristicasDoCarro(lib) {
    for (let i in lib)
        console.log(i, ":" ,lib[i])
}
//mostrarCaracteristicasDoCarro(car)

listaDosFuncionarios = ["pedro", "joao", "marcos"]
function listaSemIndex(array) {
    for (let i of array) {
        console.log(i)
    }
}
//listaSemIndex(listaDosFuncionarios)

//

//oop object oriented programming
const bookCleanCoder = {
    booktitle: 'clean coder',
    bookAuthor: 'Robert C. Martin',
    bookPages: 457,
    bookChapters: {
        chapter1: 'introduction',
        chapter2: 'learn code',
        chapter3: 'best practices',
    },
    printBook: function() {
        console.log("Printing; Clean coder")
    }
}
//bookCleanCoder.printBook()

//
const bookHistoriesToBeRich = {
    booktitle: 'Histories to be rich',
    bookAuthor: 'Pedro M. Lombardi',
    bookPages: 425,
    bookChapters: {
        chapter1: 'introduction',
        chapter2: 'understanding',
        chapter3: 'applying',
        chapter4: 'best practices',
    },
    printBook: function() {
        //console.log("Printing; Histories to be rich")
    }
}
//bookHistoriesToBeRich.printBook()

//
function factory(title, author, pages, year){
    const newBook = {
    booktitle: title,
    bookAuthor: author,
    bookPages: pages,
    bookYear: year,
    bookRecognizer: function(){
        console.log(`O livro se chama: ${newBook.booktitle}.`)
        console.log(`Foi Redigido por: ${newBook.bookAuthor} em ${newBook.bookYear}.`)
        console.log(`E conta com ${newBook.pages}`)
        }
    }
    return newBook
}
const meuLivro = factory("Meu novo mundo", "Pedro M. Lombardi", 3456, 1997)
//meuLivro.bookRecognizer()
meuLivro.color = "blue"
//console.log(meuLivro)
//primeiro vamos usar a variavel de fora, depois a que está detro
//usando ela como um método

//

//constructor
function Constructor(title, author, pages, year) {
    this.booktitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.bookYear = year;
}
const book = new Constructor("Ilha de Fogo", "Pedro M. Lombardi", 25, 2024)
//console.log(book)
//funciona muito bem
  
//

//built in
const pi = Math.PI
//console.log(pi)
//console.log(typeof(String(123)))//123👍 
let lista = [1,56,8,43,3456,3,42]
//console.log(Math.max(...lista))

//built in strings
function stringsOperator(string) {
    string = string.toLowerCase()
    console.log(string.length)
    console.log(string.includes("lombardi"))
    console.log(string)
}
//stringsOperator("Pedro M. Lombardi")

//

//template literals
const loremName = "Lorem"
const lorem = `${loremName} ipsum dolor 
sit amet consectetur adipisicing 
elit. Sit nihil enim soluta fugit 
saepe nam sequi maxime consequatur 
esse illum reprehenderit deleniti, 
ducimus alias officia aut minima, 
quas accusamus repellendus.`
//console.log(lorem)

//

//min calculator
//criar uma função que recebe um objeto e o analisa.
function vendas(objeto) {
    if (objeto.nome == "caneta" || objeto.preco < 20 || objeto.estoque == false){
        console.log("Esse item nao pode ser vendido")
        return false
    }else if (objeto.nome != "caneta" && objeto.preco >= 20 && objeto.estoque == true) {
        console.log("Esse item pode ser vendido")
        return true
    }else
        console.log("deu merda")
}

const produto = {
    nome: "caneta",
    preco: 20,
    descricao: "apenas uma caneta",
    estoque: true
}
vendas(produto)
