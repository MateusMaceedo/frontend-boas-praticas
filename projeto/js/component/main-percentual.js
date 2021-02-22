// pegar o container do texto
const body = document.querySelector(".body")

// cria a barrinha
let bar = document.createElement("div")

// estilo da barrinha
bar.style.height = "7px"
bar.style.width = "700px"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"

// adicionar no corpo da página
document.body.append(bar)

// atualizar a barrinha
function updateBar(){
// o tamanho da caixa que contém o texto
// verificar em que posição da página eu estou
const textHeight = postWrap.offsetHeight
// console.log(body.offsetHeight)
const pagePositionY = window.pageXOffset
// regra de 3
const updateBar = pagePositionY * 100 / textHeight
bar.style.width = updateBar + "%"
}

window.addEventListener("load", () => {
// verificar o movimento do sroll
document.addEventListener("scroll", updateBar)
})
