import React, { useEffect, useState } from "react";

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Efeito para carregar os dados da API quando o componente for montado
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('https://hortifruti-backend.onrender.com/api/produtos');
        if (response.ok) {
          const data = await response.json();
          setProdutos(data);  // Atualizando o estado com os dados dos produtos
        } else {
          console.error('Erro ao carregar produtos:', response.status);
        }
      } catch (error) {
        console.error('Erro de rede:', error);
      } finally {
        setLoading(false);  // Finaliza o carregamento
      }
    };

    fetchProdutos();
  }, []); // O efeito executa apenas uma vez quando o componente é montado

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              {produto.nome} - R${produto.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

