import { CorpPage } from '@/components/corporacoes/CorpPage';
import { corporacoes } from '@/data/corporacoes';
export default function PoliciaMilitarPage() {
  const corp = corporacoes.find((c) => c.id === 'policia-militar')!;
  return <CorpPage corp={corp} />;
}
