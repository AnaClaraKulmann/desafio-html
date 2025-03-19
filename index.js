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
}

function exibirAlerta(titulo, mensagem) {
    const customAlert = document.getElementById("customAlert");
    const alertMessage = document.getElementById("alertMessage");

    alertMessage.innerHTML = `<strong>${titulo}:</strong> ${mensagem}`; 
    customAlert.style.display = "block"; 
}

function fecharAlerta() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "none";

    document.getElementById("emailInput").value = "";
}



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
}
