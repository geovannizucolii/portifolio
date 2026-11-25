// Tema claro/escuro
const botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
  if (document.body.classList.contains("tema-escuro")) {
    botaoTema.textContent = "Tema claro";
  } else {
    botaoTema.textContent = "Tema escuro";
  }
});

// Menu no celular
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

//Copiar endereço email

const btnCopiarEmail = document.getElementById("copiar-email");

if (btnCopiarEmail) {
  btnCopiarEmail.addEventListener("click", (e) => {
    e.preventDefault(); // Impede que a página pule para o topo por causa do href="#"
    navigator.clipboard.writeText("geovannicarloszucolli@gmail.com");
    btnCopiarEmail.textContent = "E-mail copiado!";
    setTimeout(() => {
      btnCopiarEmail.textContent = "Copiar e-mail";
    }, 2000);
  });
}


// Ano do rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Barras de habilidade (página Sobre)
const barras = document.querySelectorAll(".barra span");
for (const barra of barras) {
  barra.style.width = barra.dataset.nivel + "%";
}

// Filtro de projetos (página Projetos)
const botoesFiltro = document.querySelectorAll(".filtros button");
const projetos = document.querySelectorAll("[data-categoria]");

function filtrarProjetos(categoria) {
  for (const projeto of projetos) {
    if (categoria === "todos" || projeto.dataset.categoria === categoria) {
      projeto.classList.remove("escondido");
    } else {
      projeto.classList.add("escondido");
    }
  }
  for (const botao of botoesFiltro) {
    botao.classList.toggle("ativo", botao.dataset.filtro === categoria);
  }
}

for (const botao of botoesFiltro) {
  botao.addEventListener("click", function () {
    filtrarProjetos(botao.dataset.filtro);
  });
}
