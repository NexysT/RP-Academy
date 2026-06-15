export interface CorpData {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  accentColor: string;
  icon: string;
  sections: {
    guias: SectionContent[];
    procedimentos: SectionContent[];
    codigos: CodigoEntry[];
    hierarquias: HierarquiaEntry[];
    abordagens: SectionContent[];
    situacoes: SectionContent[];
  };
}

export interface SectionContent {
  title: string;
  shortDesc: string;
  content: string;
  tags?: string[];
}

export interface CodigoEntry {
  code: string;
  description: string;
  severity?: 'baixo' | 'medio' | 'alto' | 'critico';
  detail?: string;
}

export interface HierarquiaEntry {
  rank: number;
  title: string;
  abbreviation: string;
  category: string;
  description: string;
}

export const corporacoes: CorpData[] = [
  {
    id: 'psp',
    name: 'Polícia de Segurança Pública',
    shortName: 'PSP',
    description: 'Força de segurança uniformizada e armada, de natureza pública e dotada de autonomia administrativa. Missão: assegurar a legalidade democrática, garantir a segurança interna e proteger os direitos dos cidadãos (Lei n.º 53/2007, 31/08).',
    color: '#1d4ed8',
    accentColor: '#3b82f6',
    icon: '🛡️',
  
    sections: {
      guias: [
        {
          title: 'Missão, Visão e Valores Institucionais',
          shortDesc: 'Fundamentos legais e estratégicos da PSP — o que é, para que serve e como atua.',
          content: `Missão (Lei n.º 53/2007): Assegurar a legalidade democrática, garantir a segurança interna e proteger os direitos dos cidadãos.
  
  Visão (Estratégia PSP 2025-2027): "PRESENTE PELA PROXIMIDADE, PRÓXIMA NA SEGURANÇA!"
  
  Orientações Estratégicas:
  • Excelência Operacional
  • Credibilidade Institucional
  • Reconhecimento Organizacional
  
  Princípios de Atuação:
  • Integridade e Disciplina
  • Defesa da Legalidade
  • Respeito pelos Direitos, Liberdades e Garantias
  • Proximidade e Humanismo
  • Serviço Público de Qualidade
  
  Modelo Concetual de Atuação (5 elementos-chave):
  Proximidade → Dissuasão → Prevenção → Deteção → Resposta → Adaptação
  
  Eixos Estratégicos 2025-2027:
  EE1 — Sentimento de segurança dos cidadãos
  EE2 — Formação inicial, contínua e de especialização
  EE3 — Valorização socioprofissional do capital humano
  EE4 — Coesão interna
  EE5 — Inovação e desenvolvimento
  EE6 — Comunicação, imagem institucional e cooperação internacional`,
          tags: ['Missão', 'Visão', 'Lei 53/2007', 'Estratégia 2025'],
        },
        {
          title: 'Estrutura Geral da PSP',
          shortDesc: 'Organização territorial e unidades que compõem a PSP a nível nacional.',
          content: `A PSP compreende a Direção Nacional, as unidades de polícia e os estabelecimentos de ensino policial.
  
  UNIDADES DE POLÍCIA:
  
  1. Unidade Especial de Polícia (UEP)
     • CI — Corpo de Intervenção
     • GOE — Grupo de Operações Especiais
     • CSP — Corpo de Segurança Pessoal
     • CIEXSS — Centro de Inativação de Explosivos e Segurança em Subsolo
     • GOC — Grupo Operacional Cinotécnico
  
  2. Comandos Metropolitanos
     • COMETLIS — Comando Metropolitano de Lisboa
     • Comando Metropolitano do Porto
  
  3. Comandos Regionais
     • Comando Regional dos Açores
     • Comando Regional da Madeira
  
  4. Comandos Distritais (16)
     Aveiro | Beja | Braga | Bragança | Castelo Branco | Coimbra
     Évora | Faro | Guarda | Leiria | Portalegre | Santarém
     Setúbal | Viana do Castelo | Vila Real | Viseu
  
  ESTABELECIMENTOS DE ENSINO POLICIAL:
  • ISCPSI — Instituto Superior de Ciências Policiais e Segurança Interna
    (forma Oficiais PSP; ensino superior universitário)
  • EPP — Escola Prática de Polícia
    (formação de Agentes e Chefes; Torres Novas)
  
  EFETIVO 2025: ~20.559 elementos com funções policiais + 1.011 pessoal civil = 21.570 total`,
          tags: ['Estrutura', 'Territorial', 'UEP', 'ISCPSI', 'EPP'],
        },
        {
          title: 'Direção Nacional — Estrutura Interna',
          shortDesc: 'Composição da Direção Nacional e as quatro unidades orgânicas.',
          content: `A Direção Nacional da PSP (DN/PSP) compreende:
  
  TOPO:
  • Diretor Nacional (Superintendente-Chefe — Luís Miguel Ribeiro Carrilho, desde 2024)
  • Diretores Nacionais Adjuntos (4)
  • Inspetor Nacional
  
  ÓRGÃOS DE CONSULTA E DISCIPLINA:
  • Conselho Superior de Polícia
  • Conselho de Deontologia e Disciplina
  • Junta Superior de Saúde
  • Inspeção Nacional
  
  GABINETES DO DN:
  • Gabinete do Diretor Nacional
  • Gabinete de Estudos e Planeamento (GEP)
  • Gabinete de Assuntos Jurídicos (GAJ)
  • Gabinete de Imprensa e Relações Públicas (GIRP)
  • Gabinete de Deontologia e Disciplina (GDD)
  • Centro de Assistência Religiosa
  • Departamento de Apoio Geral (DAG)
  
  QUATRO UNIDADES ORGÂNICAS:
  • DNA UOOS — Unidade Orgânica de Operações e Segurança
    (Dep. Operações, Dep. Informações, Dep. Investigação Criminal,
     Dep. Armas e Explosivos, Dep. Segurança Privada, Dep. Sistemas Informação)
  
  • DNA UOSACF — Unidade Orgânica de Segurança Aeroportuária e Controlo Fronteiriço
    (Dep. Segurança Aeroportuária, Dep. Gestão Integrada de Fronteiras)
  
  • DNA UORH — Unidade Orgânica de Recursos Humanos
    (Dep. Recursos Humanos, Dep. Formação, Dep. Saúde e Assistência na Doença)
  
  • DNA UOLF — Unidade Orgânica de Logística e Finanças
    (Dep. Logística, Dep. Infraestruturas, Dep. Gestão Financeira,
     Gabinete Planeamento Controlo Logístico e Financeiro)`,
          tags: ['DN/PSP', 'Direção Nacional', 'UOOS', 'UORH', 'Estrutura Interna'],
        },
        {
          title: 'Comunicações Rádio — Protocolo e Fonético',
          shortDesc: 'Procedimentos de comunicação rádio e alfabeto fonético NATO em uso na PSP.',
          content: `REGRAS BASE DE COMUNICAÇÃO:
  • Sempre identificar a unidade antes de transmitir: "Alfa 1 para Central"
  • Dar localização (10-20) antes de reportar qualquer ocorrência
  • Em perseguições: atualizar direção e matrícula de 30 em 30 segundos
  • Nunca bloquear o canal com conversas desnecessárias
  • Confirmação de receção sempre com 10-4
  • Em emergência: 10-33 tem prioridade absoluta — todas as outras comunicações cedem
  
  ALFABETO FONÉTICO NATO (padrão operacional):
  A=Alfa  B=Bravo  C=Charlie  D=Delta  E=Echo  F=Foxtrot
  G=Golf  H=Hotel  I=India  J=Juliett  K=Kilo  L=Lima
  M=Mike  N=November  O=Oscar  P=Papa  Q=Quebec  R=Romeo
  S=Sierra  T=Tango  U=Uniform  V=Victor  W=Whiskey
  X=X-Ray  Y=Yankee  Z=Zulu
  
  NÚMEROS NATO:
  1=Wun | 2=Too | 3=Tree | 4=Fow-er | 5=Fife
  6=Six | 7=Seven | 8=Ait | 9=Nin-er | 0=Ze-ro
  
  EXEMPLOS DE USO:
  • Matrícula "AA-12-BB" → "Alfa-Alfa, Wun-Too, Bravo-Bravo"
  • Canal seguro: "Muda para Sierra-Sierra" (canal seguro)
  • Identificar patrulha: "Alfa 1" (1ª patrulha do turno A)`,
          tags: ['Rádio', 'NATO', 'Fonético', 'Comunicações'],
        },
        {
          title: 'Programas Especiais de Policiamento',
          shortDesc: 'Programas de proximidade da PSP dirigidos a grupos específicos da comunidade.',
          content: `A PSP desenvolve programas de policiamento de proximidade (MIPP — Modelo Integrado de Policiamento de Proximidade):
  
  • Escola Segura — Segurança em ambiente escolar
  • Apoio 65 — Idosos em Segurança — proteção de idosos
  • Violência Doméstica — apoio a vítimas e prevenção
  • Comércio Seguro — segurança em estabelecimentos comerciais
  • Significativo Azul — apoio a pessoas com perturbações do espectro autista
  • Táxi Seguro — segurança de taxistas e passageiros
  • Abastecimento Seguro — segurança em postos de combustível
  • Farmácia Segura — segurança em farmácias
  • Estou Aqui — apoio a pessoas com Alzheimer ou demência
  
  POLICIAMENTO DE GRANDE EVENTOS:
  • Espetáculos desportivos (fiscalização DSP — 18 ações/ano)
  • Eventos de espetáculo (40 ações/ano)
  • Policiamento sazonal: Carnaval, Páscoa, Natal, Verão
  
  EM ROLEPLAY: estes programas são excelentes para criar RP de proximidade. Um agente PSP que interage com idosos (Apoio 65) ou em escolas (Escola Segura) cria narrativas muito mais ricas do que simples patrulhas reativas.`,
          tags: ['MIPP', 'Proximidade', 'Escola Segura', 'Comunidade'],
        },
      ],
  
      procedimentos: [
        {
          title: 'Uso de Arma de Fogo — Protocolo Legal (RUAF)',
          shortDesc: 'Quando e como pode um agente PSP usar a arma de fogo — enquadramento legal.',
          content: `O uso de arma de fogo é regulado por lei e sujeito a RUAF (Relatório de Uso de Arma de Fogo), obrigatório em qualquer situação onde a arma seja desembainhada ou disparada.
  
  PRINCÍPIOS LEGAIS (Lei de Segurança Interna + DL 457/99):
  • Necessidade: só quando imprescindível para proteger vida (própria ou alheia)
  • Proporcionalidade: força não superior ao estritamente necessário
  • Adequação: resposta adequada ao tipo de ameaça
  
  ESCALADA DE FORÇA (progressiva e obrigatória):
  Nível 1 — Presença + Comandos verbais
  Nível 2 — Controlo físico (imobilização)
  Nível 3 — Força não-letal (spray OC, bastão, taser)
  Nível 4 — Arma de fogo (último recurso, ameaça letal iminente)
  
  QUANDO É PERMITIDO DESEMBAINHAR (sem disparar):
  • Suspeita fundamentada de porte de arma
  • Detenção de suspeito de crime violento
  • Situações de risco elevado avaliadas pelo agente
  
  APÓS QUALQUER UTILIZAÇÃO:
  • Comunicar imediatamente ao superior hierárquico
  • Preencher RUAF (Relatório de Uso de Arma de Fogo)
  • Preservar cena para investigação
  • Solicitar INEM se houver feridos
  
  EM ROLEPLAY: nunca saltar níveis de força sem justificação narrativa sólida. Isso é Fail RP e viola protocolos reais da PSP.`,
          tags: ['Arma de Fogo', 'RUAF', 'Força', 'Legal'],
        },
        {
          title: 'Abordagem a Veículo — Paragem e Fiscalização',
          shortDesc: 'Protocolo completo para imobilizar e abordar veículos suspeitos.',
          content: `FASE 1 — COMUNICAÇÃO PRÉVIA:
  • Comunicar ao rádio: matrícula, marca, cor, direção e motivo antes de imobilizar
  • Pedir verificação no sistema (10-29): mandatos, veículos furtados, antecedentes
  • Solicitar apoio se suspeita de perigo elevado
  
  FASE 2 — IMOBILIZAÇÃO:
  • Sinalética luminosa e sonora ativada (exceto operação discreta — 10-40)
  • Posicionar a viatura policial em ângulo de 45° atrás-direita do veículo suspeito
  • Nunca parar diretamente atrás — ângulo protege de tiro e melhora visibilidade
  
  FASE 3 — ABORDAGEM:
  • Agente 1 (principal): aproxima pelo lado do condutor, mantém posição de proteção
  • Agente 2 (apoio): cobre lado do passageiro, observa interior e ambiente
  • Identificação clara: "PSP — documentos do veículo e identificação, por favor"
  • Nunca deixar condutor ou passageiro colocar mãos em zonas não visíveis
  
  FASE 4 — VERIFICAÇÃO:
  • Carta de condução, documento de identificação, registo do veículo, seguro obrigatório
  • Verificar validade da inspeção periódica
  • Registar no MDT (Mobile Data Terminal) a abordagem
  
  FASE 5 — ENCERRAMENTO:
  • Se tudo em ordem: devolver documentos, registar 10-24
  • Se infração: comunicar ao condutor claramente, emitir auto de contraordenação
  • Se detenção: protocolo de detenção (ver procedimento específico)`,
          tags: ['Veículo', 'Fiscalização', 'Abordagem', 'MDT'],
        },
        {
          title: 'Detenção — Procedimento Completo',
          shortDesc: 'Como efetuar uma detenção legal e correctamente documentada em RP.',
          content: `BASE LEGAL: Art. 254-261 CPP (Código de Processo Penal)
  A detenção só é válida em flagrante delito ou com mandado judicial.
  
  PRÉ-DETENÇÃO:
  • Avaliar risco — solicitar reforços se necessário
  • Comunicar ao rádio intenção: "Alfa 1 para Central, vou proceder a detenção em [local]"
  • Verificar se há outros suspeitos no perímetro
  
  EXECUÇÃO:
  1. "PSP — Polícia! Não se mexa! Mãos onde eu as possa ver!"
  2. Imobilização física — sempre com o mínimo de força necessária
  3. Algemas — pelas costas em situação de risco; pela frente se cooperativo
  4. Busca de segurança imediata — verificar armas e objetos perigosos
  5. Informar dos direitos: "Está detido. Tem direito a advogado e a não se auto-incriminar."
  6. Comunicar ao rádio: "10-15, um detido, [local], [motivo]"
  
  PÓS-DETENÇÃO:
  • Transportar para Esquadra
  • Registo completo no MDT: identidade, crime, circunstâncias, hora, local, agentes presentes
  • Busca formal (com agente do mesmo sexo)
  • Direito a chamada telefónica
  • Registo de objetos apreendidos (cadeia de custódia)
  • Interrogatório pelo Oficial de Serviço
  
  TEMPO MÁXIMO DE DETENÇÃO sem apresentação ao MP: 48 horas (art. 254 CPP)
  
  EM RP: cada passo anunciado em voz alta cria cena — o detido tem direito a reação (Pain RP, diálogo, negação). Não fazer a detenção mecânica.`,
          tags: ['Detenção', 'CPP', 'Algemas', 'MDT', 'Direitos'],
        },
        {
          title: 'Fiscalização Rodoviária — Protocolo e Poderes',
          shortDesc: 'Competências da PSP em fiscalização rodoviária e procedimentos de controlo.',
          content: `A PSP tem competência primária de fiscalização rodoviária nas zonas urbanas. Em estradas nacionais fora de zonas urbanas, a competência é da GNR.
  
  POSTO DE FISCALIZAÇÃO:
  • Sinalização prévia mínima 150m antes do posto
  • Agentes com colete refletor obrigatório
  • Sinal de paragem: braço estendido horizontalmente ou lanterna intermitente
  • Paragem obrigatória à ordem da PSP — recusa é crime
  
  DOCUMENTOS A VERIFICAR:
  • Carta de Condução (ou equivalente estrangeiro)
  • Documento de Identificação (BI/CC/Passaporte)
  • Documento do Veículo (Certificado de Matrícula)
  • Seguro Obrigatório Automóvel (validade)
  • Inspeção Periódica Obrigatória (IUC válido confirma IPO)
  
  TESTES E CONTROLOS:
  • Álcool: taxa legal máxima 0,5 g/L (0,2 g/L para novos condutores e profissionais)
  • Recusa de teste de álcool: crime de desobediência + detenção
  • Velocidade: via radares (Multanova, Vitronic, Laser Cam4 — total 128 unidades PSP)
  • Pesos e dimensões: balanças rodoviárias
  
  INFRAÇÕES MAIS COMUNS EM RP:
  • Excesso de velocidade (10-55 se suspeita de álcool)
  • Falta de documentação
  • Telemóvel ao volante
  • Não uso de cinto
  
  CONTRA-ORDENAÇÕES vs CRIMES:
  • CO: coima, possível inibição de conduzir (ex: excesso de velocidade)
  • Crime: detenção possível (ex: condução sem habilitação, álcool acima de 1,2 g/L)`,
          tags: ['Rodoviária', 'Álcool', 'Radar', 'Fiscalização'],
        },
        {
          title: 'Investigação Criminal — Competências PSP',
          shortDesc: 'Âmbito de investigação criminal da PSP e articulação com o Ministério Público.',
          content: `A PSP tem órgão de polícia criminal (OPC) próprio — o DIC (Departamento de Investigação Criminal).
  
  COMPETÊNCIAS DE INVESTIGAÇÃO DA PSP:
  • Crimes contra pessoas: ofensas corporais, ameaças, sequestro
  • Crimes contra propriedade: furto, roubo, dano
  • Violência doméstica (programa específico)
  • Crimes informáticos (SIC — Sistema de Informação Criminal)
  • Crimes no âmbito de espetáculos desportivos (DIP + GOC)
  • Segurança Privada: crimes relacionados com armas e explosivos (DAE)
  
  ARTICULAÇÃO COM MP (Ministério Público):
  • PSP age como OPC sob direção do MP em processo penal
  • Auto de Notícia → Inquérito (MP dirige) → PSP executa diligências delegadas
  • Detenção em flagrante → apresentar ao MP em 48h
  
  TÉCNICAS DE INVESTIGAÇÃO:
  • Recolha de prova no local (preservar cena, fotografar, recolher impressões)
  • Audição de testemunhas e suspeitos (auto de declarações)
  • Pesquisa Encoberta de Informações (agentes especializados)
  • Análise de informações criminais (DIC)
  • Cooperação com EUROPOL, INTERPOL (via DSIC/DIC)
  
  POLÍCIA TÉCNICA FORENSE (reorganização em curso 2025):
  • Recolha de ADN, impressões digitais, traços balísticos
  • Análise laboratorial em coordenação com laboratórios forenses
  
  EM RP: uma investigação bem conduzida pode durar várias sessões. Recolher provas, ouvir testemunhas, elaborar autos — isso é RP rico e realista.`,
          tags: ['Investigação', 'DIC', 'MP', 'OPC', 'Forense'],
        },
      ],
  
      codigos: [
        // --- CÓDIGOS 10 REAIS PSP ---
        { code: '10-0', description: 'Cuidado / Atenção redobrada na transmissão', severity: 'medio' as const,
          detail: 'Alerta genérico para atenção. Usado quando há informação sensível ou situação que requer cuidado. Não é emergência, mas exige atenção.' },
        { code: '10-1', description: 'Fraca receção — pedir repetição ou reposicionamento', severity: 'baixo' as const,
          detail: 'Sinal fraco, mensagem não percebida. Pedir ao transmissor que repita ou mude de posição.' },
        { code: '10-2', description: 'Boa receção de sinal', severity: 'baixo' as const,
          detail: 'Confirmação de que o sinal está a ser recebido claramente.' },
        { code: '10-3', description: 'Parar transmissão / Silêncio no canal', severity: 'medio' as const,
          detail: 'Ordenar silêncio imediato no canal. Usado quando há situação prioritária a tratar.' },
        { code: '10-4', description: 'Recebido / OK / Confirmado', severity: 'baixo' as const,
          detail: 'Código universal de confirmação. A mensagem foi recebida e compreendida. Equivale a "Roger" em terminologia militar.' },
        { code: '10-6', description: 'Ocupado — aguardar contacto', severity: 'baixo' as const,
          detail: 'A unidade está empenhada e não pode responder de imediato. Pedir para aguardar.' },
        { code: '10-7', description: 'Fora de serviço', severity: 'baixo' as const,
          detail: 'Encerramento de turno ou indisponibilidade temporária. A unidade não está operacional.' },
        { code: '10-8', description: 'Em serviço / Disponível para ocorrências', severity: 'baixo' as const,
          detail: 'Início de turno ou retorno à disponibilidade após ocorrência. Sinaliza ao CCCO que a unidade está pronta.' },
        { code: '10-9', description: 'Repetir mensagem — não foi percebida', severity: 'baixo' as const,
          detail: 'A mensagem anterior não foi compreendida. Pedir repetição completa.' },
        { code: '10-10', description: 'Negativo / Não concordo / Impossível', severity: 'baixo' as const,
          detail: 'Resposta negativa. Indica recusa, impossibilidade ou desacordo com uma questão ou proposta.' },
        { code: '10-15', description: 'Transportando detido(s) na viatura', severity: 'medio' as const,
          detail: 'Obrigatório comunicar ao CCCO quando há detidos em transporte. Registar no MDT: identidade do detido e destino.' },
        { code: '10-17', description: 'Em deslocação para o local indicado', severity: 'baixo' as const,
          detail: 'Unidade em rota para o destino. Comunicar ETA (tempo estimado de chegada) se possível.' },
        { code: '10-20', description: 'Qual a tua localização?', severity: 'baixo' as const,
          detail: 'Pedido de localização atual. A resposta deve incluir rua, número/cruzamento e bairro/zona. É o código mais usado em comunicações de rotina.' },
        { code: '10-21', description: 'Contacto telefónico — ligar para [número/unidade]', severity: 'baixo' as const,
          detail: 'Instrução para mudar do rádio para contacto telefónico. Útil para comunicações mais longas ou confidenciais.' },
        { code: '10-23', description: 'No local da ocorrência', severity: 'baixo' as const,
          detail: 'Unidade chegou ao local. Seguido de avaliação inicial da situação. O CCCO regista hora de chegada.' },
        { code: '10-24', description: 'Missão concluída / Disponível', severity: 'baixo' as const,
          detail: 'Ocorrência resolvida ou missão terminada. Unidade volta a estar disponível para nova atribuição.' },
        { code: '10-27', description: 'Verificar carta de condução no sistema', severity: 'baixo' as const,
          detail: 'Pedido de consulta de dados da carta de condução (validade, categoria, inibições) no sistema informático.' },
        { code: '10-28', description: 'Verificar matrícula / Registo de veículo', severity: 'baixo' as const,
          detail: 'Pedido de consulta da base de dados de veículos: proprietário, seguros, IPO, restrições, participação de furtado.' },
        { code: '10-29', description: 'Verificar suspeito / Veículo em ficheiro (mandatos)', severity: 'medio' as const,
          detail: 'Consulta aprofundada: mandatos de detenção, antecedentes criminais, veículos furtados, alertas Schengen. Obrigatório em detenções.' },
        { code: '10-31', description: 'Crime em progresso — resposta imediata', severity: 'alto' as const,
          detail: 'Ocorrência ativa a decorrer. Requer deslocação imediata com sinalética ativada. Comunicar ao CCCO e solicitar reforços se necessário.' },
        { code: '10-32', description: 'Suspeito armado no local', severity: 'critico' as const,
          detail: 'Presença confirmada de pessoa com arma. Máxima precaução. Não abordar sem reforços. Solicitar UEP/CI se disponível.' },
        { code: '10-33', description: '🚨 EMERGÊNCIA — Apoio imediato a elemento policial', severity: 'critico' as const,
          detail: 'CÓDIGO DE EMERGÊNCIA MÁXIMA. Elemento policial em perigo de vida. Todas as unidades disponíveis respondem imediatamente. Canal fica prioritário para este chamamento. CCCO coordena resposta total.' },
        { code: '10-34', description: 'Distúrbio / Tumulto / Alteração da ordem pública', severity: 'alto' as const,
          detail: 'Situação de desordem pública que pode escalar. Solicitar reforços preventivamente. Preparar equipamento de ordem pública se disponível.' },
        { code: '10-35', description: 'Informação confidencial — mudar para canal seguro', severity: 'medio' as const,
          detail: 'A informação que se segue é sensível e não deve ser transmitida em canal aberto. Mudar para frequência reservada ou contactar por telefone.' },
        { code: '10-38', description: 'Paragem de veículo em curso', severity: 'medio' as const,
          detail: 'Unidade está a imobilizar um veículo. Obrigatório comunicar matrícula e localização ao CCCO antes de abordar.' },
        { code: '10-40', description: 'Deslocar sem sirene — abordagem silenciosa', severity: 'medio' as const,
          detail: 'Instrução para chegar ao local sem sinalização sonora. Usado em situações táticas onde o efeito surpresa é importante (ex: apanhar suspeito em flagrante).' },
        { code: '10-50', description: 'Acidente de viação', severity: 'alto' as const,
          detail: 'Sinistro rodoviário. Comunicar se há feridos (10-52 INEM) e número de veículos envolvidos. Sinalizar o local e preservar para investigação.' },
        { code: '10-52', description: 'Solicitar INEM / Ambulância para o local', severity: 'alto' as const,
          detail: 'Pedido de apoio médico. Comunicar localização exata, número aproximado de vítimas e tipo de ferimentos se conhecido.' },
        { code: '10-55', description: 'Suspeita de condução sob influência de álcool ou substâncias', severity: 'medio' as const,
          detail: 'Condutor apresenta sinais de estar sob efeito de substâncias. Proceder a teste de álcool obrigatório.' },
        { code: '10-80', description: '🚔 Perseguição em curso', severity: 'critico' as const,
          detail: 'Perseguição policial ativa. Comunicar: direção, descrição do veículo, matrícula e velocidade estimada. Atualizar a cada 30 segundos. CCCO coordena bloqueios e apoio aéreo.' },
        { code: '10-95', description: 'Suspeito imobilizado e detido', severity: 'medio' as const,
          detail: 'Suspeito sob custódia policial. Comunicar ao CCCO e preparar transporte para esquadra.' },
        { code: '10-99', description: '🔴 PRIORIDADE MÁXIMA — Vida em risco imediato', severity: 'critico' as const,
          detail: 'Situação de vida ou morte com risco imediato. Supera qualquer outra comunicação no canal. Todas as unidades em alerta.' },
      ],
  
      hierarquias: [
        // CARREIRA DE AGENTE (3 escalões)
        { rank: 1, title: 'Agente', abbreviation: 'Ag.', category: 'Carreira de Agente',
          description: 'Nível de entrada na PSP. Realiza patrulha de setor, atende ocorrências, executa fiscalizações e presta auxílio à comunidade. Trabalha sempre acompanhado no período inicial de adaptação. O efetivo previsto para 2025 é de 4.246 Agentes.' },
        { rank: 2, title: 'Agente Principal', abbreviation: 'Ag. Ppal.', category: 'Carreira de Agente',
          description: 'Progressão dentro da carreira de Agente. Maior autonomia operacional. Pode liderar patrulhas simples e orientar Agentes recém-admitidos. Efetivo previsto 2025: 11.829.' },
        { rank: 3, title: 'Agente Coordenador', abbreviation: 'Ag. Coord.', category: 'Carreira de Agente',
          description: 'Topo da carreira de Agente. Coordena múltiplas patrulhas num setor. Pode assumir liderança interina em ausência de Chefe. Efetivo previsto 2025: 1.591.' },
  
        // CARREIRA DE CHEFE (3 escalões)
        { rank: 4, title: 'Chefe', abbreviation: 'Ch.', category: 'Carreira de Chefe',
          description: 'Primeiro nível da Carreira de Chefe. Supervisão direta de equipas de Agentes, gestão de ocorrências no terreno e garantia do cumprimento de protocolos. Efetivo previsto 2025: 506.' },
        { rank: 5, title: 'Chefe Principal', abbreviation: 'Ch. Ppal.', category: 'Carreira de Chefe',
          description: 'Supervisão de múltiplos Chefes e equipas. Gestão de turno completo. Interface operacional entre Agentes e Oficiais. Efetivo previsto 2025: 683.' },
        { rank: 6, title: 'Chefe Coordenador', abbreviation: 'Ch. Coord.', category: 'Carreira de Chefe',
          description: 'Topo da Carreira de Chefe. Coordenação operacional de setor alargado. Assessoria técnica aos Oficiais. Experiência sólida em gestão de patrulhas e ocorrências complexas. Efetivo previsto 2025: 853.' },
  
        // CARREIRA DE OFICIAL (6 escalões)
        { rank: 7, title: 'Subcomissário', abbreviation: 'Subcom.', category: 'Carreira de Oficial',
          description: 'Primeiro posto de Oficial PSP. Formado no ISCPSI. Comanda secções, autoriza operações de média complexidade e assegura reporte hierárquico de ocorrências graves. Efetivo previsto 2025: 113.' },
        { rank: 8, title: 'Comissário', abbreviation: 'Com.', category: 'Carreira de Oficial',
          description: 'Comanda Esquadra ou Divisão Policial. Responsável pela estratégia operacional do setor, gestão de recursos humanos e materiais, e relação com outras entidades. Efetivo previsto 2025: 270.' },
        { rank: 9, title: 'Subintendente', abbreviation: 'Subint.', category: 'Carreira de Oficial',
          description: 'Oficial Superior. Coordena operações multi-divisão. Pode assumir comando de Divisão Policial de maior dimensão ou funções de Estado-Maior em Comandos Metropolitanos. Efetivo previsto 2025: 269.' },
        { rank: 10, title: 'Intendente', abbreviation: 'Int.', category: 'Carreira de Oficial',
          description: 'Gestão estratégica de Comando Distrital ou funções na Direção Nacional. Interface com entidades governamentais, autarquias e outras forças de segurança. Efetivo previsto 2025: 105.' },
        { rank: 11, title: 'Superintendente', abbreviation: 'Sup.', category: 'Carreira de Oficial',
          description: 'Comanda Comando Metropolitano ou Distrital de grande dimensão (Lisboa, Porto). Ou exerce funções de DNA (Diretor Nacional Adjunto). Toma decisões estratégicas de âmbito alargado. Efetivo previsto 2025: 74.' },
        { rank: 12, title: 'Superintendente-Chefe', abbreviation: 'Sup.-Ch.', category: 'Carreira de Oficial',
          description: 'Posto máximo da Carreira de Oficial. Gestão dos grandes departamentos nacionais ou Comandante de maior Unidade. O Diretor Nacional é tipicamente Superintendente-Chefe. Efetivo previsto 2025: 20.' },
  
        // DIREÇÃO NACIONAL
        { rank: 13, title: 'Diretor Nacional Adjunto / Inspetor Nacional', abbreviation: 'DNA / IN', category: 'Direção Nacional',
          description: 'Quatro Diretores Nacionais Adjuntos comandam as unidades orgânicas (UOOS, UOSACF, UORH, UOLF). O Inspetor Nacional dirige a Inspeção Nacional PSP. Reportam diretamente ao Diretor Nacional.' },
        { rank: 14, title: 'Diretor Nacional', abbreviation: 'DN', category: 'Direção Nacional',
          description: 'Máxima autoridade da PSP. Cargo único. Comanda toda a força policial a nível nacional. Responde ao Ministro da Administração Interna. Diretor Nacional atual (2024): Luís Miguel Ribeiro Carrilho, Superintendente-Chefe.' },
      ],
  
      abordagens: [
        {
          title: 'Abordagem a Suspeito a Pé — Protocolo Padrão',
          shortDesc: 'Procedimento de abordagem individual com identificação e controlo de risco.',
          content: `A abordagem a suspeito a pé é das situações mais comuns e mais perigosas para um agente PSP.
  
  PRÉ-ABORDAGEM:
  • Avaliar o ambiente: saídas, possíveis cúmplices, objetos na mão do suspeito
  • Posicionar corretamente: nunca com as costas à entrada, manter distância mínima 2-3m
  • Avisar ao rádio: "10-38 a pé, [localização], [descrição do suspeito]"
  
  ABORDAGEM (em par — formação padrão):
  Agente 1 (principal): fala com o suspeito, solicita documentos, mantém posição lateral
  Agente 2 (apoio): posição de ângulo oposto, cobre movimentos, observa ambiente
  
  COMUNICAÇÃO:
  • "Boa tarde, PSP. Os seus documentos de identificação, por favor."
  • Tom controlado, autoritário mas não agressivo
  • Manter contato visual constante
  
  EM CASO DE RECUSA DE IDENTIFICAÇÃO:
  • A recusa de identificação a OPC é crime de desobediência (art. 348 CP)
  • Informar claramente: "É obrigado por lei a identificar-se. Recusa implica detenção para identificação."
  • Registar a recusa e proceder a detenção para identificação se mantiver recusa
  
  EM CASO DE FUGA:
  • Ordem de paragem verbal clara e audível: "PSP — PARE! POLÍCIA!"
  • Comunicar ao rádio imediatamente: direção, descrição, hora
  • Avaliação proporcional de perseguição a pé vs viatura
  
  EM ROLEPLAY: a qualidade da abordagem define a cena. Um agente que fala com autoridade e segurança cria RP muito mais rico do que um que age mecanicamente.`,
          tags: ['Abordagem', 'Suspeito', 'Identificação', 'Protocolo'],
        },
        {
          title: 'Negociação com Reféns — Crise e Sequestro',
          shortDesc: 'Protocolo de resposta e negociação em situações de crise com reféns.',
          content: `A PSP tem negociadores especializados formados em técnicas de gestão de crise (curso específico no ISCPSI/EPP).
  
  FASE 1 — CHEGADA E CONTENÇÃO:
  • Estabelecer 2 perímetros: interno (imediato) e externo (afastamento de civis)
  • Ninguém entra ou sai da zona interna sem autorização do Comandante de Operações
  • Cortar comunicações externas do local se possível
  • Solicitar imediatamente: negociador, CI/GOE (UEP), INEM standby
  
  FASE 2 — AVALIAÇÃO:
  • Quantos reféns? Estado de saúde? Identidade?
  • Quantos sequestradores? Armamento visível?
  • Quais as exigências? (não tomar decisões sobre exigências sem negociador)
  • Há elementos vulneráveis (crianças, doentes)?
  
  FASE 3 — NEGOCIAÇÃO (só o negociador fala):
  Princípios fundamentais:
  • Uma só voz — o negociador. Ninguém mais comunica com o sequestrador.
  • Escuta ativa — deixar falar, validar emoções, não interromper
  • Nunca prometer o que não se pode cumprir
  • Tempo é aliado — quanto mais tempo, menor a tensão e mais hipóteses de saída pacífica
  • Pequenas concessões criam reciprocidade
  
  FASE 4 — RESOLUÇÃO:
  • Entrega voluntária: instruções claras de saída segura
  • Intervenção tática (GOE): só quando todas as alternativas pacíficas estão esgotadas e há risco iminente
  
  APÓS A CRISE:
  • Acompanhamento psicológico a reféns e negociadores
  • Debriefing completo de todos os elementos
  • RUAF se houve uso de força`,
          tags: ['Reféns', 'Negociação', 'Crise', 'GOE', 'CI'],
        },
        {
          title: 'Segurança em Grandes Eventos',
          shortDesc: 'Policiamento de espetáculos desportivos e eventos de grande concentração.',
          content: `A PSP tem competência específica em segurança a grandes eventos (Lei n.º 39/2009 — regime jurídico de combate à violência no desporto).
  
  PLANEAMENTO PRÉ-EVENTO:
  • Reunião de coordenação com organização, clubes e CCCO
  • Avaliação de risco: historial de incidentes, rivalidades entre adeptos, capacidade do recinto
  • Definição de força policial necessária (Mapa de Pessoal de Policiamento)
  • Posicionamento de unidades: acesso, interior, exterior, vias de fuga
  
  NO DIA DO EVENTO:
  • Revista à entrada — armas, pirotecnia, álcool (lei proíbe)
  • Separação de adeptos visitantes dos locais (setor específico)
  • DIP (Departamento de Informações Policiais) — spotters a identificar instigadores
  • Comunicações contínuas entre sectores via rádio
  • Reserva tática disponível (CI se necessário)
  
  SITUAÇÕES COMUNS EM RP:
  • Adeptos sem bilhete a tentar entrar → protocolo de não entrada + registo
  • Briga nos acessos → contenção, separação, possível detenção
  • Pirotecnia no interior → identificar responsável, expulsão + possível detenção
  • Invasão do relvado → barreira física, contenção e devolução ordenada
  
  APÓS O EVENTO:
  • Acompanhamento de saída organizada
  • Relatório de policiamento (DIP recebe para análise de padrões)
  • RUAF se houve uso de força`,
          tags: ['Eventos', 'Desporto', 'DIP', 'Spotters', 'Lei 39/2009'],
        },
      ],
  
      situacoes: [
        {
          title: 'Violência Doméstica — Resposta em Flagrante',
          shortDesc: 'Protocolo PSP para ocorrências de violência doméstica (programa específico).',
          content: `A violência doméstica é crime público (art. 152 CP) — a PSP DEVE agir independentemente de queixa da vítima.
  
  CHEGADA AO LOCAL:
  • Separar imediatamente agressor e vítima em divisões diferentes
  • Avaliar estado de saúde da vítima — solicitar INEM se houver ferimentos
  • Verificar se há menores no espaço e avaliar risco para crianças
  
  AVALIAÇÃO DE RISCO — Ficha RVD (Risco de Violência Doméstica):
  Perguntas padronizadas sobre: frequência e gravidade das agressões, uso de armas, ameaças de morte, filhos em risco, álcool/drogas, histórico policial do agressor
  
  DECISÃO DE DETENÇÃO:
  • Detenção obrigatória em flagrante delito (crime semipúblico não — é PÚBLICO)
  • Detenção se houver perigo para a vítima mesmo sem flagrante (medidas de coação urgentes)
  
  APOIO À VÍTIMA:
  • Informar sobre direitos, apoios disponíveis (APAV, casas de abrigo)
  • Fotografar lesões com o consentimento da vítima (prova)
  • Auto de notícia detalhado com todas as circunstâncias
  • Encaminhar para Gabinete de Apoio à Vítima (GAV) da Esquadra
  
  FOLLOW-UP OBRIGATÓRIO:
  • Contacto com vítima nas 72h seguintes
  • Verificação de cumprimento de medidas de afastamento (se aplicadas)
  • Coordenação com CPCJ (Comissão de Proteção de Crianças e Jovens) se há menores
  
  EM ROLEPLAY: este é um dos cenários mais exigentes emocionalmente. Requer equilíbrio entre profissionalismo policial e sensibilidade humana.`,
          tags: ['Violência Doméstica', 'VD', 'GAV', 'APAV', 'Crime Público'],
        },
        {
          title: 'Assalto a Banco com Reféns — Coordenação Total',
          shortDesc: 'Resposta PSP a assalto bancário em curso — gestão de crise de alta complexidade.',
          content: `ALERTA INICIAL (chamada 112 ou alarme silencioso do banco):
  • Deslocar com 10-40 (sem sirene) se assalto em curso — não alertar assaltantes
  • Comunicar ao CCCO: confirmação de informação, número de unidades a deslocar
  
  CHEGADA AO LOCAL:
  • Perímetro externo imediato: afastar civis da zona de visibilidade
  • Confirmar a situação (reféns? número de assaltantes? armamento?)
  • Comunicar: "10-31, assalto bancário confirmado, reféns, solicitamos negociador e CI, [local]"
  
  ESTRUTURA DE COMANDO NO LOCAL:
  • Comandante de Operações — Oficial mais graduado presente
  • Negociador — único ponto de contacto com assaltantes
  • Equipa tática (CI/GOE) — posicionamento silencioso, coberturas
  • Equipa de apoio — controlo de perímetro, gestão de civis e media
  
  NEGOCIAÇÃO:
  • Exigências comuns: viatura de fuga, helicóptero, dinheiro
  • Nenhuma exigência é concedida sem avaliação do Comandante
  • Estratégia: prolongar o tempo, reduzir tensão, isolar assaltantes do exterior
  
  INTERVENÇÃO TÁTICA (último recurso):
  • GOE é a unidade especializada para resolução de situações de reféns
  • Intervenção só autorizada pelo Comandante com avaliação de risco favorável
  • Coordenação total com negociador antes de qualquer movimento
  
  APÓS RESOLUÇÃO:
  • INEM para triagem de reféns
  • Preservação de cena para PJ/investigação
  • Separar e deter assaltantes imediatamente
  • RUAF obrigatório
  • Debriefing completo`,
          tags: ['Banco', 'Reféns', 'GOE', 'Negociação', 'Comando'],
        },
        {
          title: 'Perseguição Policial — Gestão e Segurança',
          shortDesc: 'Protocolo de perseguição terrestre com avaliação contínua de risco.',
          content: `A PSP realiza 21.500 operações de fiscalização rodoviária por ano. As perseguições emergem frequentemente dessas paragens.
  
  INÍCIO DA PERSEGUIÇÃO:
  • Sinalética: luzes azuis + sirene OBRIGATÓRIAS (identifica claramente como policial)
  • Comunicação imediata: "10-80, [matrícula], [descrição veículo], [localização], [direção], [velocidade estimada]"
  • CCCO assume coordenação: informa outras unidades, prepara bloqueios
  
  DURANTE A PERSEGUIÇÃO:
  • Atualizar localização e direção a cada 30 segundos
  • Nunca ultrapassar o fugitivo em velocidade que ponha civis em risco
  • Solicitar apoio para interceptação em pontos estratégicos
  • Avaliar CONTINUAMENTE: vale o risco para os civis?
  
  TÉCNICAS DE INTERCEPTAÇÃO:
  • Barreira estática: viaturas perpendiculares à via (nunca manter agentes junto às viaturas)
  • Spike strip (pinos): instalar antecipadamente com coordenação de CCCO
  • Apoio aéreo (se disponível): coordenação via CCCO
  
  QUANDO TERMINAR A PERSEGUIÇÃO (decisão do Comandante):
  • Quando o risco para terceiros supera o benefício de capturar o suspeito
  • Quando se perde o rasto do veículo
  • Comunicar último avistamento e características ao CCCO — outras unidades assumem
  
  APÓS PARAGEM:
  • Abordagem tática a veículo (ver procedimento)
  • Se condutor apresenta sinais de lesão: INEM
  • Documentar detalhadamente para relatório — perseguições são objeto de supervisão
  
  EM ROLEPLAY: a perseguição não é eterna nem ilimitada. Um agente que persegue a 200km/h pela cidade ignorando o risco para civis está a fazer Fail RP e GTA Driving.`,
          tags: ['Perseguição', '10-80', 'CCCO', 'Spike', 'Bloqueio'],
        ],
      },
    },
  {
    id: 'gnr',
    name: 'Guarda Nacional Republicana',
    shortName: 'GNR',
    description: 'Força de segurança de natureza militar com jurisdição em zonas rurais, estradas nacionais, fronteiras e áreas não cobertas pela PSP. Única força de segurança com dupla função: policial e militar.',
    color: '#15803d',
    accentColor: '#22c55e',
    icon: '⚔️',
    sections: {
      guias: [
        {
          title: 'Missão e Jurisdição da GNR',
          shortDesc: 'O papel único da GNR — força com dupla natureza policial e militar.',
          content: 'A Guarda Nacional Republicana é a única força de segurança portuguesa com dupla natureza: simultaneamente policial e militar. Está organizada numa estrutura militar com postos, patrulhas e destacamentos, mas executa funções de polícia geral.\n\nJurisdição principal: todo o território nacional excepto as áreas de competência da PSP (cidades e zonas metropolitanas). A GNR cobre aproximadamente 94% do território e 54% da população — estradas nacionais, zonas rurais, montanhas, fronteiras terrestres e litoral (fiscalização marítima em coordenação com a AMN).\n\nEm RP, a GNR diferencia-se pela formação militar mais rigorosa, hierarquia mais vertical, e capacidade de resposta a situações que exigem maior poder de força. A fronteira de jurisdição com a PSP pode criar cenários de coordenação entre forças — especialmente em perseguições que atravessam áreas de competência diferente.',
          tags: ['Missão', 'Jurisdição', 'Militar'],
        },
        {
          title: 'Estrutura e Organização Interna',
          shortDesc: 'Como está organizada a GNR — postos, destacamentos e comandos.',
          content: 'A GNR organiza-se numa estrutura territorial clara:\n\n• Posto Territorial — unidade base, cobre um município ou parte dele. É o ponto de contacto direto com a população.\n• Destacamento Territorial — agrupa vários Postos, cobrindo um distrito ou área equivalente.\n• Comando Territorial — nível regional, coordena todos os Destacamentos de uma região.\n• Comando Operacional — coordenação nacional das operações.\n• Comandante-Geral — máxima autoridade, cargo de General.\n\nUnidades Especializadas: GIOE (Grupo de Intervenção de Operações Especiais), UI (Unidade de Intervenção), UAF (Unidade de Ação Fiscal), UASQ (anti-sequestro). Em RP, estas unidades podem ser convocadas para situações excecionais.',
          tags: ['Organização', 'Estrutura', 'Unidades'],
        },
        {
          title: 'Diferenças GNR vs PSP em RP',
          shortDesc: 'Quando intervém cada força e como devem coordenar.',
          content: 'As principais diferenças operacionais entre GNR e PSP em RP:\n\n• GNR: formação militar, hierarquia mais rígida, "missão" em vez de "ocorrência", tratamento militar entre elementos.\n• PSP: estrutura civil-militarizada, mais flexível em comunicação, foco em policiamento de proximidade urbano.\n\nCoordenaação: quando uma perseguição atravessa fronteiras de jurisdição, a força que iniciou mantém o comando e pede cooperação à outra. Em operações de grande escala, é designado comando conjunto com cadeia de autoridade clara.\n\nAnálise de cenário em RP: se um crime começa na cidade (PSP) e o suspeito foge para zona rural (GNR), ambas as forças podem estar envolvidas — criando RP rico de coordenação inter-forças.',
          tags: ['Coordenação', 'PSP', 'Jurisdição'],
        },
      ],
      procedimentos: [
        {
          title: 'Fiscalização Rodoviária',
          shortDesc: 'Protocolo de fiscalização em estrada — montagem de posto e abordagem.',
          content: 'A fiscalização rodoviária é uma das missões core da GNR em estradas nacionais:\n\n1. Montagem do posto de fiscalização: sinalização prévia (mínimo 150m), colete refletor, triângulo de pré-aviso, identificação clara da GNR.\n2. Sinalização do condutor para parar — braço estendido horizontalmente ou lanterna intermitente.\n3. Abordagem ao veículo imobilizado: identificação como elemento da GNR, solicitação de documentos (carta de condução, documento de identificação, documento do veículo, seguro).\n4. Verificação no sistema: validade dos documentos, inspeção periódica, mandatos.\n5. Se tudo em ordem: devolver documentos e deixar prosseguir com advertência ou nada.\n6. Se infração: comunicar a infração, emitir auto de contraordenação, comunicar ao rádio.',
          tags: ['Rodoviário', 'Fiscalização', 'Protocolo'],
        },
        {
          title: 'Operação em Zona Rural / Montanha',
          shortDesc: 'Procedimentos específicos para operações em terreno difícil.',
          content: 'Operações em zonas rurais ou montanhosas têm características únicas:\n\n• Maior autonomia decisional — reforços podem demorar muito mais tempo.\n• Comunicações rádio mais difíceis — altitude e obstáculos naturais afetam sinal.\n• Equipamento adicional — kits de primeiros socorros, GPS, lanternas, mapas físicos.\n• Coordenação com bombeiros e proteção civil em emergências.\n• Vigilância de atividade ilegal — cultivo ilegal, caça furtiva, depósitos ilegais.\n\nEm RP: estas operações criam RP isolado e tenso — a falta de reforços imediatos obriga a decisões mais ponderadas e cria narrativas mais ricas de sobrevivência e tática.',
          tags: ['Rural', 'Montanha', 'Autonomia'],
        },
      ],
      codigos: [
        { code: '10-4', description: 'Recebido / OK', severity: 'baixo', detail: 'Confirmação de receção de mensagem.' },
        { code: '10-8', description: 'Em serviço / Disponível', severity: 'baixo', detail: 'Unidade disponível para missão.' },
        { code: '10-20', description: 'Qual a tua posição?', severity: 'baixo', detail: 'Pedido de localização atual.' },
        { code: '10-23', description: 'No local', severity: 'baixo', detail: 'Chegada ao local da ocorrência.' },
        { code: '10-31', description: 'Crime em progresso', severity: 'alto', detail: 'Ocorrência ativa que requer resposta imediata.' },
        { code: '10-33', description: '⚠ EMERGÊNCIA ABSOLUTA', severity: 'critico', detail: 'Elemento em perigo de vida. Todas as unidades respondem. Canal prioritário.' },
        { code: '10-80', description: 'Perseguição em curso', severity: 'critico', detail: 'Perseguição ativa — comunicar direção, matrícula e velocidade.' },
        { code: '10-99', description: '🔴 Prioridade máxima', severity: 'critico', detail: 'Situação de vida ou morte. Resposta imediata de todas as unidades.' },
        { code: 'ALFA', description: 'Alerta máximo — prontidão total', severity: 'critico', detail: 'Todas as unidades em prontidão máxima. Situação de ameaça iminente.' },
        { code: 'BRAVO', description: 'Alerta elevado — vigilância reforçada', severity: 'alto', detail: 'Situação de risco elevado. Patrulhas reforçadas e comunicações mais frequentes.' },
        { code: 'CHARLIE', description: 'Alerta moderado', severity: 'medio', detail: 'Situação de risco moderado — atenção redobrada mas operação normal.' },
        { code: 'DELTA', description: 'Situação normalizada', severity: 'baixo', detail: 'Retorno ao estado de alerta base. Operação de rotina.' },
        { code: 'FOXTROT', description: 'Reforço imediato solicitado', severity: 'critico', detail: 'Pedido urgente de unidades adicionais para o local.' },
        { code: 'OSCAR MIKE', description: 'Em movimento para o objetivo', severity: 'medio', detail: 'Unidade em deslocação ativa para destino operacional.' },
        { code: 'ROMEO', description: 'Regresso à base / Posto', severity: 'baixo', detail: 'Unidade a regressar ao posto de origem.' },
        { code: 'SIERRA', description: 'Suspeito avistado', severity: 'alto', detail: 'Suspeito ou veículo procurado identificado — comunicar localização.' },
        { code: 'TANGO', description: 'Alvo neutralizado / Detido', severity: 'medio', detail: 'Suspeito sob custódia ou situação controlada.' },
        { code: 'WHISKEY', description: 'Ferido no local', severity: 'alto', detail: 'Elemento ferido ou vítima identificada — solicitar INEM.' },
        { code: 'ZULU', description: 'Zona segura / Limpa', severity: 'baixo', detail: 'Área verificada e declarada segura para entrada.' },
      ],
      hierarquias: [
        { rank: 1, title: 'Guarda', abbreviation: 'Grd', category: 'Guardas', description: 'Nível de entrada na GNR. Realiza patrulha em posto territorial, fiscalização rodoviária e atendimento ao público. Sempre acompanhado por elemento mais experiente nos primeiros meses.' },
        { rank: 2, title: 'Guarda Principal', abbreviation: 'Grd Ppal', category: 'Guardas', description: 'Guarda com mais experiência e autonomia. Pode liderar fiscalizações simples e servir de referência a Guardas recém-chegados.' },
        { rank: 3, title: '2º Furriel', abbreviation: '2Fur', category: 'Sargentos', description: 'Primeiro nível de Sargentos. Responsável por grupos de patrulha em missões específicas.' },
        { rank: 4, title: 'Furriel', abbreviation: 'Fur', category: 'Sargentos', description: 'Liderança de patrulha completa. Coordena guardas em ocorrências de média complexidade.' },
        { rank: 5, title: '2º Sargento', abbreviation: '2Sarg', category: 'Sargentos', description: 'Supervisor de turno. Responsável operacional pelo posto em determinados períodos.' },
        { rank: 6, title: '1º Sargento', abbreviation: '1Sarg', category: 'Sargentos', description: 'Gestão operacional do posto. Interface entre Guardas e Oficiais.' },
        { rank: 7, title: 'Sargento-Ajudante', abbreviation: 'SargAj', category: 'Sargentos', description: 'Apoio ao comando do posto. Coordena múltiplas patrulhas e garante protocolos operacionais.' },
        { rank: 8, title: 'Sargento-Chefe', abbreviation: 'SargCh', category: 'Sargentos', description: 'Chefia de toda a estrutura de sargentos do posto ou destacamento.' },
        { rank: 9, title: 'Sargento-Mor', abbreviation: 'SargMor', category: 'Sargentos', description: 'Nível máximo de Sargentos. Conselheiro técnico do comando. Muitos anos de experiência.' },
        { rank: 10, title: 'Alferes', abbreviation: 'Alf', category: 'Oficiais', description: 'Primeiro posto de Oficial. Recém-saído da Academia. Lidera secções e apoia o Tenente.' },
        { rank: 11, title: 'Tenente', abbreviation: 'Ten', category: 'Oficiais', description: 'Comanda um Posto Territorial. Responsável por toda a atividade operacional da área.' },
        { rank: 12, title: 'Capitão', abbreviation: 'Cap', category: 'Oficiais', description: 'Comanda um Destacamento. Coordena múltiplos Postos e representa a GNR na sua área.' },
        { rank: 13, title: 'Major', abbreviation: 'Maj', category: 'Oficiais Superiores', description: 'Apoio ao Comando Territorial. Responsável por áreas específicas (operações, formação, logística).' },
        { rank: 14, title: 'Tenente-Coronel', abbreviation: 'TCor', category: 'Oficiais Superiores', description: 'Comanda um Grupo Territorial ou área equivalente de um Comando.' },
        { rank: 15, title: 'Coronel', abbreviation: 'Cor', category: 'Oficiais Superiores', description: 'Comandante Territorial de uma região. Responde ao Comando Operacional.' },
        { rank: 16, title: 'Brigadeiro-General', abbreviation: 'BGen', category: 'Generais', description: 'Primeiro nível de General. Comanda unidades especializadas ou grandes regiões.' },
        { rank: 17, title: 'Major-General', abbreviation: 'MGen', category: 'Generais', description: 'Comanda Operacional. Supervisão de todas as operações nacionais.' },
        { rank: 18, title: 'General (Comandante-Geral)', abbreviation: 'Gen', category: 'Generais', description: 'Máxima autoridade da GNR. Cargo único. Responde ao Ministro da Administração Interna.' },
      ],
      abordagens: [
        {
          title: 'Abordagem Tática em Par',
          shortDesc: 'Formação de dois elementos para abordagem segura a suspeito.',
          content: 'A abordagem em par é a formação base da GNR:\n\nElemento 1 (principal): comunica com o suspeito, faz perguntas, solicita documentos. Está numa posição ligeiramente lateral — nunca diretamente à frente.\n\nElemento 2 (apoio): posiciona-se no ângulo oposto, cobre os movimentos do suspeito e observa o ambiente circundante. Não intervém na conversa a não ser que necessário.\n\nComunicação não-verbal: a dupla usa sinais discretos para comunicar sem alertar o suspeito — batida no colete, posição da mão, direção do olhar.\n\nEm RP: esta dinâmica cria RP muito mais rico — dois jogadores coordenados, com papéis claros, em vez de um agente a fazer tudo sozinho.',
          tags: ['Tático', 'Formação', 'Par'],
        },
        {
          title: 'Operação de Vigilância Disfarçada',
          shortDesc: 'Protocolo para vigilância de suspeitos sem se revelar.',
          content: 'Operações de vigilância disfarçada são das mais exigentes em RP:\n\n• Vestuário civil — nada que revele ser GNR. Veículo não-identificado.\n• Comunicações discretas — rádio a volume mínimo, linguagem codificada.\n• Rotação de elementos — trocar quem está a fazer vigilância direta para não ser detetado.\n• Documentação de movimentos — anotar entradas, saídas, contactos.\n• Linha de autoridade clara — quem autoriza a intervenção se algo acontecer.\n\nEm RP: estas operações criam narrativas longas e envolventes — não é tudo ação imediata. A paciência e o detalhe são parte do RP.',
          tags: ['Vigilância', 'Disfarce', 'Investigação'],
        },
      ],
      situacoes: [
        {
          title: 'Controlo de Fronteira Terrestre',
          shortDesc: 'Protocolo de verificação sistemática em posto de fronteira.',
          content: 'O controlo de fronteira terrestre pela GNR segue protocolos específicos:\n\n1. Verificação documental: passaporte/cartão de cidadão, visto se aplicável, documento do veículo.\n2. Declaração de bens: verificar se há bens a declarar, especialmente em entradas de países fora do espaço Schengen.\n3. Verificação de veículo: inspeção visual exterior, eventualmente com cão detetor.\n4. Consulta de bases de dados: pessoas e veículos procurados, alertas Schengen.\n5. Irregularidades: acionar SEF (Serviço de Estrangeiros e Fronteiras) imediatamente para situações de imigração ilegal.\n6. Comunicar ao rádio e registar todas as ocorrências.',
          tags: ['Fronteira', 'Documentação', 'SEF'],
        },
        {
          title: 'Apoio em Incêndio Florestal',
          shortDesc: 'Papel da GNR em operações de combate e evacuação de incêndios.',
          content: 'Em incêndios florestais, a GNR tem papel fundamental:\n\n1. Evacuação de populações — identificar zonas de risco, ordenar evacuação, apoiar em deslocação.\n2. Gestão de trânsito — abrir corredores para meios de combate, fechar estradas de risco.\n3. Coordenação com Bombeiros e ANEPC (Autoridade Nacional de Emergência e Proteção Civil).\n4. Investigação da origem — preservar evidências de eventual incêndio criminoso.\n5. Segurança do perímetro — impedir entrada de civis em zonas de perigo.\n6. Vigilância pós-incêndio — patrulha para prevenir reacendimentos e furtos em propriedades evacuadas.',
          tags: ['Incêndio', 'Evacuação', 'Proteção Civil'],
        },
      ],
    },
  },

  {
    id: 'inem',
    name: 'Instituto Nacional de Emergência Médica',
    shortName: 'INEM',
    description: 'Entidade pública responsável pela coordenação do Sistema Integrado de Emergência Médica (SIEM) em Portugal, incluindo triagem, transporte e coordenação de meios de socorro.',
    color: '#b45309',
    accentColor: '#f59e0b',
    icon: '🚑',
    sections: {
      guias: [
        {
          title: 'O INEM em Roleplay — Missão e Estrutura',
          shortDesc: 'Como funciona o INEM em RP, que meios tem e qual a sua missão.',
          content: 'O INEM é a corporação médica do servidor. A sua missão é a coordenação e execução da emergência médica pré-hospitalar — o que acontece ANTES de chegar ao hospital. Em RP, o INEM responde a todas as emergências médicas: acidentes, tiroteios com feridos, quedas, overdoses, situações cardíacas, etc.\n\nMeios do INEM:\n• Ambulância SBV (Suporte Básico de Vida) — tripulada por Técnicos de Emergência\n• Ambulância SIV (Suporte Imediato de Vida) — Técnico Sénior + Enfermeiro\n• VMER (Viatura Médica de Emergência e Reanimação) — Enfermeiro + Médico, responde a casos críticos\n• Motociclo de Emergência — chegada rápida ao local, estabilização inicial\n\nCODU (Centro de Orientação de Doentes Urgentes): o centro de coordenação que recebe chamadas de emergência e ativa os meios adequados. Em RP, pode ser simulado por um elemento no rádio a coordenar.',
          tags: ['Missão', 'Meios', 'CODU', 'VMER'],
        },
        {
          title: 'Princípios Médicos Básicos para RP',
          shortDesc: 'Conhecimento médico mínimo para fazer RP de INEM com qualidade.',
          content: 'Para um RP médico de qualidade, alguns conceitos fundamentais:\n\nAbordagem ABCDE (sequência de avaliação do doente):\n• A — Airway (via aérea): está aberta? Há obstrução?\n• B — Breathing (respiração): o doente respira? Frequência e qualidade?\n• C — Circulation (circulação): pulso presente? Hemorragias?\n• D — Disability (neurológico): estado de consciência (Escala de Glasgow).\n• E — Exposure (exposição): verificar todo o corpo para ferimentos ocultos.\n\nEscala de Glasgow (simplificada para RP):\n• 15 — Consciente, orientado\n• 9-14 — Alteração do estado de consciência\n• 3-8 — Coma\n• <8 — Entubação necessária\n\nEstes conceitos tornam o RP médico muito mais imersivo e realista.',
          tags: ['ABCDE', 'Glasgow', 'Protocolo Clínico'],
        },
        {
          title: 'Segurança na Cena — Regra Fundamental',
          shortDesc: 'O INEM nunca entra numa cena insegura — protocolo de coordenação com polícia.',
          content: 'A regra de ouro do INEM: a cena tem de ser SEGURA antes de entrar. Um técnico ferido é mais uma vítima — não é ajuda.\n\nProtocolo de cena insegura:\n1. Aguardar que a PSP/GNR declare a cena segura.\n2. Permanecer a distância segura com meios prontos.\n3. Comunicar ao CODU o estado da cena.\n4. Estabelecer CCP (Casualty Collection Point) fora da zona de perigo.\n5. Aceitar apenas vítimas que possam ser trazidas em segurança.\n\nEm tiroteios ativos: em nenhuma circunstância o INEM entra na zona quente. Coordenar com a polícia para que as vítimas sejam movidas para zona segura antes de tratar.\n\nEm RP: esta regra cria ótima dinâmica — o INEM aguardando, a polícia a trabalhar, comunicação constante.',
          tags: ['Segurança', 'CCP', 'Tiroteio', 'Protocolo'],
        },
      ],
      procedimentos: [
        {
          title: 'Triagem START — Múltiplas Vítimas',
          shortDesc: 'Sistema de triagem para cenários com várias vítimas simultâneas (MCI).',
          content: 'A triagem START (Simple Triage And Rapid Treatment) é usada quando há mais vítimas do que meios disponíveis imediatamente:\n\n🔴 VERMELHO — Imediato: vítimas com lesões graves mas sobrevivência possível com tratamento rápido. Prioridade 1.\n🟡 AMARELO — Urgente: lesões significativas mas estáveis. Podem aguardar mais tempo. Prioridade 2.\n🟢 VERDE — Menor: ferimentos leves, podem aguardar e até ajudar. Prioridade 3.\n⬛ PRETO — Óbito / Expectante: sem sinais vitais ou lesões incompatíveis com sobrevivência mesmo com recursos ilimitados.\n\nEm RP MCI: cada técnico avalia rapidamente, etiqueta as vítimas (dizer a cor em voz alta) e passa para a próxima. Não se trata ninguém na fase de triagem — avalia-se e tag-eia. O tratamento começa depois.',
          tags: ['START', 'Triagem', 'MCI', 'Massivas'],
        },
        {
          title: 'Protocolo de Hemorragia Grave',
          shortDesc: 'Como controlar hemorragias severas — prioridade absoluta.',
          content: 'Hemorragia grave é a principal causa de morte evitável no pré-hospitalar:\n\nPassos:\n1. Pressão direta — compressa sobre a ferida, pressão firme contínua. Não levantar para ver.\n2. Torniquete (extremidades) — se a pressão não controla, aplicar torniquete 5-7cm acima da ferida. Registar hora de aplicação.\n3. Penso hemostático — em feridas de junções (virilha, axila) onde o torniquete não é aplicável.\n4. Pelagem corporal — verificar se há mais hemorragias ocultas.\n\nEm RP: o técnico anuncia em voz alta o que está a fazer, o tipo de hemorragia, e pede cooperação do doente/outros elementos. Cria Pain RP natural para quem está ferido.',
          tags: ['Hemorragia', 'Torniquete', 'Hemostase'],
        },
        {
          title: 'Comunicação Médica ao Hospital',
          shortDesc: 'Como reportar um doente ao hospital antes da chegada.',
          content: 'A comunicação pré-hospitalar ao hospital é crítica — permite preparação atempada:\n\nFormato SBAR:\n• S (Situação): "Transportamos um homem de ~30 anos, GSW (gunshot wound) no tórax direito."\n• B (Background): "Vítima de tiroteio, encontrado inconsciente. Testemunhas referem 2 tiros."\n• A (Avaliação): "GCS 8, TA 80/50, FC 130, SpO2 85%, entubado, 2 acessos venosos, 1000cc cristaloides."\n• R (Recomendação): "Pedimos equipa de trauma e sala de emergência preparada. ETA 5 minutos."\n\nEm RP: este protocolo cria RP rico entre o INEM e o hospital — quem está no hospital pode preparar o cenário, instrumentos, equipa.',
          tags: ['SBAR', 'Hospital', 'Comunicação'],
        },
      ],
      codigos: [
        { code: 'ALFA', description: 'Paragem cardiorrespiratória — PCR confirmada', severity: 'critico', detail: 'Doente sem pulso e sem respiração. Ativar VMER imediatamente. Iniciar RCR.' },
        { code: 'BRAVO', description: 'Emergência com risco de vida iminente', severity: 'critico', detail: 'Doente com sinais vitais presentes mas situação instável e deterioração rápida.' },
        { code: 'CHARLIE', description: 'Urgência — tratamento necessário em menos de 1h', severity: 'alto', detail: 'Situação significativa mas estável. Resposta rápida mas sem sirene obrigatória.' },
        { code: 'DELTA', description: 'Semi-urgência — pode aguardar', severity: 'medio', detail: 'Doente estável, situação não crítica. Transporte programado.' },
        { code: 'ECHO', description: 'Não urgente', severity: 'baixo', detail: 'Situação que não requer resposta de emergência.' },
        { code: 'MCI', description: 'Mass Casualty Incident — múltiplas vítimas', severity: 'critico', detail: 'Número de vítimas supera a capacidade imediata dos meios. Ativar protocolo de triagem START.' },
        { code: 'DOA', description: 'Dead On Arrival — óbito no local', severity: 'critico', detail: 'Vítima declarada óbita à chegada dos meios. Preservar local para PJ/policia.' },
        { code: 'GCS', description: 'Glasgow Coma Scale — avaliação neurológica', severity: 'medio', detail: 'Escala de 3 a 15. Comunicar número: "GCS 8" significa coma ligeiro.' },
        { code: 'PCR', description: 'Paragem Cardiorrespiratória', severity: 'critico', detail: 'Sem pulso e sem respiração. Início imediato de RCR.' },
        { code: 'RCR', description: 'Ressuscitação Cardiorrespiratória', severity: 'critico', detail: 'Protocolo de reanimação — compressões torácicas + ventilação.' },
        { code: 'TA', description: 'Tensão Arterial', severity: 'medio', detail: 'Valores normais: 120/80. Abaixo de 90/60 = choque.' },
        { code: 'SpO2', description: 'Saturação periférica de oxigénio', severity: 'medio', detail: 'Normal >95%. Abaixo de 90% = hipoxemia grave.' },
        { code: 'GSW', description: 'Gunshot Wound — ferimento por arma de fogo', severity: 'critico', detail: 'Reportar localização do ferimento, entrada/saída, sinais vitais.' },
        { code: 'ETA', description: 'Estimated Time of Arrival — tempo estimado de chegada', severity: 'baixo', detail: 'Comunicar ao hospital para preparação.' },
        { code: 'CCP', description: 'Casualty Collection Point', severity: 'alto', detail: 'Ponto de recolha de vítimas fora da zona de perigo. Estabelecido em situações com risco continuado.' },
      ],
      hierarquias: [
        { rank: 1, title: 'Técnico de Emergência de Saúde (TES)', abbreviation: 'TES', category: 'Técnicos', description: 'Nível de entrada. Tripula ambulâncias SBV (Suporte Básico de Vida). Realiza RCR, controlo de hemorragias, imobilizações, transporte. Trabalha sempre em par.' },
        { rank: 2, title: 'Técnico de Emergência de Saúde Sénior (TESS)', abbreviation: 'TESS', category: 'Técnicos', description: 'TES com formação avançada. Tripula ambulâncias SIV, pode realizar procedimentos mais avançados. Lidera a equipa de técnicos na ambulância.' },
        { rank: 3, title: 'Técnico de Emergência Pré-Hospitalar (TEPH)', abbreviation: 'TEPH', category: 'Técnicos', description: 'Nível de técnico mais avançado. Pode coordenar múltiplas equipas em cenários MCI. Acesso a procedimentos de nível intermédio.' },
        { rank: 4, title: 'Enfermeiro de Emergência', abbreviation: 'Enf', category: 'Clínica', description: 'Elemento clínico nas ambulâncias SIV e VMER. Autoriza e administra medicação. Liderança clínica no terreno em situações intermédias.' },
        { rank: 5, title: 'Médico de Emergência INEM', abbreviation: 'Med', category: 'Clínica', description: 'Tripula a VMER. Máxima autoridade clínica no terreno. Declara óbito. Toma decisões terapêuticas definitivas. Coordena a equipa em situações críticas.' },
        { rank: 6, title: 'Médico Regulador CODU', abbreviation: 'Reg', category: 'Coordenação', description: 'Médico no CODU que recebe e triagem chamadas de emergência. Ativa os meios adequados a cada ocorrência. Orienta doentes para hospitais com capacidade.' },
        { rank: 7, title: 'Diretor Médico Regional', abbreviation: 'DMR', category: 'Direção', description: 'Responsável pelo CODU regional e coordenação de meios de uma região.' },
        { rank: 8, title: 'Diretor de Emergência Médica Nacional', abbreviation: 'DEM', category: 'Direção', description: 'Máxima autoridade médica do INEM. Coordena o sistema nacional, política de saúde pré-hospitalar e protocolos clínicos.' },
      ],
      abordagens: [
        {
          title: 'Doente Traumatizado — Abordagem Primária',
          shortDesc: 'Como abordar uma vítima de trauma em cenário RP.',
          content: 'Na abordagem a um doente traumatizado:\n\n1. Segurança da cena — só entrar quando declarada segura.\n2. Imobilização cervical — coluna cervical protegida desde o primeiro contacto.\n3. Avaliação ABCDE — rápida, sistemática, comunicada em voz alta para o parceiro registar.\n4. Controlo de hemorragias visíveis — prioridade 1 na circulação.\n5. Acesso venoso — preparar soro e medicação enquanto avalia.\n6. Comunicar ao CODU — GCS, lesões identificadas, sinais vitais, necessidade de VMER.\n7. Preparar transporte — posição de conforto/segurança conforme lesão.\n\nEm RP: cada passo anunciado em voz alta cria o RP — o doente reage (Pain RP), a equipa comunica, a cena tem vida.',
          tags: ['Trauma', 'ABCDE', 'Cervical', 'RCR'],
        },
      ],
      situacoes: [
        {
          title: 'Tiroteio com Múltiplas Vítimas',
          shortDesc: 'Resposta INEM a cenário de tiroteio com vítimas dispersas.',
          content: 'Protocolo INEM em tiroteio com vítimas:\n\n1. Aguardar declaração de cena segura pela polícia. Nunca entrar em zona quente.\n2. Estabelecer CCP (Casualty Collection Point) a distância segura.\n3. Ativar protocolo MCI — solicitar todos os meios disponíveis via CODU.\n4. Triagem START assim que as vítimas chegam ao CCP.\n5. Distribuir vítimas Vermelhas pelos meios VMER e SIV disponíveis.\n6. Comunicar ao hospital receptor — número de vítimas, tipos de lesões, ETA.\n7. Após evacuação de Vermelhas, tratar Amarelos e depois Verdes.\n8. Preservar cadeia de custódia de provas — não remover projéteis sem autorização forense.',
          tags: ['MCI', 'Tiroteio', 'CCP', 'Triagem'],
        },
        {
          title: 'Acidente de Viação com Desencarceramento',
          shortDesc: 'Protocolo INEM em acidentes graves com vítimas presas.',
          content: 'Quando há vítimas presas em veículos:\n\n1. Avaliação do veículo — estabilizar antes de tocar (cunhas, desligar ignição).\n2. Coordenação com bombeiros — são eles a fazer o desencarceramento.\n3. INEM faz estabilização médica enquanto bombeiros cortam o veículo.\n4. Imobilização cervical antes e durante extração — fundamental.\n5. Linha IV estabelecida antes da extração se possível.\n6. Extração coordenada — INEM e bombeiros em simultâneo, zero movimentos desnecessários.\n7. Triagem de outras vítimas do acidente durante o processo.',
          tags: ['Desencarceramento', 'Bombeiros', 'Extração', 'Trauma'],
        },
      ],
    },
  },

  {
    id: 'militar',
    name: 'Exército Português',
    shortName: 'EP',
    description: 'Ramo das Forças Armadas responsável pela defesa terrestre do território nacional. Em RP, intervém em missões de apoio às forças de segurança, exercícios, operações de emergência e situações que ultrapassem a capacidade policial.',
    color: '#7c2d12',
    accentColor: '#ea580c',
    icon: '🪖',
    sections: {
      guias: [
        {
          title: 'O Exército em Contexto RP',
          shortDesc: 'Quando e como o Exército intervém no servidor e qual o seu papel.',
          content: 'O Exército Português em RP opera dentro de um contexto muito específico — não é uma força policial e não substitui a PSP ou GNR no quotidiano. A sua intervenção é exceptcional e ocorre em cenários concretos:\n\n• Apoio às forças de segurança em situações que ultrapassam a capacidade policial (grandes ameaças, situações de crise nacional)\n• Exercícios militares e treinos operacionais\n• Apoio em catástrofes e emergências civis (cooperação com Proteção Civil)\n• Missões de segurança em instalações críticas\n• Cenários de invasão ou ameaça externa (RP de ficção avançado)\n\nA hierarquia é absolutamente rígida — ordens de superiores são cumpridas sem discussão em cenário operacional. Em RP, isso cria uma dinâmica muito diferente das forças policiais.',
          tags: ['Contexto', 'Missão', 'Intervenção'],
        },
        {
          title: 'Disciplina e Cultura Militar',
          shortDesc: 'Como se comporta um militar — tratamento, postura e protocolo.',
          content: 'A cultura militar distingue-se completamente da civil:\n\nTratamento: oficiais são tratados pela patente ("Meu Tenente", "Meu Capitão"). Sargentos por "Senhor Sargento-Mor" ou similar. Praças por nomes ou número.\n\nPostura: atenção firme perante superior, saudação ao entrar em zonas militares, nunca sentar sem autorização em presença de oficial.\n\nDisciplina operacional: em missão, é silêncio absoluto exceto comunicações essenciais. Formações são mantidas. Ninguém age por iniciativa própria sem ordem.\n\nROE (Regras de Empenhamento): definem quando e como a força pode ser usada. São estabelecidas no briefing antes de cada missão e nunca podem ser violadas.\n\nEm RP: estes elementos criam uma experiência completamente imersiva e única.',
          tags: ['Disciplina', 'Protocolo', 'ROE', 'Cultura'],
        },
        {
          title: 'Alfaneto Fonético — NATO (PT)',
          shortDesc: 'Alfabeto fonético NATO usado pelas Forças Armadas e forças de segurança.',
          content: 'O alfabeto fonético NATO é o padrão internacional usado pelas Forças Armadas portuguesas e, em grande parte, pelas forças de segurança:\n\nA — Alfa | B — Bravo | C — Charlie | D — Delta | E — Echo | F — Foxtrot | G — Golf | H — Hotel | I — India | J — Juliett | K — Kilo | L — Lima | M — Mike | N — November | O — Oscar | P — Papa | Q — Quebec | R — Romeo | S — Sierra | T — Tango | U — Uniform | V — Victor | W — Whiskey | X — X-Ray | Y — Yankee | Z — Zulu\n\nNúmeros: pronunciados individualmente: 1 = Wun, 2 = Too, 3 = Tree, 4 = Fow-er, 5 = Fife, 6 = Six, 7 = Seven, 8 = Ait, 9 = Nin-er, 0 = Ze-ro\n\nUso: matrículas (Alpha-Bravo-Zulu 1-2-3), coordenadas, nomes em comunicações rádio.',
          tags: ['NATO', 'Fonético', 'Comunicações', 'Padrão'],
        },
      ],
      procedimentos: [
        {
          title: 'Briefing Operacional — Formato OPORD',
          shortDesc: 'Como fazer um briefing militar antes de uma missão.',
          content: 'O OPORD (Operation Order) é o formato padrão de briefing militar:\n\n1. SITUAÇÃO: contexto da missão, forças inimigas, forças amigas, ambiente.\n2. MISSÃO: o QUÊ, QUEM, QUANDO, ONDE e PORQUÊ. Frase curta e clara.\n3. EXECUÇÃO: como a missão vai ser cumprida — fases, objetivos parciais, ações em caso de contingência.\n4. APOIO E LOGÍSTICA: meios disponíveis, munições, comunicações, meios médicos.\n5. COMANDO E CONTROLO: cadeia de comando, localização do comandante, protocolos de comunicação.\n\nEm RP: um briefing bem conduzido com este formato cria imensa imersão e prepara toda a equipa para o que vem a seguir.',
          tags: ['OPORD', 'Briefing', 'Missão'],
        },
        {
          title: 'ROE — Regras de Empenhamento',
          shortDesc: 'Quando e como a força pode ser usada — o limite legal da intervenção.',
          content: 'As ROE (Rules of Engagement) definem o enquadramento legal e operacional do uso de força:\n\nROE Standard em apoio a forças civis:\n• A força só é usada quando diretamente ameaçados ou em defesa de civis em risco de vida imediato.\n• Identificação obrigatória antes do empenhamento.\n• Proporcionalidade sempre — mínimo de força necessária.\n• Prisioneiros e feridos têm direito a tratamento humano.\n• Civis e bens civis não são alvos.\n\nROE de Combate (só em missões de ficção avançada):\n• Definidas no OPORD com objetivos específicos.\n• Nunca se age fora das ROE sem ordem expressa do comandante.\n\nViolação das ROE = disciplina militar interna e possível processo.',
          tags: ['ROE', 'Força', 'Legal', 'Protocolo'],
        },
      ],
      codigos: [
        { code: 'SITREP', description: 'Situation Report — relatório de situação atual', severity: 'baixo', detail: 'Comunicação periódica da situação da unidade: localização, estado, próxima ação.' },
        { code: 'CASEVAC', description: 'Casualty Evacuation — evacuação de baixas em combate', severity: 'critico', detail: 'Evacuação de feridos de zona de combate. Prioridade: mover para zona segura rapidamente, tratar depois.' },
        { code: 'MEDEVAC', description: 'Medical Evacuation — evacuação médica programada', severity: 'alto', detail: 'Evacuação com cuidados médicos durante transporte. Mais organizado que CASEVAC.' },
        { code: 'OPORD', description: 'Operation Order — ordem de operações', severity: 'medio', detail: 'Briefing completo da missão no formato padronizado.' },
        { code: 'FRAGO', description: 'Fragmentary Order — ordem fragmentada', severity: 'medio', detail: 'Atualização rápida de uma OPORD em curso — mudança de situação.' },
        { code: 'OSCAR MIKE', description: 'On the Move — em movimento para objetivo', severity: 'baixo', detail: 'Unidade em deslocação ativa.' },
        { code: 'LIMA CHARLIE', description: 'Loud and Clear — a ouvir bem', severity: 'baixo', detail: 'Sinal e mensagem perfeitamente percebidos.' },
        { code: 'WILCO', description: 'Will Comply — recebido, vou cumprir', severity: 'baixo', detail: 'Confirmação de ordem recebida e que será executada.' },
        { code: 'ROGER', description: 'Recebido e compreendido', severity: 'baixo', detail: 'Confirmação de receção. Não implica cumprimento — diferente de WILCO.' },
        { code: 'NEGATIVE', description: 'Negativo — não / impossível', severity: 'baixo', detail: 'Resposta negativa a questão ou pedido.' },
        { code: 'AFFIRMATIVE', description: 'Afirmativo — sim / confirmado', severity: 'baixo', detail: 'Resposta positiva. Mais preciso que "Sim".' },
        { code: 'BRAVO ZULU', description: 'Bem feito / Bom trabalho', severity: 'baixo', detail: 'Elogio por trabalho bem executado.' },
        { code: 'FUBAR', description: 'Situação gravemente comprometida', severity: 'critico', detail: 'Situação fora de controlo. Requer improvisação e reporte imediato.' },
        { code: 'SNAFU', description: 'Situação anormal mas controlável', severity: 'medio', detail: 'Coisas correm mal mas é gerível — "business as usual".' },
        { code: 'CHECKPOINT', description: 'Objetivo parcial atingido', severity: 'baixo', detail: 'Comunicar chegada a ponto de controlo intermédio da missão.' },
        { code: 'ENDEX', description: 'End of Exercise — fim de exercício', severity: 'baixo', detail: 'Encerramento de exercício ou simulação.' },
      ],
      hierarquias: [
        { rank: 1, title: 'Soldado Recruta', abbreviation: 'SldRec', category: 'Praças', description: 'Em instrução básica. Sem autonomia operacional — aprende procedimentos, disciplina e formações.' },
        { rank: 2, title: 'Soldado', abbreviation: 'Sld', category: 'Praças', description: 'Concluiu instrução básica. Elemento de base da unidade. Cumpre ordens, aprende em contexto operacional.' },
        { rank: 3, title: '2º Furriel', abbreviation: '2Fur', category: 'Sargentos', description: 'Primeiro posto de Sargento. Lidera grupo de 4-8 soldados em missão. Responsável por material e disciplina do grupo.' },
        { rank: 4, title: 'Furriel', abbreviation: 'Fur', category: 'Sargentos', description: 'Lidera secção de combate. Mais experiência e autonomia tática.' },
        { rank: 5, title: '2º Sargento', abbreviation: '2Sarg', category: 'Sargentos', description: 'Sargento de pelotão. Apoia o Tenente na gestão e disciplina do pelotão.' },
        { rank: 6, title: '1º Sargento', abbreviation: '1Sarg', category: 'Sargentos', description: 'Sargento sénior de companhia. Interface entre Sargentos e Capitão. Grande experiência operacional.' },
        { rank: 7, title: 'Sargento-Ajudante', abbreviation: 'SargAj', category: 'Sargentos', description: 'Funções de estado-maior a nível de batalhão. Especialista técnico ou administrativo.' },
        { rank: 8, title: 'Sargento-Mor', abbreviation: 'SargMor', category: 'Sargentos', description: 'Nível mais elevado de Sargentos. Conselheiro do comandante. Figura de grande respeito e experiência.' },
        { rank: 9, title: 'Aspirante', abbreviation: 'Asp', category: 'Oficiais', description: 'Em formação na Academia Militar. Ainda não é Oficial pleno — acompanha e aprende.' },
        { rank: 10, title: 'Alferes', abbreviation: 'Alf', category: 'Oficiais', description: 'Primeiro posto de Oficial. Comanda secção ou pelotão com apoio de Sargento experiente.' },
        { rank: 11, title: 'Tenente', abbreviation: 'Ten', category: 'Oficiais', description: 'Comanda pelotão (30-40 soldados). Responsabilidade tática no terreno.' },
        { rank: 12, title: 'Capitão', abbreviation: 'Cap', category: 'Oficiais', description: 'Comanda companhia (100-200 soldados). Planeia e executa operações de nível tático médio.' },
        { rank: 13, title: 'Major', abbreviation: 'Maj', category: 'Oficiais Superiores', description: 'Comanda batalhão ou exerce funções de Estado-Maior. Planeamento operacional.' },
        { rank: 14, title: 'Tenente-Coronel', abbreviation: 'TCor', category: 'Oficiais Superiores', description: 'Comanda batalhão/regimento. Liderança de operações de média/grande escala.' },
        { rank: 15, title: 'Coronel', abbreviation: 'Cor', category: 'Oficiais Superiores', description: 'Comanda brigada ou regimento. Responsabilidade estratégica de área.' },
        { rank: 16, title: 'Brigadeiro-General', abbreviation: 'BGen', category: 'Generais', description: 'Comanda brigada reforçada ou grande unidade especializada.' },
        { rank: 17, title: 'Major-General', abbreviation: 'MGen', category: 'Generais', description: 'Comanda divisão ou exerce funções no Estado-Maior do Exército.' },
        { rank: 18, title: 'Tenente-General', abbreviation: 'TGen', category: 'Generais', description: 'Comanda corpo de exército. Segundo posto mais elevado.' },
        { rank: 19, title: 'General (CEME)', abbreviation: 'Gen', category: 'Generais', description: 'Chefe do Estado-Maior do Exército. Máxima autoridade do Exército Português. Cargo único.' },
      ],
      abordagens: [
        {
          title: 'Formações de Combate',
          shortDesc: 'Formações táticas básicas usadas em deslocamento e combate.',
          content: 'Formações táticas fundamentais para RP militar:\n\n• COLUNA: elementos um atrás do outro. Máxima velocidade de deslocamento, mínima cobertura. Para terreno seguro.\n• LINHA: todos lado a lado. Máxima potência de fogo frontal, velocidade reduzida. Para assalto.\n• CUNHA: forma de V com líder na ponta. Equilíbrio entre fogo e manobra. Mais comum em terreno desconhecido.\n• ESCALONAMENTO: todos em diagonal. Proteção de flancos, útil em florestas.\n• PELE DE COBRA: dois elementos alternam cobertura enquanto o outro avança.\n\nEm RP: nomear a formação antes de se mover cria imersão imediata. "Cunha — avança!"',
          tags: ['Formações', 'Tático', 'Combate'],
        },
      ],
      situacoes: [
        {
          title: 'Apoio às Forças de Segurança',
          shortDesc: 'Como o Exército coordena com PSP/GNR em operações conjuntas.',
          content: 'Quando o Exército apoia forças de segurança:\n\n1. Briefing conjunto obrigatório antes da operação — quem comanda o quê.\n2. Cadeia de autoridade clara: em território nacional, a autoridade civil prevalece sobre a militar excepto em situações decretadas.\n3. ROE alinhadas: o Exército adota as ROE da operação conjunta.\n4. Comunicações: canal partilhado definido no briefing, com elementos de ligação (Liaison Officers).\n5. Separação de funções: Exército não substitui polícia — apoia e reforça onde necessário.\n6. Debriefing conjunto no final: avaliar o que correu bem e mal.',
          tags: ['Coordenação', 'PSP', 'GNR', 'Conjunto'],
        },
      ],
    },
  },

  {
    id: 'policia-militar',
    name: 'Polícia Militar',
    shortName: 'PM',
    description: 'Força especializada das Forças Armadas com funções de polícia dentro do ambiente militar. Garante a ordem, disciplina e segurança nas instalações e operações militares.',
    color: '#1e3a5f',
    accentColor: '#2563eb',
    icon: '🎖️',
    sections: {
      guias: [
        {
          title: 'Missão da Polícia Militar',
          shortDesc: 'O papel único da PM — policia dentro do universo militar.',
          content: 'A Polícia Militar é o braço policial das Forças Armadas. A sua missão é garantir a ordem, disciplina e segurança dentro das instalações militares, em operações e no apoio ao tráfego e deslocamentos militares.\n\nÁreas de atuação:\n• Controlo de acesso a instalações militares\n• Manutenção da disciplina dentro das forças\n• Investigação de crimes cometidos por militares ou em instalações militares\n• Escolta de personalidades e material sensível\n• Gestão de prisioneiros de guerra (em contextos de ficção)\n• Apoio ao tráfego em movimentos de coluna\n\nA PM tem autoridade sobre todos os militares — independentemente da patente — em matérias de ordem e disciplina. Um Sargento da PM pode, em determinadas circunstâncias, deter um General.',
          tags: ['Missão', 'Autoridade', 'Disciplina'],
        },
      ],
      procedimentos: [
        {
          title: 'Controlo de Acesso a Instalações',
          shortDesc: 'Protocolo de verificação e controlo de entradas e saídas.',
          content: 'O controlo de acesso é a missão mais visível da PM:\n\n1. Verificação de identificação — todos sem exceção, incluindo oficiais superiores.\n2. Registo de entrada — nome, unidade, motivo, hora, autorização.\n3. Visitantes civis — escolta obrigatória dentro da instalação.\n4. Veículos — verificação de credencial e eventualmente inspeção ao habitáculo.\n5. Saída de material — autorização documentada para qualquer material que saia.\n6. Protocolos de emergência — lockdown: fechar todos os acessos, impedir entradas e saídas, comunicar ao comando.',
          tags: ['Acesso', 'Controlo', 'Segurança'],
        },
        {
          title: 'Detenção de Militar em Serviço',
          shortDesc: 'Como a PM procede à detenção de um elemento militar.',
          content: 'A detenção de militares segue protocolo específico:\n\n1. Comunicar ao superior hierárquico do detido — a cadeia de comando é informada.\n2. Identificação clara da PM e motivo da detenção.\n3. Separar o detido do restante pessoal — evitar confronto ou envolvimento de outros.\n4. Acompanhar ao posto de PM — nunca deixar sozinho.\n5. Registo completo — o quê, quando, onde, porquê, quem estava presente.\n6. Comunicar ao Adjunto do Comandante — qualquer detenção sobe pela hierarquia.\n7. Direitos do detido — mesmo militares têm direito a assistência jurídica.',
          tags: ['Detenção', 'Protocolo', 'Militar'],
        },
      ],
      codigos: [
        { code: 'PM-VERDE', description: 'Instalação em estado normal', severity: 'baixo', detail: 'Acesso normal, sem restrições especiais.' },
        { code: 'PM-AMARELO', description: 'Alerta — verificação reforçada', severity: 'medio', detail: 'Verificação adicional de todos os acessos. Vigilância aumentada.' },
        { code: 'PM-LARANJA', description: 'Alerta elevado — restrição de acessos', severity: 'alto', detail: 'Apenas pessoal autorizado específico. Escolta obrigatória.' },
        { code: 'PM-VERMELHO', description: 'LOCKDOWN — instalação fechada', severity: 'critico', detail: 'Nenhuma entrada ou saída. Pessoal confinado aos postos. Comunicar ao Comando.' },
        { code: 'PM-1', description: 'Acesso autorizado', severity: 'baixo', detail: 'Identificação verificada, entrada permitida.' },
        { code: 'PM-2', description: 'Acesso negado — situação irregular', severity: 'alto', detail: 'Identificação não válida, autorização em falta ou pessoa em lista de restrição.' },
        { code: 'PM-3', description: 'Intrusão em curso', severity: 'critico', detail: 'Entrada não autorizada detetada. Resposta imediata e lockdown.' },
        { code: 'PM-4', description: 'Situação controlada', severity: 'baixo', detail: 'Incidente resolvido, regresso ao estado normal.' },
        { code: 'PM-5', description: 'Reforço solicitado no posto X', severity: 'alto', detail: 'Necessidade de elementos adicionais num ponto de controlo.' },
      ],
      hierarquias: [
        { rank: 1, title: 'Soldado PM', abbreviation: 'SldPM', category: 'Praças', description: 'Nível de entrada. Patrulha de instalação, controlo de acesso em pontos simples.' },
        { rank: 2, title: 'Cabo PM', abbreviation: 'CbPM', category: 'Praças', description: 'Lidera ponto de controlo. Responsável por 2-4 soldados num acesso.' },
        { rank: 3, title: '2º Sargento PM', abbreviation: '2SargPM', category: 'Sargentos', description: 'Supervisor de turno. Gere todos os pontos de controlo num período.' },
        { rank: 4, title: '1º Sargento PM', abbreviation: '1SargPM', category: 'Sargentos', description: 'Sargento sénior. Coordena operações da PM numa instalação.' },
        { rank: 5, title: 'Sargento-Mor PM', abbreviation: 'SargMorPM', category: 'Sargentos', description: 'Chefe de todos os Sargentos PM. Conselheiro do Comandante.' },
        { rank: 6, title: 'Alferes PM', abbreviation: 'AlfPM', category: 'Oficiais', description: 'Primeiro Oficial PM. Supervisão de área de segurança.' },
        { rank: 7, title: 'Tenente PM', abbreviation: 'TenPM', category: 'Oficiais', description: 'Comanda posto de PM. Responsável operacional pelo dia-a-dia da segurança.' },
        { rank: 8, title: 'Capitão PM', abbreviation: 'CapPM', category: 'Oficiais', description: 'Comanda destacamento PM. Cobre múltiplas instalações ou área extensa.' },
        { rank: 9, title: 'Major PM', abbreviation: 'MajPM', category: 'Oficiais Superiores', description: 'Comando de unidade PM. Planeamento de segurança de instalações militares.' },
        { rank: 10, title: 'Coronel PM', abbreviation: 'CorPM', category: 'Oficiais Superiores', description: 'Comandante da Polícia Militar nacional. Máxima autoridade PM.' },
      ],
      abordagens: [
        {
          title: 'Inspeção de Veículo em Acesso',
          shortDesc: 'Protocolo de inspeção de veículos que entram em instalação militar.',
          content: 'Inspeção de veículo em ponto de controlo:\n\n1. Sinalizar o condutor para parar antes da barreira.\n2. Solicitar credencial do condutor e de todos os ocupantes.\n3. Verificar no sistema se há restrições ou alertas.\n4. Inspecionar o exterior do veículo visualmente — danos, objetos suspeitos.\n5. Em caso de suspeita: solicitar abertura de porta-bagagens e habitáculo.\n6. Cão detetor se disponível e protocolo o indicar.\n7. Se tudo OK: emitir passe temporário ou registar credencial, autorizar entrada.\n8. Se irregularidades: desviar para área de inspeção secundária, comunicar ao supervisor.',
          tags: ['Veículo', 'Inspeção', 'Controlo'],
        },
      ],
      situacoes: [
        {
          title: 'Incidente de Segurança na Instalação',
          shortDesc: 'Resposta a um incidente de segurança dentro de instalação militar.',
          content: 'Ao detetar incidente de segurança:\n\n1. Comunicar imediatamente ao Centro de Operações de Segurança (COS).\n2. Declarar nível de alerta adequado (PM-AMARELO a PM-VERMELHO).\n3. Isolar a área do incidente — perímetro imediato e perímetro externo.\n4. Confinamento de pessoal — todos permanecem nos postos até instrução contrária.\n5. Entrada só para equipa de resposta de PM.\n6. Coordenar com Força de Reação Rápida da unidade se necessário.\n7. Comunicar ao Adjunto do Comandante e cadeia de comando.\n8. Relatório completo após resolução.',
          tags: ['Incidente', 'Lockdown', 'Segurança'],
        },
      ],
    },
  },

  {
    id: 'policia',
    name: 'Guia Universal de RP Policial',
    shortName: 'POL',
    description: 'Guia de boas práticas universais para qualquer corporação de forças de segurança em contexto RP. Aplicável a PSP, GNR, PM e qualquer corpo policial.',
    color: '#1e40af',
    accentColor: '#60a5fa',
    icon: '👮',
    sections: {
      guias: [
        {
          title: 'Princípios Universais do RP Policial',
          shortDesc: 'Os pilares que devem guiar qualquer elemento de força de segurança em RP.',
          content: 'Independentemente da corporação, o RP policial assenta em princípios universais:\n\n1. Proporcionalidade — a resposta deve ser adequada à ameaça. Nunca excessiva.\n2. Profissionalismo — linguagem, postura e tomada de decisão sempre controladas.\n3. Documentação — tudo o que acontece deve ficar registado no MDT.\n4. Trabalho em equipa — nenhum elemento opera verdadeiramente sozinho.\n5. Legalidade — as ações têm sempre base legal. A polícia serve a lei, não está acima dela.\n6. Proteção do público — a segurança dos civis é sempre a prioridade.\n7. Coerência narrativa — o RP policial enriquece o servidor inteiro. Faz-lo bem.',
          tags: ['Universal', 'Princípios', 'Profissionalismo'],
        },
        {
          title: 'Ética Policial em Roleplay',
          shortDesc: 'A linha entre bom RP policial e abuso de posição.',
          content: 'A ética policial em RP é fundamental para a credibilidade da corporação:\n\nO que é aceitável:\n• RP de corrupção com autorização do staff — cria narrativas ricas e realistas.\n• Erros humanos dentro do protocolo — um agente que comete um erro e tem de o resolver.\n• Decisões difíceis em situações ambíguas — escolhas com consequências.\n\nO que NÃO é aceitável:\n• Usar a posição de polícia para vantagem OOC (griefar jogadores específicos).\n• Corrupção sem autorização do staff — ban permanente na maioria dos servidores.\n• "Ser polícia" apenas para ter acesso a armas e viaturas sem RP real.\n• Ignorar protocolos de forma repetida por conveniência.\n\nA polícia define o tom do RP de todo o servidor — quem joga policia tem essa responsabilidade.',
          tags: ['Ética', 'Corrupção', 'Responsabilidade'],
        },
      ],
      procedimentos: [
        {
          title: 'Relatório de Ocorrência — MDT',
          shortDesc: 'Como documentar corretamente uma ocorrência no sistema.',
          content: 'Todo o RP policial deve ser documentado. Um bom relatório contém:\n\n• Data, hora e local da ocorrência\n• Tipo de ocorrência (código de crime, acidentes, etc.)\n• Identidade dos envolvidos (se conhecida)\n• Descrição factual e cronológica do que aconteceu — sem opinião pessoal\n• Provas recolhidas — testemunhos, itens apreendidos, registos de câmara\n• Ações tomadas — detenções, notificações, encaminhamentos\n• Estado final — caso aberto/fechado, entregue ao Ministério Público, etc.\n\nUm bom relatório de MDT cria RP adicional — outros elementos podem consultar, continuar investigações, construir casos.',
          tags: ['MDT', 'Documentação', 'Relatório'],
        },
      ],
      codigos: [
        { code: '10-4', description: 'Recebido / Confirmado', severity: 'baixo', detail: 'Código universal de confirmação.' },
        { code: '10-20', description: 'Qual a tua localização?', severity: 'baixo', detail: 'Usado por todas as forças de segurança portuguesas.' },
        { code: '10-33', description: 'EMERGÊNCIA — apoio imediato', severity: 'critico', detail: 'Universal em todas as forças. Prioridade absoluta.' },
        { code: '10-99', description: 'Prioridade máxima / Vida em risco', severity: 'critico', detail: 'Situação de vida ou morte.' },
        { code: '10-7', description: 'Fora de serviço', severity: 'baixo', detail: 'Universal — encerramento de turno.' },
        { code: '10-8', description: 'Em serviço', severity: 'baixo', detail: 'Universal — início de turno ou disponibilidade.' },
        { code: '10-80', description: 'Perseguição em curso', severity: 'critico', detail: 'Perseguição ativa — comunicar detalhes.' },
        { code: '10-50', description: 'Acidente de viação', severity: 'alto', detail: 'Especificar se há feridos.' },
      ],
      hierarquias: [
        { rank: 1, title: 'Recruta / Em Formação', abbreviation: 'Rec', category: 'Base', description: 'A aprender. Sempre acompanhado por elemento experiente. Sem autonomia operacional.' },
        { rank: 2, title: 'Agente / Guarda', abbreviation: 'Ag/Grd', category: 'Base', description: 'Operacional básico. Patrulha, fiscalização e atendimento de ocorrências simples.' },
        { rank: 3, title: 'Agente Sénior / Guarda Principal', abbreviation: 'Ag.S', category: 'Base', description: 'Experiência e autonomia. Mentoria de recrutas e agentes.' },
        { rank: 4, title: 'Chefe / Sargento', abbreviation: 'Ch/Sarg', category: 'Supervisão', description: 'Supervisão de equipa. Gestão de ocorrências de média complexidade.' },
        { rank: 5, title: 'Oficial (Subcomissário/Alferes)', abbreviation: 'Ofic', category: 'Oficial', description: 'Comando operacional. Autoriza intervenções e assegura reporte hierárquico.' },
        { rank: 6, title: 'Oficial Superior (Comissário/Capitão)', abbreviation: 'Ofic.Sup', category: 'Oficial', description: 'Comando de unidade. Gestão estratégica e relação inter-institucional.' },
        { rank: 7, title: 'Comando (Diretor/General)', abbreviation: 'Cmd', category: 'Comando', description: 'Máxima autoridade. Responsabilidade total pela corporação.' },
      ],
      abordagens: [
        {
          title: 'Comunicação Profissional sob Pressão',
          shortDesc: 'Manter linguagem e postura controladas mesmo em situações de stress.',
          content: 'A comunicação é a maior arma de um polícia:\n\nRegras de ouro:\n• Tom calmo mas autoritário — nunca gritar, nunca implorar.\n• Frases curtas e claras — "Mãos visíveis. Agora."\n• Escutar ativamente — ouvir o que o suspeito diz pode resolver a situação.\n• Não entrar em debates — a discussão sobre se a lei é justa não acontece na rua.\n• Linguagem de confirmação — "Entende o que lhe digo?" garante que a ordem foi compreendida.\n\nEm RP: a forma como o polícia fala define completamente a cena. Um polícia que perde a calma escalona qualquer situação desnecessariamente.',
          tags: ['Comunicação', 'Profissionalismo', 'Stress'],
        },
      ],
      situacoes: [
        {
          title: 'Cenário de Corrupção Autorizada — Roleplay',
          shortDesc: 'Como conduzir RP de corrupção de forma realista e dentro das regras.',
          content: 'O RP de corrupção é dos mais ricos em servidores sérios — mas requer preparação:\n\nAntes de começar:\n1. Ticket ao staff — obter aprovação explícita.\n2. Definir o alcance — o que o personagem faz e o que não faz.\n3. Estabelecer consequências — a corrupção tem risco de ser descoberta.\n\nDurante o RP:\n• A corrupção deve ser subtil e realista — não óbvia.\n• Criar narrativa — motivos, história, pressões que levaram a isso.\n• Deixar pistas que outros jogadores possam investigar.\n• Estar preparado para as consequências IC se descoberto.\n\nO RP de corrupção bem feito cria histórias que toda a comunidade fala durante semanas.',
          tags: ['Corrupção', 'Staff', 'Narrativa'],
        },
      ],
    },
  },

  {
    id: 'estrangeiro',
    name: 'Corporações e Referências Estrangeiras',
    shortName: 'EXT',
    description: 'Referências a forças estrangeiras, cenários internacionais, cooperação entre países e contextos específicos que envolvam entidades além-fronteiras.',
    color: '#4c1d95',
    accentColor: '#a78bfa',
    icon: '🌍',
    sections: {
      guias: [
        {
          title: 'RP Internacional — Enquadramento',
          shortDesc: 'Como integrar cenários internacionais no RP de forma realista.',
          content: 'Cenários que envolvem forças ou entidades estrangeiras adicionam dimensões únicas ao RP:\n\nPorquê o RP internacional enriquece o servidor:\n• Perspetivas culturais diferentes criam personagens mais complexos\n• Missões conjuntas têm maior escala e importância narrativa\n• Diferenças de protocolo geram tensão e drama realista\n• Permite backgrounds de personagens mais variados\n\nDesafios do RP internacional:\n• Requer pesquisa — os procedimentos devem ser pelo menos plausíveis\n• A língua de trabalho em operações conjuntas deve ser definida (geralmente inglês operacional)\n• As ROE de forças estrangeiras diferem — definir antes da missão\n• Jurisdição e autoridade devem ser clarificadas no briefing',
          tags: ['Internacional', 'Contexto', 'Narrativa'],
        },
        {
          title: 'Alfabeto Fonético — Variante Portuguesa Histórica',
          shortDesc: 'Versão portuguesa histórica do alfabeto fonético, usada em rádio civil.',
          content: 'Antes da adoção generalizada do NATO, Portugal usou variantes fonéticas próprias em rádio e telecomunicações:\n\nA — António / Aveiro\nB — Braga / Baltazar\nC — Coimbra / Carlos\nD — Dafundo / Daniel\nE — Évora / Eduardo\nF — Faro / Francisco\nG — Guarda / Gonçalo\nH — Horta / Henrique\nI — Ilha / Inês\nJ — José / Júlio\nK — Kilowatt / Kevin\nL — Lisboa / Luís\nM — Maria / Manuel\nN — Natal / Nicolau\nO — Ovar / Oscar\nP — Porto / Pedro\nQ — Queluz / Quirino\nR — Rossio / Rafael\nS — Setúbal / Santarém\nT — Tavira / Tomás\nU — Ulisses / Úrsula\nV — Viseu / Vitória\nW — Wilson / Walter\nX — Xavier\nY — Ípsilon / York\nZ — Zulmira / Zaragoza\n\nNota: Atualmente a NATO é o padrão em operações militares e policiais formais.',
          tags: ['Fonético', 'Português', 'Histórico', 'Rádio'],
        },
      ],
      procedimentos: [
        {
          title: 'Operação Conjunta Internacional',
          shortDesc: 'Como planear e executar uma missão com forças de diferentes países.',
          content: 'Protocolo para operações conjuntas internacionais:\n\nPré-missão:\n1. Definir a nação de cada elemento — cultura e procedimentos diferentes\n2. Estabelecer língua de trabalho operacional\n3. Harmonizar ROE — as mais restritivas prevalecem por defeito\n4. Designar Liaison Officers (oficiais de ligação) entre as forças\n5. Definir cadeia de comando — quem tem autoridade final e em que circunstâncias\n\nDurante a missão:\n• Comunicações em canal partilhado com identificação de força (ex: "Bravo-Português para Alpha-Espanhol")\n• Qualquer mudança de plano comunicada a todos os elementos\n• Respeitar diferenças de protocolo sem criticar abertamente\n\nPós-missão:\n• Debriefing conjunto obrigatório — o que correu bem e o que pode melhorar',
          tags: ['Conjunta', 'Internacional', 'Briefing'],
        },
      ],
      codigos: [
        { code: 'INTER-ALPHA', description: 'Operação conjunta iniciada', severity: 'medio', detail: 'Início formal de cooperação entre forças de diferentes países ou jurisdições.' },
        { code: 'INTER-BRAVO', description: 'Jurisdição em debate — aguardar resolução', severity: 'medio', detail: 'Conflito de competências — suspender ação até clarificação.' },
        { code: 'INTER-CHARLIE', description: 'Transferência de comando', severity: 'alto', detail: 'O comando da operação passa de uma força para outra — comunicar a todos.' },
        { code: 'INTER-DELTA', description: 'Operação conjunta concluída', severity: 'baixo', detail: 'Encerramento formal da cooperação. Regresso a canais e procedimentos normais.' },
        { code: 'LIAISON', description: 'Pedido de oficial de ligação', severity: 'medio', detail: 'Necessidade de elemento dedicado à comunicação entre forças.' },
        { code: 'EXTRADIÇÃO', description: 'Processo de transferência de detido entre jurisdições', severity: 'medio', detail: 'Procedimento formal para entrega de suspeito a autoridade estrangeira.' },
      ],
      hierarquias: [
        { rank: 1, title: 'Operativo de Campo', abbreviation: 'OP', category: 'Campo', description: 'Elemento de execução em missão conjunta. Segue ordens da cadeia de comando estabelecida no briefing.' },
        { rank: 2, title: 'Liaison Officer (LO)', abbreviation: 'LO', category: 'Ligação', description: 'Oficial de ligação entre forças de países diferentes. Facilita comunicação, traduz procedimentos e resolve conflitos de protocolo.' },
        { rank: 3, title: 'Oficial de Cooperação', abbreviation: 'OC', category: 'Coordenação', description: 'Coordena aspectos logísticos e operacionais da cooperação. Representa a sua força na estrutura conjunta.' },
        { rank: 4, title: 'Joint Commander (JC)', abbreviation: 'JC', category: 'Comando', description: 'Comandante conjunto — tem autoridade sobre todas as forças participantes durante a operação. Designado no briefing.' },
      ],
      abordagens: [
        {
          title: 'Integração de Diferenças Culturais',
          shortDesc: 'Como tornar as diferenças culturais num elemento rico de RP.',
          content: 'As diferenças culturais entre forças são um recurso de RP, não um obstáculo:\n\nExemplos de diferenças reais aproveitáveis em RP:\n• Forças americanas têm uma cultura de briefing mais informal e rápida; portuguesas mais formal.\n• Forças britânicas usam terminologia diferente (sergeant vs sargento).\n• Abordagem a civis difere — alguns países são mais verbosos, outros mais diretos.\n\nComo usar em RP:\n• O personagem estrangeiro comete erros de protocolo "genuínos" — cria momentos naturais.\n• Tensões entre abordagens diferentes criam drama realista.\n• Resolução dessas tensões cria laços entre personagens.\n\nResearch importa: pesquisa um pouco a força que estás a representar — torna tudo mais imersivo.',
          tags: ['Cultural', 'Imersão', 'Diferenças'],
        },
      ],
      situacoes: [
        {
          title: 'Cenário de Extradição',
          shortDesc: 'RP de transferência de suspeito entre forças de diferentes países.',
          content: 'Um cenário de extradição é excelente para RP inter-forças:\n\n1. Pedido formal de extradição — via "canais diplomáticos" IC (pode ser simulado por ticket ou documento RP).\n2. Negociação — quais os crimes, evidências, garantias de julgamento justo.\n3. Autorização — o suspeito pode contestar IC, criando RP jurídico.\n4. Transferência física — escolta conjunta, protocolo de entrega formal.\n5. Documentação — registo do transferido, condição, pertences, e confirmação de receção.\n\nEste cenário cria RP para pelo menos 3-4 "departamentos" diferentes em simultâneo — policia de dois países, possivelmente advogados, possivelmente serviços secretos.',
          tags: ['Extradição', 'Diplomacia', 'Inter-forças'],
        },
      ],
    },
  },
];
