import { CorpPage } from '@/components/corporacoes/CorpPage';
import { corporacoes } from '@/data/corporacoes';
export default function PoliciaPage() {
  const corp = corporacoes.find((c) => c.id === 'policia')!;
  return <CorpPage corp={corp} />;
}
