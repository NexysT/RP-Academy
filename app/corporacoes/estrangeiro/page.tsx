import { CorpPage } from '@/components/corporacoes/CorpPage';
import { corporacoes } from '@/data/corporacoes';
export default function EstrangeiroPage() {
  const corp = corporacoes.find((c) => c.id === 'estrangeiro')!;
  return <CorpPage corp={corp} />;
}
