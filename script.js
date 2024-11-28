// Dados do usuário cadastrados no sistema
const users = [
    { email: "aluno@gmail", password: "senha123456" }
];

// Referências dos elementos HTML
const loginPage = document.getElementById('login-page');
const mainPage = document.getElementById('main-page');
const errorMessage = document.getElementById('error-message');
const loginForm = document.getElementById('login-form');
const imcForm = document.getElementById('imc-form');
const logoutBtn = document.getElementById('logout-btn');
const resultElement = document.getElementById('result');
const classificationElement = document.getElementById('classification');

// Função para fazer login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        loginPage.style.display = 'none';
        mainPage.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
});

// Função para calcular IMC
imcForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = weight / (height * height);
    resultElement.style.display = 'block';
    resultElement.textContent = `IMC: ${imc.toFixed(2)}`;

    let classification = '';
    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else if (imc < 34.9) {
        classification = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        classification = 'Obesidade grau 2';
    } else {
        classification = 'Obesidade grau 3';
    }

    classificationElement.style.display = 'block';
    classificationElement.textContent = `Classificação: ${classification}`;
});

// Função para sair do sistema
logoutBtn.addEventListener('click', function() {
    mainPage.style.display = 'none';
    loginPage.style.display = 'block';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});
