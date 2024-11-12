const usuarios = [
    {
        nome: "Lucas",
        idade: 23,
        cpf: "01234567890"
    },
    {
        nome: "Lorena",
        idade: 23,
        cpf: "22233334444"
    }
];

const listaNomesElement = document.createElement('ul');
document.body.appendChild(listaNomesElement);

for (let nome of usuarios) {
    inserirUserNaLista(nome);
}

function inserirUser() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');

    const user = {
        nome: inputNomeElement.value,
        idade: inputIdadeElement.value,
        cpf: inputCpfElement.value
    };

    inserirUserNaLista(user);

    inputNomeElement.value = "";
    inputIdadeElement.value = "";
    inputCpfElement.value = "";
}

function inserirUserNaLista(user) {
    const liElement = document.createElement('li');
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'X';

    botaoRemoverElement.addEventListener('click', () => {
        liElement.remove();
    });

    const spanElement = document.createElement('span');
    spanElement.textContent = `${user.nome} - ${user.idade} - ${user.cpf}`;

    spanElement.addEventListener('click', () => {
        const inputElement = document.createElement('input');
        inputElement.value = `${user.nome} - ${user.idade} - ${user.cpf}`;

        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Alterar';
    
        buttonElement.addEventListener("click", () => {
            const novosValores = inputElement.value.trim().split("-");

            user.nome = novosValores[0];
            user.idade = novosValores[1];
            user.cpf = novosValores[2];

            buttonElement.remove();
            inputElement.remove();

            spanElement.textContent = `${user.nome} - ${user.idade} - ${user.cpf}`;
            liElement.appendChild(spanElement);
            liElement.appendChild(botaoRemoverElement);
        });

        liElement.appendChild(buttonElement);
        liElement.appendChild(inputElement);

        spanElement.remove();
        botaoRemoverElement.remove();
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(botaoRemoverElement);
    listaNomesElement.appendChild(liElement);
}



