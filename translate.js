let translations = {}; //Objeto vazio para armazenar as traduções
let language = localStorage.getItem('language') || 'en'; //Idioma padrão

//Carrega as traduções do arquivo JSON
fetch('translations.json')
    .then(response => response.json())
    .then(data => translations = data)
    .then(() => translate()) // Chama a função translate() após carregar as traduções
    .catch(error => console.error('Erro ao carregar as traduções', error));

    //Função para atualizar os textos na página com as traduções corretas
    function translate() {
        document.getElementById("about").textContent =translations[language].about;
        document.getElementById("books").textContent = translations[language].books;
        document.getElementById("porti").textContent = translations[language].portifolio;
        document.getElementById("contact").textContent = translations[language].contact;
        document.getElementById("sm").textContent = translations[language].sm;
        document.getElementById("prof").textContent = translations[language].prof;
        document.getElementById("lastestWork").textContent = translations[language].lastestWork;
        document.getElementById("copy").textContent = translations[language].copyRight;
    }

    //Função para definir o idioma
    function setLanguage(lang) {
        language = lang;
        localStorage.setItem('language', language);
        translate();
    }