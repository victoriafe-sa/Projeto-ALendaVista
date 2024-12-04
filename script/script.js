//Função para exibir a lista de candidatos
function loadCandidatos() {
    fetch('http://localhost:5577/api/candidatos')
        
        .then(response => response.json())
        
        .then(data => {
            
            const list = document.getElementById('candidato-list');
            list.innerHTML = '';
            
            data.forEach(candidato => {
                const dataNascimento = new Date(candidato.data_nascimento).toLocaleDateString('pt-BR');
                list.innerHTML += `                
                <tr>
                    <td>${candidato.nome}</td>
                    <td>${dataNascimento}</td>
                    <td>${candidato.cpf}</td>
                    <td>${candidato.telefone}</td>
                    <td>${candidato.email}</td>
                    <td>${candidato.endereco}</td>
                    <td>${candidato.cota_candidato}</td>
                    <td>
                    <button id="button-edit" onclick="editCandidato(${candidato.id_candidato})">Editar</button>
                    <button id="button-excluir" onclick="deleteCandidato(${candidato.id_candidato})">Excluir</button>                    
                    </td>
                </tr>`;
            });
        })
        .catch(error => console.error('Erro:', error));
}
loadCandidatos();

document.getElementById('candidato-form').addEventListener('submit', (e) => {
    e.preventDefault();  // Isso impede o envio padrão do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const data_nascimento = document.getElementById('data_nascimento').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const cota_candidato = document.getElementById('cota_candidato').value;

    fetch('http://localhost:5577/api/candidatos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf, data_nascimento, email, endereco, telefone, cota_candidato })
    })
        .then(() => {
            loadCandidatos(); // Atualizar a lista de candidatos
            document.getElementById('candidato-form').reset(); // Limpar o formulário
        })
        .catch(error => console.error('Erro:', error));
});



function deleteCandidato(id) {
    fetch(`http://localhost:5577/api/candidatos/${id}`, { method: 'DELETE' })
        .then(() => loadCandidatos())
        .catch(error => console.error('Erro:', error));
}


function editCandidato(id, nome, cpf, data_nascimento, email, endereco, telefone, cota_candidato) {
    const nomeNovo = prompt('Novo nome: ', nome);
    const cpfNova = prompt('Nova cpf:', cpf);
    const data_nascimentoNovo = prompt('Novo data_nascimento:', data_nascimento);
    const emailNova = prompt('Nova email:', email);
    const enderecoNova = prompt('Nova endereco:', endereco);
    const telefoneNova = prompt('Nova telefone:', telefone);
    const cota_candidatoNova = prompt('Nova cota_candidato:', cota_candidato);

    fetch(`http://localhost:5577/api/candidatos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: nomeNovo, cpf: cpfNova, data_nascimento: data_nascimentoNovo, email: emailNova, endereco: enderecoNova, telefone: telefoneNova, cota_candidato: cota_candidatoNova})
    })
        .then(() => loadCandidatos())
        .catch(error => console.error('Erro:', error));
}

// Carregar a lista ao abrir a pagina


