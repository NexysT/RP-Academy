import type { Question } from '@/types';

export const staffExameQuestions: Question[] = [
  {
    id: 1,
    text: 'Um jogador faz excelente RP mas quebra uma regra grave. O que pesa mais?',
    options: [
      { id: 'a', text: 'Qualidade RP', correct: false },
      { id: 'b', text: 'Amizade', correct: false },
      { id: 'c', text: 'Gravidade da infração', correct: true },
      { id: 'd', text: 'Tempo jogado', correct: false },
    ],
    explanation: 'A qualidade do RP não mitiga infrações graves. As regras existem para todos, independentemente da reputação ou histórico do jogador.',
  },
  {
    id: 2,
    text: 'Um staff amigo teu aplica punição claramente injusta. O que fazes?',
    options: [
      { id: 'a', text: 'Ignoras', correct: false },
      { id: 'b', text: 'Defendes amigo', correct: false },
      { id: 'c', text: 'Reportas internamente', correct: true },
      { id: 'd', text: 'Ris-te', correct: false },
    ],
    explanation: 'Cumplicidade com abuso de staff é tão grave quanto o próprio abuso. Reportar internamente é o ato correto — protege a comunidade e a integridade da equipa.',
  },
  {
    id: 3,
    text: 'Num cenário de sequestro intenso, a polícia usa informação obtida OOC. Isto é:',
    options: [
      { id: 'a', text: 'RP avançado', correct: false },
      { id: 'b', text: 'Meta Gaming', correct: true },
      { id: 'c', text: 'FearRP', correct: false },
      { id: 'd', text: 'Powergaming', correct: false },
    ],
    explanation: 'Usar informação OOC (obtida fora do contexto IC) para beneficiar a personagem é Metagaming, independentemente da intensidade ou qualidade do RP em que ocorre.',
  },
  {
    id: 4,
    text: 'Qual destas situações pode justificar wipe de personagem?',
    options: [
      { id: 'a', text: 'Multa', correct: false },
      { id: 'b', text: 'Mudança profunda RP aprovada', correct: true },
      { id: 'c', text: 'Prisão', correct: false },
      { id: 'd', text: 'Perder carro', correct: false },
    ],
    explanation: 'Wipe de personagem é uma medida drástica geralmente reservada para transições narrativas profundas previamente aprovadas pela staff, nunca como punição por eventos normais de jogo.',
  },
  {
    id: 5,
    text: 'Um jogador crasha durante perseguição. Qual é a abordagem correta?',
    options: [
      { id: 'a', text: 'Ban imediato', correct: false },
      { id: 'b', text: 'Analisar logs/contexto antes de decidir', correct: true },
      { id: 'c', text: 'Ignorar', correct: false },
      { id: 'd', text: 'Reset RP', correct: false },
    ],
    explanation: 'Crashes podem ser involuntários. Verificar logs do servidor, histórico do jogador e contexto da situação é essencial antes de qualquer decisão. Ban imediato seria desproporcional sem investigação.',
  },
  {
    id: 6,
    text: 'O que é mais importante numa decisão staff difícil?',
    options: [
      { id: 'a', text: 'Rapidez', correct: false },
      { id: 'b', text: 'Popularidade', correct: false },
      { id: 'c', text: 'Justiça e consistência', correct: true },
      { id: 'd', text: 'Severidade', correct: false },
    ],
    explanation: 'Decisões justas e consistentes constroem confiança ao longo do tempo. Velocidade e popularidade são secundários — uma decisão precipitada ou popular mas injusta é sempre o caminho errado.',
  },
  {
    id: 7,
    text: 'Dois grupos acusam-se mutuamente de streamsniping sem provas concretas. O correto é:',
    options: [
      { id: 'a', text: 'Banir todos', correct: false },
      { id: 'b', text: 'Procurar padrões e evidências sólidas', correct: true },
      { id: 'c', text: 'Ignorar totalmente', correct: false },
      { id: 'd', text: 'Fechar tickets', correct: false },
    ],
    explanation: 'Acusações sem provas não justificam punição. Investigar padrões comportamentais, timestamps, logs e evidências cruzadas é o método correto antes de qualquer ação.',
  },
  {
    id: 8,
    text: 'Porque é perigoso um staff perder controlo emocional?',
    options: [
      { id: 'a', text: 'Fica famoso', correct: false },
      { id: 'b', text: 'Pode comprometer imparcialidade', correct: true },
      { id: 'c', text: 'Ganha respeito', correct: false },
      { id: 'd', text: 'Nada acontece', correct: false },
    ],
    explanation: 'Emoções comprometem julgamento. Um staff emocionalmente reativo toma decisões baseadas em impulso em vez de análise racional, o que inevitavelmente resulta em injustiças.',
  },
  {
    id: 9,
    text: 'Num servidor sério RP, o objetivo principal das regras é:',
    options: [
      { id: 'a', text: 'Criar grind', correct: false },
      { id: 'b', text: 'Garantir experiência consistente e realista', correct: true },
      { id: 'c', text: 'Facilitar bans', correct: false },
      { id: 'd', text: 'Favorecer polícia', correct: false },
    ],
    explanation: 'As regras de um servidor RP sério existem para proteger a qualidade da experiência coletiva. Realismo, consistência e equidade são os pilares fundamentais.',
  },
  {
    id: 10,
    text: 'Um jogador usa loophole nas regras para vantagem extrema sem quebrar texto direto. O correto é:',
    options: [
      { id: 'a', text: 'Permitir sempre', correct: false },
      { id: 'b', text: 'Avaliar intenção e espírito das regras', correct: true },
      { id: 'c', text: 'Banir permanente', correct: false },
      { id: 'd', text: 'Ignorar', correct: false },
    ],
    explanation: 'O espírito das regras é mais importante que o texto literal. Explorar brechas intencionalmente vai contra o fair play e o RP de qualidade — deve ser avaliado e colmatado.',
  },
  {
    id: 11,
    text: 'Qual destas combinações é válida num exame avançado?',
    options: [
      { id: 'a', text: 'FearRP + Meta Gaming', correct: true },
      { id: 'b', text: 'Safezone + FearRP', correct: false },
      { id: 'c', text: 'AFK + EMS', correct: false },
      { id: 'd', text: 'Drift + RP', correct: false },
    ],
    explanation: 'FearRP e Meta Gaming são duas infrações distintas mas que podem co-existir numa mesma situação. Por exemplo, ignorar ameaça à vida (FearRP) usando info OOC (Metagaming).',
  },
  {
    id: 12,
    text: 'Um staff deve evitar:',
    options: [
      { id: 'a', text: 'Transparência', correct: false },
      { id: 'b', text: 'Conflito de interesses', correct: true },
      { id: 'c', text: 'Comunicação', correct: false },
      { id: 'd', text: 'Revisão de provas', correct: false },
    ],
    explanation: 'Conflito de interesses é qualquer situação onde a relação pessoal do staff com as partes envolvidas pode comprometer a objetividade da decisão. Deve ser sempre declarado e evitado.',
  },
  {
    id: 13,
    text: 'O que diferencia staff excelente de staff mediano?',
    options: [
      { id: 'a', text: 'Quantidade de bans', correct: false },
      { id: 'b', text: 'Capacidade de julgamento e equilíbrio', correct: true },
      { id: 'c', text: 'Tempo online', correct: false },
      { id: 'd', text: 'Número de amigos', correct: false },
    ],
    explanation: 'Staff excelente distingue-se pela qualidade das suas decisões, não pelo volume de punições ou presença online. Julgamento ponderado e equilibrado é a marca registada de um staff de alto nível.',
  },
  {
    id: 14,
    text: 'Num RP militar, um superior dá ordem irrealista impossível de executar. O correto seria:',
    options: [
      { id: 'a', text: 'Fazer Powergaming', correct: false },
      { id: 'b', text: 'Adaptar RP realisticamente', correct: true },
      { id: 'c', text: 'Sair do RP', correct: false },
      { id: 'd', text: 'Ignorar todos', correct: false },
    ],
    explanation: 'Ordens irrealistas devem ser adaptadas ao contexto RP de forma coerente. Executá-las literalmente seria Powergaming — o RP colaborativo exige que todos ajustem expectativas ao que é plausível.',
  },
  {
    id: 15,
    text: 'Qual destas demonstra maturidade RP elevada?',
    options: [
      { id: 'a', text: 'Ganhar sempre', correct: false },
      { id: 'b', text: 'Priorizar história e coerência acima do ego', correct: true },
      { id: 'c', text: 'Evitar interação', correct: false },
      { id: 'd', text: 'Abusar loopholes', correct: false },
    ],
    explanation: 'Maturidade RP real significa colocar a qualidade narrativa coletiva acima do resultado individual. Perder de forma coerente e enriquecedora para a história é sinal de roleplay avançado.',
  },
];
