export interface ServiceHighlight {
    icon: string;
    title: string;
    description: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface ImageBlock {
    prompt: string;
    src?: string;
    caption: string;
    alt: string;
}

export interface WhyItem {
    icon: string;
    title: string;
    text: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ServicePageData {
    slug: string;
    title: string;
    subtitle: string;
    metaDescription: string;
    keywords: string;
    tagline: string;
    heroGradient: string;
    intro: string[];
    highlights: ServiceHighlight[];
    processSteps: ProcessStep[];
    imageBlocks: ImageBlock[];
    whyItems: WhyItem[];
    faqs: FAQ[];
    relatedPortfolioSlugs: string[];
    ctaText: string;
    introImageSrc?: string;
}

export const SERVICES_DATA: ServicePageData[] = [
    {
        slug: 'sessoes-de-retrato',
        title: 'Sessões de Retrato',
        subtitle: 'Fotografia de Retrato Profissional em Portugal',
        metaDescription: 'Sessões fotográficas de retrato profissional em Nisa e Portugal. Retratos individuais, familiares, headshots e fotografia de animais com edição profissional. A partir de 100€.',
        keywords: 'fotografia de retrato, fotógrafo de retratos Portugal, sessão fotográfica individual, headshots profissionais Alentejo, retrato familiar, fotografia animais Portugal, fotógrafo Nisa',
        tagline: 'Cada pessoa tem uma história. Eu capturo a sua.',
        heroGradient: 'linear-gradient(135deg, #0d0d2b 0%, #1a0533 50%, #0d1b3e 100%)',
        intro: [
            'A fotografia de retrato é muito mais do que simplesmente registar um rosto — é a arte de capturar a essência de uma pessoa, os seus traços únicos, a sua personalidade e as emoções que definem quem é. Como fotógrafo profissional baseado em Nisa, no coração do Alentejo, ofereço sessões de retrato personalizadas que transformam momentos fugazes em memórias eternas.',
            'Cada sessão começa com uma conversa. Quero perceber o que procura, o que sente e o que gostaria de preservar através das imagens. Seja um retrato individual para redes sociais ou portfólio profissional, uma sessão a dois para celebrar uma relação especial, ou uma sessão familiar para imortalizar os laços que o unem às pessoas que ama — abordamos cada projeto com dedicação total e um olhar atento ao detalhe.',
            'Com experiência em retratos humanos e fotografia de animais de estimação — como as sessões com o Macau e a Ziva demonstram —, adapto-me a qualquer sujeito, criando imagens autênticas que refletem verdadeiramente quem está diante da minha câmara. A luz única do Alentejo, a paisagem verde e dourada desta região de Portugal, oferece cenários deslumbrantes que elevam cada retrato a uma obra de arte.'
        ],
        highlights: [
            { icon: 'fa-clock', title: 'Sessão de 1-2 horas', description: 'Tempo suficiente para relaxar e criar imagens naturais e verdadeiramente espontâneas' },
            { icon: 'fa-images', title: '25 fotos editadas', description: 'Seleção cuidadosa das melhores imagens com edição profissional e retoque incluídos' },
            { icon: 'fa-map-marker-alt', title: 'Local à escolha', description: 'Estúdio, exterior ou qualquer local com significado especial para si, em Portugal' },
            { icon: 'fa-download', title: 'Download digital HD', description: 'Ficheiros de alta resolução prontos para impressão em grande formato e redes sociais' },
            { icon: 'fa-user-check', title: 'Orientação de poses', description: 'Direção profissional de poses e expressões para resultados naturais e confiantes' },
            { icon: 'fa-calendar-check', title: 'Entrega em 7-10 dias', description: 'Galeria privada online entregue dentro do prazo acordado, sem surpresas' }
        ],
        processSteps: [
            { number: '01', title: 'Consulta inicial gratuita', description: 'Começamos com uma conversa sem compromisso para perceber os seus objetivos, preferências de estilo e o local ideal para a sua sessão. Este passo garante que tudo é planeado ao detalhe e que chegamos ao dia da sessão totalmente preparados.' },
            { number: '02', title: 'Preparação personalizada', description: 'Recebe um guia completo com dicas de roupa, maquilhagem e como preparar-se mentalmente para a sessão. Partilhamos também um mood board com referências visuais para alinharmos expectativas e garantirmos que o resultado final é exatamente o que imaginou.' },
            { number: '03', title: 'A sessão fotográfica', description: 'Num ambiente relaxado e descontraído, capturo os seus melhores momentos. A minha abordagem é natural e espontânea — sem poses artificiais ou expressões forçadas. Trabalho para que se sinta confortável e confiante, porque é nesse estado que surgem as melhores fotografias.' },
            { number: '04', title: 'Seleção e edição profissional', description: 'Após a sessão, seleciono cuidadosamente as melhores imagens e realizo uma edição profissional que realça a beleza natural sem exageros. Cada fotografia recebe atenção individual com retoque discreto, correção de cor e um tratamento coerente com o estilo acordado.' },
            { number: '05', title: 'Entrega da galeria privada', description: 'Recebe um link exclusivo para a sua galeria privada online com todas as fotografias finais em alta resolução. Pode descarregar individualmente ou em bloco, partilhar com família e amigos, e guardar para sempre as suas memórias com a qualidade que merecem.' }
        ],
        imageBlocks: [
            {
                prompt: 'Fotografia de retrato feminino suave ao ar livre no Alentejo Portugal, luz dourada de fim de tarde, bokeh cremoso com vegetação verde desfocada, expressão serena e natural, enquadramento próximo, tons quentes e terrosos, câmara Prime 85mm f/1.4',
                src: 'services/retrato_02.webp',
                caption: 'Retrato em ambiente natural com a luz dourada do Alentejo',
                alt: 'Sessão de retrato fotográfico profissional em ambiente natural no Alentejo Portugal'
            },
            {
                prompt: 'Sessão fotográfica de casal ao pôr do sol em Portugal, paisagem alentejana com planície e sobreiros ao fundo, luz horizontal quente e dramática, silhuetas suaves, amor genuíno e cumplicidade, fotografia de casal romântica profissional',
                src: 'services/retrato_03.webp',
                caption: 'Sessão de casal ao pôr do sol — momentos de cumplicidade eternizados',
                alt: 'Fotografia de casal em sessão fotográfica ao pôr do sol no Alentejo Portugal'
            },
            {
                prompt: 'Retrato profissional headshot corporativo, expressão confiante e acessível, fundo desfocado cinza neutro elegante, iluminação de anel suave e direcional, fotografia de negócios LinkedIn qualidade editorial',
                src: 'services/retrato_04.webp',
                caption: 'Headshot profissional — a sua melhor primeira impressão',
                alt: 'Headshot fotográfico profissional para LinkedIn e portfolio empresarial'
            }
        ],
        whyItems: [
            { icon: 'fa-eye', title: 'Olhar artístico único', text: 'Cada fotografia é composta com atenção à luz, ao enquadramento e às emoções para criar imagens que tocam verdadeiramente quem as vê — não apenas registos, mas obras de arte.' },
            { icon: 'fa-smile', title: 'Ambiente descontraído', text: 'A minha abordagem genuína e descontraída faz com que até as pessoas mais nervosas perante uma câmara se sintam à vontade. O resultado são expressões reais e momentos autênticos.' },
            { icon: 'fa-palette', title: 'Edição personalizada', text: 'Cada imagem recebe atenção individual no pós-processamento. O meu estilo é coerente, elegante e atemporal — fotos que continuarão a ser bonitas daqui a décadas.' },
            { icon: 'fa-paw', title: 'Animais são bem-vindos', text: 'Com experiência comprovada em fotografia de animais de estimação, os seus companions de quatro patas podem fazer parte da sessão. Eles também fazem parte da família.' }
        ],
        faqs: [
            { question: 'O que devo vestir para a sessão?', answer: 'Recomendamos roupas com que se sinta confortável e que representem quem é autenticamente. Evite padrões muito grandes ou logótipos em destaque pois podem distrair da expressão facial. Para sessões em exterior no Alentejo, cores neutras e terrosas funcionam de forma harmoniosa com a paisagem. Após confirmar a sua sessão, enviamos um guia detalhado com todas as sugestões.' },
            { question: 'Posso trazer o meu animal de estimação?', answer: 'Absolutamente! Com experiência comprovada em fotografia de animais de estimação — como demonstram as sessões com o Macau e a Ziva no nosso portfólio —, adoramos incluir os seus companheiros de quatro patas. Basta informar com antecedência para planearmos a sessão adequadamente e garantir que temos tempo para que o animal se habitue ao ambiente.' },
            { question: 'A sessão pode ser realizada em qualquer local?', answer: 'Sim. Trabalhamos em exterior natural, em espaços urbanos, em locais com significado especial para si, ou na sua própria casa. Para locais fora da área de Nisa e do Alentejo pode existir uma taxa adicional de deslocação, que é sempre comunicada e acordada previamente.' },
            { question: 'Quanto tempo demora a receber as fotografias?', answer: 'Normalmente entregamos a galeria privada online entre 7 a 10 dias úteis após a sessão fotográfica. Para projetos com necessidades urgentes existe a possibilidade de entrega rápida em 48-72 horas — consulte-nos para disponibilidade e condições.' },
            { question: 'Posso escolher as fotografias que quero editadas?', answer: 'Sim. Após a sessão, enviamos uma galeria de pré-seleção com todas as imagens base para que escolha as suas favoritas. Desta forma garantimos que as fotografias finais entregues são exatamente as que mais gosta — e não existe risco de ficarem de fora momentos especiais.' }
        ],
        relatedPortfolioSlugs: ['macau', 'ziva'],
        ctaText: 'Marque a sua sessão de retrato',
        introImageSrc: 'services/retrato_01.webp'
    },
    {
        slug: 'fotografia-de-eventos',
        title: 'Fotografia de Eventos',
        subtitle: 'Cobertura Fotográfica de Eventos Profissional em Portugal',
        metaDescription: 'Cobertura fotográfica profissional de eventos em Portugal. Festivais, eventos corporativos, desporto, cerimónias e eventos privados documentados com rigor e criatividade. Contacte-nos.',
        keywords: 'fotógrafo de eventos Portugal, cobertura fotográfica eventos, fotografia corporativa Portugal, fotografia de festival, fotógrafo desportivo Alentejo, fotografia de cerimónias, fotógrafo de eventos Nisa',
        tagline: 'A adrenalina do momento. A permanência da imagem.',
        heroGradient: 'linear-gradient(135deg, #0a1628 0%, #0d2b1a 50%, #1a2808 100%)',
        intro: [
            'Os eventos são momentos únicos e irrepetíveis — celebrações, encontros, competições, festivais — que merecem ser documentados com rigor, criatividade e sensibilidade artística. A fotografia de eventos vai muito além de simplesmente registar o que acontece: é capturar a energia no ar, as emoções nos rostos, a magia dos bastidores e os detalhes que fazem de cada evento uma experiência singular.',
            'Com experiência comprovada em ambientes diversificados e tecnicamente exigentes — do festival Bua Trip ao Campeonato Nacional de Motonáutica, passando por produções cinematográficas independentes —, ofereço uma cobertura fotográfica completa e discreta que preserva cada capítulo do seu evento para a eternidade. Trabalho com equipamento profissional que garante resultados de alta qualidade mesmo em condições adversas de luz ou movimento.',
            'A minha filosofia é simples: estar sempre no lugar certo no momento certo. Trabalho de forma discreta, sem interferir no fluxo natural dos acontecimentos, mas com os olhos sempre atentos aos momentos espontâneos que tornam cada evento verdadeiramente único. O resultado são fotografias que não apenas documentam — emocionam e contam a história do seu evento como nenhuma outra recordação consegue.'
        ],
        highlights: [
            { icon: 'fa-camera', title: 'Cobertura total', description: 'Do início ao fim, documentamos cada momento importante sem interromper o natural decorrer do evento' },
            { icon: 'fa-user-secret', title: 'Trabalho discreto', description: 'Presença profissional que não interfere na dinâmica e na espontaneidade natural do evento' },
            { icon: 'fa-lock', title: 'Galeria privada online', description: 'Entrega em galeria protegida de fácil acesso para partilhar com toda a equipa e convidados' },
            { icon: 'fa-expand-arrows-alt', title: 'Alta resolução', description: 'Ficheiros de alta qualidade adequados para impressão em grande formato e comunicação digital' },
            { icon: 'fa-bolt', title: 'Entrega urgente disponível', description: 'Para comunicação imediata, oferecemos serviço de entrega de destaques em 24-48 horas' },
            { icon: 'fa-map', title: 'Portugal continental e ilhas', description: 'Deslocamo-nos a qualquer ponto do país para cobrir o seu evento com toda a qualidade' }
        ],
        processSteps: [
            { number: '01', title: 'Briefing detalhado', description: 'Reunião prévia para perceber a natureza, escala, programa e expectativas do evento. Quanto mais soubermos sobre o evento — os momentos-chave, as pessoas importantes, o ambiente pretendido —, melhor preparados estaremos para capturar exatamente o que procura.' },
            { number: '02', title: 'Reconhecimento do local', description: 'Sempre que possível e pertinente, visitamos o local com antecedência para estudar as condições de luz em diferentes momentos do dia, identificar os melhores ângulos e posicionamentos, e antecipar os movimentos e fluxos do evento.' },
            { number: '03', title: 'Cobertura completa do evento', description: 'No dia, a nossa presença é total, atenta e discreta. Trabalhamos em modo reportagem com vários ângulos e momentos simultâneos, sempre atentos às emoções espontâneas, às interações genuínas e aos detalhes que contam a verdadeira história do evento.' },
            { number: '04', title: 'Curadoria e edição profissional', description: 'Após o evento, selecionamos criteriosamente as melhores imagens de entre as centenas capturadas e realizamos uma edição profissional coerente — com equilíbrio de cores, contraste e atmosfera que traduz fielmente o espírito do evento.' },
            { number: '05', title: 'Entrega e arquivo seguro', description: 'Entrega de galeria privada online com download individual ou em bloco de todos os ficheiros. Os originais são mantidos em arquivo seguro por um período de 12 meses, garantindo que nunca perde as suas memórias.' }
        ],
        imageBlocks: [
            {
                prompt: 'Festival de música ao ar livre Portugal verão, multidão animada e envolvida, luzes coloridas LED no palco, energia vibrante e festiva, fotografia de evento noturno com flash profissional, blur criativo do movimento',
                src: 'services/eventos_02.webp',
                caption: 'Festival Bua Trip — energia, música e momentos inesquecíveis',
                alt: 'Cobertura fotográfica profissional de festival de música ao ar livre em Portugal'
            },
            {
                prompt: 'Competição de motonáutica em rio, barco de alta velocidade em plena corrida, spray de água congelado em alta velocidade, ação dinâmica e adrenalina, fotografia desportiva aquática com teleobjetiva',
                src: 'services/eventos_03.webp',
                caption: 'Campeonato de Motonáutica — velocidade, adrenalina e precisão',
                alt: 'Fotografia desportiva profissional de competição de motonáutica em Portugal'
            },
            {
                prompt: 'Bastidores de produção cinematográfica independente portuguesa, câmeras e iluminação profissional, equipa técnica concentrada, diretor a orientar atores, fotografia documental de set de filmagens',
                src: 'services/eventos_04.webp',
                caption: 'Bastidores de curta-metragem — a magia por trás das câmeras',
                alt: 'Fotografia de bastidores de produção cinematográfica em Portugal'
            }
        ],
        whyItems: [
            { icon: 'fa-crosshairs', title: 'Instinto e antecipação', text: 'A experiência em eventos dinâmicos e imprevisíveis desenvolveu um instinto aguçado para antecipar e capturar os momentos decisivos antes que desapareçam para sempre.' },
            { icon: 'fa-cogs', title: 'Equipamento profissional', text: 'Trabalhamos com câmeras de alta gama e objetivas profissionais que garantem resultados excecionais mesmo em condições desafiantes — pouca luz, movimento rápido ou grandes distâncias.' },
            { icon: 'fa-history', title: 'Pontualidade e fiabilidade', text: 'A pontualidade e a fiabilidade são valores inegociáveis. Pode contar connosco para estar sempre presente, preparado e disponível desde o primeiro ao último momento do seu evento.' },
            { icon: 'fa-compress-arrows-alt', title: 'Adaptabilidade total', text: 'De festivais ao ar livre a cerimónias formais em interiores, adaptamos o estilo, a abordagem e o equipamento para ir ao encontro das especificidades únicas de cada evento.' }
        ],
        faqs: [
            { question: 'Com quanto de antecedência devo fazer a reserva?', answer: 'Para eventos de grande dimensão, recomendamos reservar com pelo menos 4 a 6 semanas de antecedência. Para eventos mais pequenos, 2 a 3 semanas são geralmente suficientes. Para datas de época alta (primavera e verão, que concentram a maioria dos festivais e eventos ao ar livre), recomendamos antecipar ainda mais a reserva para garantir disponibilidade.' },
            { question: 'Cobrem eventos fora do Alentejo?', answer: 'Sim, deslocamo-nos a qualquer ponto de Portugal continental e ilhas. Para eventos fora da área de Nisa e Portalegre, aplicamos uma taxa de deslocação calculada com base na distância. Para eventos que requeiram pernoita, os custos de alojamento são incluídos no orçamento total apresentado — nunca existem surpresas no valor final.' },
            { question: 'Quanto tempo após o evento recebo as fotografias?', answer: 'Para eventos standard, entregamos a galeria completa entre 5 a 10 dias úteis após o evento. Para comunicação imediata — imprensa, redes sociais corporativas ou partilha com convidados — oferecemos um serviço de entrega urgente de uma seleção de destaques em 24 a 48 horas.' },
            { question: 'Trabalham sozinhos ou com assistentes?', answer: 'Para eventos de pequena e média dimensão, trabalhamos normalmente em solo, o que garante um ponto de vista coeso e um estilo visual único e consistente. Para eventos de grande escala — congressos, festivais ou casamentos — onde é necessária cobertura simultânea de múltiplos espaços, podemos disponibilizar uma equipa de dois fotógrafos.' },
            { question: 'Como funciona o processo de reserva e pagamento?', answer: 'Após confirmarmos a disponibilidade e os detalhes do evento, enviamos uma proposta detalhada e um contrato. Para confirmar a reserva solicitamos um sinal de 30% do valor total. O remanescente é liquidado até à véspera do evento. Aceitamos transferência bancária e MB Way.' }
        ],
        relatedPortfolioSlugs: ['bua-trip', 'campeonato-motonautica', 'curta-metragem'],
        ctaText: 'Solicitar orçamento para o seu evento',
        introImageSrc: 'services/eventos_01.webp'
    },
    {
        slug: 'fotografia-comercial',
        title: 'Fotografia Comercial',
        subtitle: 'Fotografia Comercial e de Marca Profissional em Portugal',
        metaDescription: 'Fotografia comercial profissional em Portugal. Gastronomia, imobiliário, Airbnb, produto e marca. Imagens que valorizam o seu negócio e convertem clientes. Contacte-nos.',
        keywords: 'fotografia comercial Portugal, fotografia gastronómica Portugal, fotógrafo de restaurantes Portugal, fotografia imobiliária Alentejo, fotografia para Airbnb Portugal, fotografia de produto, fotografia de marca',
        tagline: 'Imagens que vendem. Conteúdo que converte.',
        heroGradient: 'linear-gradient(135deg, #1a0a00 0%, #2b1a00 50%, #0d1a0a 100%)',
        intro: [
            'No mundo digital de hoje, a qualidade visual é um fator determinante no sucesso de qualquer negócio. Estudos de mercado demonstram que produtos com fotografia profissional vendem até 30% mais, restaurantes com imagens de qualidade recebem significativamente mais reservas online, e propriedades com fotografia imobiliária profissional reduzem em semanas o tempo de venda ou arrendamento.',
            'A fotografia comercial profissional transforma a perceção que os seus clientes têm da sua marca, dos seus produtos e dos seus serviços — e faz com que se destaque numa era de sobrecarga de conteúdo visual. Com o meu trabalho para restaurantes de referência como O Bordado e O Cardo, ou projetos imobiliários como a Casa Olival, demonstro um compromisso consistente com imagens que não apenas mostram — inspiram e convencem.',
            'Cada sessão comercial é precedida por uma fase de descoberta onde percebemos os seus objetivos de negócio, o seu público-alvo e a mensagem que pretende transmitir. O resultado é um conjunto de imagens estrategicamente pensadas para trabalhar para si — nas suas redes sociais, website, menus, plataformas de alojamento e materiais de marketing — gerando impacto real e mensurável no seu negócio.'
        ],
        highlights: [
            { icon: 'fa-utensils', title: 'Gastronomia e restauração', description: 'Fotografia de pratos, espaços e conceitos que desperta o apetite e aumenta reservas' },
            { icon: 'fa-home', title: 'Imobiliário e Airbnb', description: 'Imagens que valorizam propriedades e aumentam taxas de ocupação e valor de venda' },
            { icon: 'fa-box', title: 'Fotografia de produto', description: 'Imagens limpas e impactantes para e-commerce, catálogos e redes sociais' },
            { icon: 'fa-trademark', title: 'Identidade de marca', description: 'Imagens de lifestyle e branding para comunicação corporativa consistente e coerente' },
            { icon: 'fa-copyright', title: 'Direitos comerciais incluídos', description: 'Todos os direitos de utilização comercial das imagens incluídos sem custos adicionais' },
            { icon: 'fa-file-image', title: 'Múltiplos formatos', description: 'Entrega otimizada para web, redes sociais, impressão e todas as plataformas digitais' }
        ],
        processSteps: [
            { number: '01', title: 'Descoberta e estratégia de marca', description: 'Analisamos a sua marca, o seu público-alvo, os concorrentes e os seus objetivos de negócio. Esta fase é fundamental para criar um plano fotográfico totalmente alinhado com a sua estratégia de comunicação e que produza imagens com impacto real.' },
            { number: '02', title: 'Planeamento criativo', description: 'Desenvolvemos um mood board com referências visuais detalhadas, definimos o estilo fotográfico, a paleta de cores e o tipo de composições. Para fotografia gastronómica, planeamos os pratos, os elementos de set design e a mise en place. Para imobiliário, definimos a preparação do espaço e o melhor período do dia para a luz.' },
            { number: '03', title: 'Produção fotográfica profissional', description: 'A sessão decorre com atenção obsessiva a cada detalhe — a luz natural ou de estúdio, a composição, as texturas e os ângulos. Trabalhamos com rigor e paciência até ter as imagens certas, não apenas as imagens suficientes. A qualidade não é negociável.' },
            { number: '04', title: 'Pós-produção e retoque', description: 'Edição profissional de cada imagem com foco na consistência visual e no alinhamento com a identidade visual da sua marca. Retoque discreto e elegante que valoriza sem artificializar — resultados naturais que transmitem autenticidade e confiança.' },
            { number: '05', title: 'Entrega e suporte contínuo', description: 'Entrega em múltiplos formatos adaptados a cada plataforma de utilização — Web (72dpi), impressão (300dpi), redes sociais (formatos otimizados). Suporte pós-entrega disponível para ajustes ou versões adicionais. Valorizamos parcerias duradouras.' }
        ],
        imageBlocks: [
            {
                prompt: 'Fotografia gastronómica fine dining de prato requintado português, empratamento artístico, luz natural lateral suave e direcional, fundo escuro elegante, texturas ricas de ingredientes naturais, profundidade de campo seletiva, estilo editorial de revista',
                src: 'services/comercial_02.webp',
                caption: 'Fotografia gastronómica — arte no prato, arte na imagem',
                alt: 'Fotografia gastronómica profissional de prato de restaurante em Portugal'
            },
            {
                prompt: 'Interior moderno de casa de férias alentejana para Airbnb, espaço amplo e luminoso com luz natural de janela grande, decoração minimalista com elementos portugueses, fotografia imobiliária grande angular, warm tones acolhedores',
                src: 'services/comercial_03.webp',
                caption: 'Casa Olival — imagens que fazem os hóspedes escolher',
                alt: 'Fotografia imobiliária profissional de casa de férias para Airbnb no Alentejo'
            },
            {
                prompt: 'Fotografia de produto artesanal português sobre fundo linho texturado, luz difusa suave, composição flat lay elegante com elementos naturais complementares, estilo minimalista lifestyle para e-commerce e catálogos premium',
                src: 'services/comercial_04.webp',
                caption: 'Fotografia de produto — detalhes que fazem a diferença',
                alt: 'Fotografia de produto profissional para e-commerce e catálogos comerciais'
            }
        ],
        whyItems: [
            { icon: 'fa-chart-line', title: 'Foco em resultados de negócio', text: 'As imagens que criamos são pensadas estrategicamente para gerar resultados concretos — mais reservas, mais vendas, mais engagement. A beleza está sempre ao serviço dos seus objetivos comerciais.' },
            { icon: 'fa-lightbulb', title: 'Criatividade com propósito', text: 'Combinamos visão artística com conhecimento de marketing visual para criar imagens que são simultaneamente belas e eficazes na comunicação da sua mensagem para o seu público específico.' },
            { icon: 'fa-handshake', title: 'Parceria a longo prazo', text: 'Vemos cada cliente como um parceiro estratégico. Conhecemos o seu negócio em profundidade, aprendemos com cada sessão e evoluímos juntos para manter o seu conteúdo visual sempre relevante e impactante.' },
            { icon: 'fa-star', title: 'Histórico comprovado em Portugal', text: 'Com trabalhos para restaurantes reconhecidos, espaços de alojamento premiados e eventos de destaque, o nosso portefólio comercial fala por si. Resultados reais para negócios reais.' }
        ],
        faqs: [
            { question: 'Que tipo de empresas beneficiam mais da fotografia comercial?', answer: 'Qualquer negócio com presença visual online — restaurantes, cafés, hotéis, alojamento local e Airbnb, lojas de e-commerce, marcas de produto artesanal, profissionais liberais e empresas de serviços. Se os seus clientes tomam decisões influenciadas por imagens — e hoje praticamente todos o fazem —, a fotografia comercial profissional é um investimento com retorno rápido e mensurável.' },
            { question: 'Os direitos de utilização das imagens estão incluídos?', answer: 'Sim. Todos os pacotes incluem direitos de utilização comercial completos para plataformas digitais — website próprio, redes sociais, newsletters, publicidade online, plataformas de reserva como Airbnb e Booking. Para campanhas publicitárias de grande escala ou uso em impressão de grande formato como outdoors, existem condições específicas que são discutidas e acordadas em contrato.' },
            { question: 'É possível fotografar fora das horas de funcionamento?', answer: 'Absolutamente, e frequentemente é a melhor opção. Para restaurantes e espaços comerciais, fotografar antes da abertura ou após o fecho garante total liberdade criativa — sem clientes a interferir com as composições, possibilidade de rearranjar o espaço e, para gastronomia, pratos em perfeito estado sem a pressão de um serviço a decorrer.' },
            { question: 'Quantas imagens são entregues por sessão?', answer: 'O número de imagens editadas varia consoante o pacote e a duração da sessão. Para fotografia gastronómica de restaurante, entregamos tipicamente entre 30 a 60 imagens editadas por sessão de 3-4 horas. Para imobiliário e Airbnb, entre 20 a 40 imagens por propriedade. Falamos sempre claramente sobre o número antes de iniciar — sem surpresas.' },
            { question: 'Trabalham com agências de marketing e designers?', answer: 'Com todo o prazer. Temos experiência em colaborar com agências criativas, designers de comunicação e gestores de redes sociais. Sabemos adaptar o nosso trabalho a guidelines de marca, formatos específicos de plataformas e necessidades particulares de cada projeto. A comunicação fluida com a equipa criativa do cliente é sempre uma prioridade.' }
        ],
        relatedPortfolioSlugs: ['o-bordado', 'o-cardo', 'casa-olival'],
        ctaText: 'Solicitar orçamento para o seu negócio',
        introImageSrc: 'services/comercial_01.webp'
    }
];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
    return SERVICES_DATA.find(s => s.slug === slug);
}
