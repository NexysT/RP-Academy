import type { Question } from '@/types';

export const staffTesteQuestions: Question[] = [
  {
    id: 1,
    text: 'Recebes ticket de insultos entre jogadores. O primeiro passo é:',
    options: [
      { id: 'a', text: 'Punir imediatamente', correct: false },
      { id: 'b', text: 'Ouvir ambas as partes', correct: true },
      { id: 'c', text: 'Kickar todos', correct: false },
      { id: 'd', text: 'Ignorar', correct: false },
    ],
    explanation: 'Antes de qualquer punição, é essencial ouvir ambas as partes envolvidas. Agir precipitadamente sem contexto completo é irresponsável e pode resultar em injustiças.',
  },
  {
    id: 2,
    text: 'Um amigo teu é reportado. O correto é:',
    options: [
      { id: 'a', text: 'Ignorar ticket', correct: false },
      { id: 'b', text: 'Favorecer amigo', correct: false },
      { id: 'c', text: 'Ser imparcial', correct: true },
      { id: 'd', text: 'Passar punição mínima', correct: false },
    ],
    explanation: 'A imparcialidade é um pilar fundamental do staff. Relações pessoais nunca devem influenciar decisões. Se houver conflito de interesses, passa o caso a outro membro do staff.',
  },
  {
    id: 3,
    text: 'Um jogador começa a insultar-te em ticket. O que fazes?',
    options: [
      { id: 'a', text: 'Insultas de volta', correct: false },
      { id: 'b', text: 'Manténs calma e profissionalismo', correct: true },
      { id: 'c', text: 'Banas logo', correct: false },
      { id: 'd', text: 'Fechas ticket', correct: false },
    ],
    explanation: 'O profissionalismo em situações de pressão é o que distingue bom staff de mau staff. Manter a calma, documentar o comportamento e actuar de forma proporcional é sempre o caminho correto.',
  },
  {
    id: 4,
    text: 'Qual é o principal objetivo de um staff?',
    options: [
      { id: 'a', text: 'Ganhar respeito', correct: false },
      { id: 'b', text: 'Ajudar e manter o servidor estável', correct: true },
      { id: 'c', text: 'Ser conhecido', correct: false },
      { id: 'd', text: 'Mandar nos jogadores', correct: false },
    ],
    explanation: 'O staff existe para servir a comunidade e manter um ambiente saudável. Quem entra no staff para poder exercer autoridade ou ganhar prestígio tem as prioridades erradas.',
  },
  {
    id: 5,
    text: 'Dois jogadores têm clips contraditórios. O correto é:',
    options: [
      { id: 'a', text: 'Escolher o mais antigo', correct: false },
      { id: 'b', text: 'Investigar contexto completo', correct: true },
      { id: 'c', text: 'Punir ambos', correct: false },
      { id: 'd', text: 'Ignorar', correct: false },
    ],
    explanation: 'Clips contraditórios exigem investigação mais profunda: logs do servidor, contexto da situação, histórico dos jogadores. A decisão só deve vir após análise completa.',
  },
  {
    id: 6,
    text: 'Qual destas atitudes é incorreta para staff?',
    options: [
      { id: 'a', text: 'Transparência', correct: false },
      { id: 'b', text: 'Parcialidade', correct: true },
      { id: 'c', text: 'Comunicação', correct: false },
      { id: 'd', text: 'Paciência', correct: false },
    ],
    explanation: 'Parcialidade é incompatível com a função de staff. Decisões baseadas em afinidades pessoais destroem a credibilidade da equipa e a confiança da comunidade.',
  },
  {
    id: 7,
    text: 'Um jogador admite uso de bug para lucro. O correto é:',
    options: [
      { id: 'a', text: 'Ignorar', correct: false },
      { id: 'b', text: 'Investigar e aplicar regras', correct: true },
      { id: 'c', text: 'Premiar honestidade', correct: false },
      { id: 'd', text: 'Avisar apenas', correct: false },
    ],
    explanation: 'Mesmo com admissão voluntária, a exploração de bugs é uma violação séria. A honestidade pode ser considerada circunstância atenuante, mas não anula a necessidade de aplicar as regras.',
  },
  {
    id: 8,
    text: 'Um staff deve discutir punições em chat público?',
    options: [
      { id: 'a', text: 'Sim', correct: false },
      { id: 'b', text: 'Não', correct: true },
      { id: 'c', text: 'Apenas bans', correct: false },
      { id: 'd', text: 'Apenas kicks', correct: false },
    ],
    explanation: 'Punições são assuntos internos. Discuti-las publicamente compromete a privacidade dos jogadores, cria conflitos desnecessários e mina a autoridade do staff.',
  },
  {
    id: 9,
    text: 'Recebes denúncia sem provas. O correto é:',
    options: [
      { id: 'a', text: 'Punir acusado', correct: false },
      { id: 'b', text: 'Pedir provas adicionais', correct: true },
      { id: 'c', text: 'Banir ambos', correct: false },
      { id: 'd', text: 'Arquivar instantaneamente', correct: false },
    ],
    explanation: 'Sem provas não há punição. Pedir ao denunciante que reúna evidências é o procedimento correto. Punir sem base é arbitrário e injusto.',
  },
  {
    id: 10,
    text: 'Um jogador spamma tickets. O correto é:',
    options: [
      { id: 'a', text: 'Ignorar todos', correct: false },
      { id: 'b', text: 'Alertar e moderar comportamento', correct: true },
      { id: 'c', text: 'Banir automaticamente', correct: false },
      { id: 'd', text: 'Responder agressivamente', correct: false },
    ],
    explanation: 'Spam de tickets é disruptivo mas não justifica ban imediato. O jogador deve ser alertado sobre o comportamento inadequado e instruído sobre o uso correto do sistema.',
  },
  {
    id: 11,
    text: 'Qual destas pode justificar intervenção imediata?',
    options: [
      { id: 'a', text: 'Discussão IC', correct: false },
      { id: 'b', text: 'Racismo/discurso extremo', correct: true },
      { id: 'c', text: 'Multa polícia', correct: false },
      { id: 'd', text: 'RP médico', correct: false },
    ],
    explanation: 'Racismo, discurso de ódio e conteúdo extremista são zero-tolerance na maioria dos servidores. A intervenção deve ser imediata e proporcional à gravidade.',
  },
  {
    id: 12,
    text: 'O que significa abuso de staff?',
    options: [
      { id: 'a', text: 'Aplicar regras corretamente', correct: false },
      { id: 'b', text: 'Usar permissões para benefício próprio', correct: true },
      { id: 'c', text: 'Fazer eventos', correct: false },
      { id: 'd', text: 'Responder tickets', correct: false },
    ],
    explanation: 'Abuso de staff é utilizar ferramentas e permissões administrativas para vantagem pessoal, favorecer amigos ou prejudicar rivais. É uma das violações mais graves possíveis.',
  },
  {
    id: 13,
    text: 'Um jogador admite erro e coopera totalmente. Isto deve:',
    options: [
      { id: 'a', text: 'Ser ignorado', correct: false },
      { id: 'b', text: 'Ser considerado na decisão', correct: true },
      { id: 'c', text: 'Cancelar punição', correct: false },
      { id: 'd', text: 'Dar ban maior', correct: false },
    ],
    explanation: 'Cooperação e admissão de erro são circunstâncias atenuantes válidas. Não cancelam a punição, mas podem reduzir a sua severidade. Bom staff reconhece e valoriza a responsabilização.',
  },
  {
    id: 14,
    text: 'Podes teleportar amigos sem motivo RP?',
    options: [
      { id: 'a', text: 'Sim', correct: false },
      { id: 'b', text: 'Não', correct: true },
      { id: 'c', text: 'Apenas admins', correct: false },
      { id: 'd', text: 'Apenas fora de RP', correct: false },
    ],
    explanation: 'Usar comandos de teleporte ou outras ferramentas administrativas para beneficiar amigos é abuso de staff, independentemente do cargo. As ferramentas existem para gestão do servidor, não para vantagens pessoais.',
  },
  {
    id: 15,
    text: 'Um jogador grava staff sem avisar. É permitido?',
    options: [
      { id: 'a', text: 'Normalmente sim', correct: true },
      { id: 'b', text: 'Nunca', correct: false },
      { id: 'c', text: 'Só admins', correct: false },
      { id: 'd', text: 'Só streamers', correct: false },
    ],
    explanation: 'Em geral, jogadores têm direito de gravar interações com staff para proteção própria. Bom staff comporta-se sempre como se estivesse a ser gravado, pois a sua conduta deve ser exemplar.',
  },
  {
    id: 16,
    text: 'Qual destas ações mostra maturidade staff?',
    options: [
      { id: 'a', text: 'Decidir impulsivamente', correct: false },
      { id: 'b', text: 'Rever provas antes de agir', correct: true },
      { id: 'c', text: 'Punir para exemplo', correct: false },
      { id: 'd', text: 'Ignorar contexto', correct: false },
    ],
    explanation: 'Maturidade é evidenciada pela capacidade de analisar antes de agir. Punições "de exemplo" sem contexto adequado são geralmente desproporcionais e injustas.',
  },
  {
    id: 17,
    text: 'Qual destas situações exige maior atenção?',
    options: [
      { id: 'a', text: 'Discussão verbal', correct: false },
      { id: 'b', text: 'Possível corrupção staff', correct: true },
      { id: 'c', text: 'Multa errada', correct: false },
      { id: 'd', text: 'Veículo estacionado', correct: false },
    ],
    explanation: 'Corrupção dentro do staff é uma ameaça sistémica ao servidor inteiro. Deve ser investigada com máxima seriedade e reportada à hierarquia superior imediatamente.',
  },
  {
    id: 18,
    text: 'Se não tens certeza sobre punição:',
    options: [
      { id: 'a', text: 'Inventas', correct: false },
      { id: 'b', text: 'Consultas staff superior', correct: true },
      { id: 'c', text: 'Ignoras', correct: false },
      { id: 'd', text: 'Banes temporariamente', correct: false },
    ],
    explanation: 'Dúvida é sinal de consciência responsável. Consultar staff superior antes de uma decisão difícil é o procedimento correto — ninguém sabe tudo, e pedir ajuda não é fraqueza.',
  },
  {
    id: 19,
    text: 'Um jogador ameaça leaks do servidor. O correto é:',
    options: [
      { id: 'a', text: 'Rir', correct: false },
      { id: 'b', text: 'Reportar imediatamente à gestão', correct: true },
      { id: 'c', text: 'Ignorar', correct: false },
      { id: 'd', text: 'Fazer mute apenas', correct: false },
    ],
    explanation: 'Ameaças de leaks são sérias e devem ser escaladas imediatamente. A gestão precisa de avaliar o risco e agir de forma coordenada — mute ou ban simples pode não ser suficiente.',
  },
  {
    id: 20,
    text: 'O comportamento de um staff deve ser:',
    options: [
      { id: 'a', text: 'Tóxico', correct: false },
      { id: 'b', text: 'Profissional e consistente', correct: true },
      { id: 'c', text: 'Parcial', correct: false },
      { id: 'd', text: 'Impulsivo', correct: false },
    ],
    explanation: 'Profissionalismo e consistência são os dois pilares de um bom staff. Decisões inconsistentes destroem a credibilidade e criam perceção de favoritismo.',
  },
];
