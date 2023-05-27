//Dark mode
let darkStoragre = localStorage.getItem("dark")
const dark = document.querySelector(".dark")

const theme = () =>{
    document.querySelector("body").classList.add("darkTheme")
    document.querySelector(".presentationBanner").classList.add("darkTheme")
    document.querySelector("#prof").classList.add("darkTheme")
    document.querySelector(".latestWorksContentCarousel .card").classList.add("darkTheme")
    const info = document.querySelectorAll(".latestWorksContentCarousel .infoCard")
    for (let s = 0; s < info.length; s++) {
        info[s].classList.add("darkTheme")
        localStorage.setItem("dark", "set")
    }
    document.querySelector(".latestWorks .latestWorksHeader").classList.add("darkTheme")
    document.querySelector("footer").classList.add("darkTheme")
    const elements = document.querySelectorAll(".card")
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("darkTheme")
        localStorage.setItem("dark", "set")
    }
}

const defaultTheme = () =>{
    document.querySelector("body").classList.remove("darkTheme")
    document.querySelector(".presentationBanner").classList.remove("darkTheme")
    document.querySelector("#prof").classList.remove("darkTheme")
    document.querySelector(".latestWorksContentCarousel .card").classList.remove("darkTheme")
    const info = document.querySelectorAll(".latestWorksContentCarousel .infoCard")
    for (let s = 0; s < info.length; s++) {
        info[s].classList.remove("darkTheme")
        localStorage.setItem("dark", "set")
    }
    document.querySelector(".latestWorks .latestWorksHeader").classList.remove("darkTheme")
    document.querySelector("footer").classList.remove("darkTheme")
    const elementsRemove = document.querySelectorAll(".card")
    for (let i = 0; i < elementsRemove.length; i++ ) {
        elementsRemove[i].classList.remove("darkTheme")
        localStorage.setItem("dark", null)
    }
}

if(darkStoragre === "set"){
    theme()
}

dark.addEventListener("click", () =>{
    darkStoragre = localStorage.getItem("dark")
    if(darkStoragre != "set"){
        theme()
    }else{
        defaultTheme()
    }
})