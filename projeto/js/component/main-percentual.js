// pegar o container do texto
 const wrapProjects = document.querySelector(".wrap-projects")
// cria a barrinha
let bar = document.createElement("div")

// estilo da barrinha
bar.style.height = "5px"
bar.style.width = "0"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"
bar.style.transition = "0.2"

// adicionar no corpo da página
document.body.append(bar)

// atualizar a barrinha

// verificar o movimento do scroll
document.addEventListener("scroll", ()=> {
// o tamanho da caixa que contém o texto
const textHeight = wrapProjects.offsetHeight
// verificar em que posição da página eu estou
const pagePositionY = window.pageYOffset
// regra de 3 simples
const updateBar = pagePositionY * 100 / textHeight

bar.style.width = updateBar + "%"
})
