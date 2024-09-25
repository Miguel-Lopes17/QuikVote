

const addOpcaoButton = document.querySelector('.add-opcao');
const opcoesContainer = document.querySelector('.opcoes');

addOpcaoButton.addEventListener('click', () => {
    const novaOpcao = document.createElement('div');
    novaOpcao.classList.add('opcao');

    const opcaoCount = opcoesContainer.children.length + 1;

    novaOpcao.innerHTML = `
        <label>
            <input type="text" name="voto" placeholder="Opção${opcaoCount}">
        </label>
        <button type="button" class="remove-opcao" style="display: none;">X</button>
    `;

    opcoesContainer.appendChild(novaOpcao);

    if (opcaoCount >= 4) {
        novaOpcao.querySelector('.remove-opcao').style.display = 'inline';
    }

    novaOpcao.querySelector('.remove-opcao').addEventListener('click', () => {
        opcoesContainer.removeChild(novaOpcao);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.toggle-restricoes');
  const restricoesDiv = document.querySelector('.restricoes');
  const form = document.getElementById('votacao-form');

  // Alternar visibilidade das restrições
  toggleButton.addEventListener('click', () => {
      if (restricoesDiv.classList.contains('hidden')) {
          restricoesDiv.classList.remove('hidden');
          toggleButton.textContent = 'Esconder Restrições';
      } else {
          restricoesDiv.classList.add('hidden');
          toggleButton.textContent = 'Mostrar Restrições';
      }
  });


  // Salvar votação e redirecionar para a biblioteca
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const comentario = document.getElementById('comentario').value;
        const votos = Array.from(document.querySelectorAll('.opcoes input[name="voto"]')).map(input => input.value);
        const idade = document.getElementById('idade') ? document.getElementById('idade').value : '';
        const endereco = document.getElementById('endereco') ? document.getElementById('endereco').value : '';
        const cep = document.getElementById('cep') ? document.getElementById('cep').value : '';
        const estadoCivil = document.getElementById('estado-civil') ? document.getElementById('estado-civil').value : '';
        const profissao = document.getElementById('profissao') ? document.getElementById('profissao').value : '';

        const votacao = {
            title,
            comentario,
            votos,
            restricoes: {
                idade,
                endereco,
                cep,
                estadoCivil,
                profissao
            }
        };

        let biblioteca = JSON.parse(localStorage.getItem('biblioteca')) || [];
        biblioteca.push(votacao);
        localStorage.setItem('biblioteca', JSON.stringify(biblioteca));

        window.location.href = 'bibli.html'; // Redirecionar para a página da biblioteca
    });
    });
