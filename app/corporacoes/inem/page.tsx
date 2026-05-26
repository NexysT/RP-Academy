import { CorpPage } from '@/components/corporacoes/CorpPage';
import { corporacoes } from '@/data/corporacoes';
export default function INEMPage() {
  const corp = corporacoes.find((c) => c.id === 'inem')!;
  return <CorpPage corp={corp} />;
}
