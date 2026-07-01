// MENU HAMBÚRGUER RESPONSIVO
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    // Abre ou fecha o menu lateral/lista
    navMenu.classList.toggle('active');
    // Faz as barrinhas virarem um "X"
    menuToggle.classList.toggle('active');
});

// Fecha o menu automaticamente se o usuário clicar em algum link dele
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});


// SIMULADOR DO SENSOR EM CAMPO (Tons de Verde, Laranja-Terra e Azul)
const btnSimular = document.getElementById('btnSimular');
const appScreen = document.getElementById('appScreen');
const umidadeVal = document.getElementById('umidadeVal');
const statusVal = document.getElementById('statusVal');

const estadosSolo = [
    { umidade: '28%', status: 'Solo Seco! Irrigação Ativada 💧', cor: '#b55d1a' },
    { umidade: '65%', status: 'Solo Perfeito! Água Ideal 👍', cor: '#1b5e20' },
    { umidade: '92%', status: 'Solo Encharcado! Desligar Pivô 🛑', cor: '#1565c0' }
];

let estadoAtual = 1;

btnSimular.addEventListener('click', () => {
    estadoAtual = (estadoAtual + 1) % estadosSolo.length;
    umidadeVal.textContent = `Umidade: ${estadosSolo[estadoAtual].umidade}`;
    statusVal.textContent = `Status: ${estadosSolo[estadoAtual].status}`;
    appScreen.style.backgroundColor = estadosSolo[estadoAtual].cor;
});


// INTERAÇÃO AO CLICAR NOS CARDS
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        const nutriente = card.getAttribute('data-nutri');
        alert(`Fórmula AgroTech:\n\nEste produto possui base concentrada de [ ${nutriente} ], ideal para o equilíbrio biológico da terra.`);
    });
});


// CONTADOR DINÂMICO PARA AS MÉTRICAS DE IMPACTO
const counters = document.querySelectorAll('.counter');
const speed = 150;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + (counter.parentElement.innerText.includes('%') ? '%' : '');
            }
        };
        updateCount();
    });
};

window.addEventListener('DOMContentLoaded', startCounters);