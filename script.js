    function atualizarRelogio() {
    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    /* formatação para sempre ter dois dígitos */
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const horaFormatada = `${horas}:${minutos}:${segundos}`;

    const diasSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = agora.getMonth() + 1; /* Meses começam do zero*/
    const ano = agora.getFullYear();

    const dataFormatada = `${diaSemana}, ${dia}/${mes}/${ano}`;

    document.getElementById("hora").textContent = horaFormatada;
    document.getElementById("data").textContent = dataFormatada;
}

/* Atualizar Relógio imediatamente*/
atualizarRelogio();

/* atualizar a cada segundo */
setInterval(atualizarRelogio, 1000);

const botaoTema = document.getElementById("toggleTema");

/* Carregar tema salvo */
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "light") {
    document.body.classList.add("light");
    botaoTema.textContent = "🌙";
}

/* Alternar tema */
botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        botaoTema.textContent = "🌙";
        localStorage.setItem("tema", "light");
    } else {
        botaoTema.textContent = "☀️";
        localStorage.setItem("tema", "dark");
    }
});
