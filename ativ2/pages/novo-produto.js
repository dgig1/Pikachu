import { useState } from 'react';
import { useRouter } from 'next/router';
import { useProdutos } from '@/context/ProdutoContext';

export default function NovoProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const { adicionarProduto } = useProdutos();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    adicionarProduto({
      id: Date.now(),
      nome,
      preco: parseFloat(preco),
    });

    router.push('/');
  };

  return (
    <main className="form-container">
      <h1 className="form-title">Cadastrar Novo Produto</h1>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Nome do Produto:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Preço:
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            step="0.01"
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">Cadastrar Produto</button>
      </form>
    </main>
  );
}
