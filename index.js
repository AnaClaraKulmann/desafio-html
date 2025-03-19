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


// Botões "View More" e "View Previous" da Section "Shop"
function viewMore() {
    const hideDivs = ['cat', 'cat-food', 'dog-food'];
    const showDivs = ['pet-plate', 'bird-water', 'dog-water'];

    // Oculta as divs originais
    hideDivs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none'; 
        }
    });

   // Mostra as outras divs
    showDivs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'block'; 
        }
    });

     // Troca os botões
     document.querySelector('.button-view').style.display = 'none'; // Esconde "View More"
     document.querySelector('.button-view-previous').style.display = 'block'; // Mostra "View Previous"
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
}
