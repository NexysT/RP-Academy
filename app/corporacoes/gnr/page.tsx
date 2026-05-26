import { CorpPage } from '@/components/corporacoes/CorpPage';
import { corporacoes } from '@/data/corporacoes';
export default function GNRPage() {
  const corp = corporacoes.find((c) => c.id === 'gnr')!;
  return <CorpPage corp={corp} />;
}
