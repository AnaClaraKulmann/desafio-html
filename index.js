// Function Modal 
function exibirAlerta(titulo, mensagem) {
    const customAlert = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");

    alertMessage.innerHTML = `<strong>${titulo}:</strong> ${mensagem}`; 
    customAlert.style.display = "block"; 
    return;
}

function fecharAlerta() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "none";

    document.getElementById("emailInput").value = "";
    return;
}


// Validação "form-message" da Section "Contact"
function validateForm() {
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const privacy = document.getElementById('privacy');

    let errorMessage = "";

    if (firstName === '' && lastName === '' && email === '' && message === '') {
        errorMessage += "Nenhum campo deve estar vazio.";
        return exibirAlerta('Erro', errorMessage);
    }

    if (firstName === '' || lastName === '') {
        errorMessage += "Nenhum nome deve estar vazio.";
        return exibirAlerta('Erro', errorMessage);
    }

    if (firstName.length < 3 || lastName.length < 3) {
        errorMessage += "Os nomes devem ter pelo menos 3 caracteres.";
        return exibirAlerta('Erro', errorMessage);
    }

    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        errorMessage += "Os nomes devem ter apenas letras.";
        return exibirAlerta('Erro', errorMessage);
    }

    if (email === "") {
        errorMessage += "O campo de e-mail deve ser preenchido.";
        return exibirAlerta('Erro', errorMessage);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage += "O e-mail deve ser válido.";
        return exibirAlerta('Erro', errorMessage);
    }

    if (message === "") {
        errorMessage += "Você deve incluir uma mensagem.";
        return exibirAlerta('Erro', errorMessage);
    }

    if (!privacy.checked) {
        errorMessage += "Você deve aceitar as Políticas de Privacidade.";
        return exibirAlerta('Erro', errorMessage);
    }

    return exibirAlerta('Sucesso', 'Formulário enviado!');
}


// Validação e-mail "aside-newsletter" da Section "Contact"
const emailInput = document.getElementById("emailInput");

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
        exibirAlerta("Erro", "O campo de e-mail está vazio!");
    } else if (regex.test(email)) {
        exibirAlerta("Sucesso", "E-mail válido. Obrigado por se inscrever!");
    } else {
        exibirAlerta("Erro", "Por favor, insira um endereço de e-mail válido.");
    }
    return;
}


// Botões "View More" e "View Previous" da Section "Shop"
function viewMore() {
    const hideDivs = ['cat', 'cat-food', 'dog-food'];
    const showDivs = ['pet-plate', 'bird-water', 'dog-water'];

    hideDivs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none'; 
        }
    });

    showDivs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'block'; 
        }
    });

     document.querySelector('.button-view').style.display = 'none'; 
     document.querySelector('.button-view-previous').style.display = 'block'; 
     return;
 }


 function viewPrevious() {
    const showDivs = ['cat', 'cat-food', 'dog-food'];
    const hideDivs = ['pet-plate', 'bird-water', 'dog-water'];

    showDivs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'block';
        }
    });

    hideDivs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    });

    document.querySelector('.button-view').style.display = 'block'; 
    document.querySelector('.button-view-previous').style.display = 'none';
    return;
}
