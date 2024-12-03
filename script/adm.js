function filtrarCotas() {
    const filtro = document.getElementById('filtroSelect').value; // Obtém o valor selecionado
    const tabela = document.getElementById('tabelaCotas');
    const linhas = tabela.getElementsByTagName('tbody')[0].getElementsByTagName('tr'); // Obtém as linhas da tabela

    for (let i = 0; i < linhas.length; i++) {
      const cota = linhas[i].getElementsByTagName('td')[6].textContent; // Obtém o valor da coluna "Cota"

      // Exibe ou oculta a linha com base no filtro
      if (filtro === "todos" || cota === filtro) {
        linhas[i].style.display = ""; // Exibe a linha
      } else {
        linhas[i].style.display = "none"; // Oculta a linha
      }
    }
  }