import Link from 'next/link';
import { useProdutos } from '@/context/ProdutoContext';

export default function Home() {
  const { produtos } = useProdutos();

  return (
    <main className="container">
      <h1 className="title">Catálogo de Produtos</h1>

      <Link href="/novo-produto">
        <button className="button">Adicionar Produto</button>
      </Link>

      <section className="lista-produtos">
        {produtos.length === 0 ? (
          <p>Nenhum produto cadastrado ainda.</p>
        ) : (
          <ul>
            {produtos.map((produto) => (
              <li key={produto.id} className="produto-item">
                <strong>{produto.nome}</strong> — R$ {produto.preco.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
