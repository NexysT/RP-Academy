import { CorpPage } from '@/components/corporacoes/CorpPage';
import { corporacoes } from '@/data/corporacoes';
export default function MilitarPage() {
  const corp = corporacoes.find((c) => c.id === 'militar')!;
  return <CorpPage corp={corp} />;
}
