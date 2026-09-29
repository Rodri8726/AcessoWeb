const botaoContraste = document.getElementById("botao-contraste");

botaoContraste.addEventListener("click", () => {
    const contrasteAtivo =
        document.body.classList.toggle("alto-contraste");

    botaoContraste.setAttribute(
        "aria-pressed",
        String(contrasteAtivo)
    );

    botaoContraste.textContent = contrasteAtivo
        ? "Desativar alto contraste"
        : "Ativar alto contraste";
});