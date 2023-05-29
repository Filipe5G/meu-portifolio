const scrollContainer = document.querySelector(".latestWorksContent")
const scrollBackBtn = document.querySelector(".backButton")
const scrollNextbtn = document.querySelector(".nextButton")
const scrollIndicador = document.getElementById("indicador")

scrollBackBtn.addEventListener("click", () =>{
    scrollContainer.scroll({
        left: scrollContainer.scrollLeft - 963.90, //define a quantidade de pixels para voltar
        behavior: 'smooth' // Adiciona animação suave
    })
})

scrollNextbtn.addEventListener("click", () =>{
    scrollContainer.scroll({
        left: scrollContainer.scrollLeft += 963.90,  //define a quantidade de pixels para avançar
        behavior: 'smooth' // Adiciona animação suave
    })
})

scrollContainer.addEventListener("scroll", () =>{
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const percentage = (scrollContainer.scrollLeft / maxScrollLeft) * 100;
    scrollIndicador.style.width = `${percentage}%`;
})