
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/produtos")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Hortifruti</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.nome} - R$ {item.preco}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
