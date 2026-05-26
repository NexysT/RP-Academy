import { CorpPage } from '@/components/corporacoes/CorpPage';
import { corporacoes } from '@/data/corporacoes';
export default function PSPPage() {
  const corp = corporacoes.find((c) => c.id === 'psp')!;
  return <CorpPage corp={corp} />;
}
