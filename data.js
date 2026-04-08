const projects = [
    {
        id: 100,
        title: 'Serralheria Irmãos Teixeira',
        description: 'Site institucional da Serralheria Irmãos Teixeira, desenvolvido para apresentar serviços de serralheria, portões, grades, estruturas metálicas e projetos sob medida. Inclui informações sobre a empresa, portfólio, formas de contato e solicitação de orçamentos.',
        image: 'img/irmaosteixeira.jpeg',
        category: 'web',
        languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React'],
        github: 'https://github.com/rayanneernandez/serralheiriairmaosteixeira',
        link: 'https://www.irmaosteixeira.com/',
        date: 'set 2025'
    },
    {
        id: 1,
        title: 'Controle de Solicitações',
        description: 'Este projeto foi desenvolvido para facilitar o gerenciamento e organização de solicitações de melhorias em sistemas corporativos. Com ele, você pode substituir planilhas manuais por uma solução mais eficiente e centralizada, permitindo um controle mais estruturado e ágil dos pedidos.',
        image: 'img/painel_de_solicitacoes.PNG',
        category: 'web',
        languages: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/rayanneernandez/controle-de-solicitacoes',
        link: 'https://rayanneernandez.github.io/controle-de-solicitacoes/painel.html',
        date: '2024'
    },
    {
        id: 2,
        title: 'Elemental - Saúde Mental',
        description: 'Esse app tem como principal objetivo apoiar os usuários na criação de uma rotina saudável e promover o bem-estar mental.<br><br> Em breve saindo link do aplicativo.',
        image: 'img/elemental.jpg',
        category: 'mobile',
        languages: ['Ionic','TypeScript','JavaScript'],
        github: 'https://github.com/rayanneernandez/elementalapp',
        date: 'jul 2025'
    },
    {
        id: 3,
        title: 'Site - Rede de Hoteis',
        description: 'Site de divulgação dos hoteis, quartos e serviços desta rede.',
        image: 'img/redehoteis.png',
        category: 'academico',
        languages: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/hotel',
        link: 'https://rayanneernandez.github.io/hotel-green-garden/',
        date: 'abr 2025'
    },
    {
        id: 4,
        title: 'Gerenciamento interno de hotéis',
        description: 'Nesta plataforma irá conseguir gerenciar as reservas, ter controle dos funcionários e todo o gerenciamento do hotel.',
        image: 'img/gerenciamento-hotel.PNG',
        category: 'academico',
        languages: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/gerenciamento-hotel-interno',
        link: 'https://rayanneernandez.github.io/gerenciamento-hotel-interno/',
        date: 'abr 2025'
    },
    {
        id: 5,
        title: 'Ranking de Técnicos',
        description: 'Sistema de Ranking de Técnicos desenvolvido para otimizar o acompanhamento de performance em equipes técnicas! <br><br> Em breve diponibilizando o link.',
        image: 'img/rankingtecnicos.jpg',
        category: 'web',
        languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/gerenciamento-hotel-interno',
        date: 'ago 2025'
    },
    {
        id: 6,
        title: 'Controle de Estoque',
        description: 'Controle de estoque apenas para uso mobile, resolução mobile.',
        image: 'img/controleestoque.jpg',
        category: 'mobile',
        languages: ['TypeScript', 'Tailwind'],
        github: 'https://github.com/rayanneernandez/controleestoque',
        link: 'https://rayanneernandez.github.io/controleestoque/',
        date: 'fev 2025'
    },
    {
        id: 7,
        title: 'Sistema de Análise e Visualização de Notas Universitário',
        description: 'Aplicativo Python que ajuda universidades a acompanhar o desempenho dos alunos com importação automática de dados, visualizações interativas, análise de tendências e relatórios customizáveis, tudo com uma interface limpa e segura.',
        image: 'img/sistemanotas.PNG',
        category: 'pessoal',
        languages: ['python', 'HTML', 'CSS', 'TypeScript', 'JavaScipt'],
        github: 'https://github.com/rayanneernandez/gerenciamento-hotel-interno',
        link: 'https://tubular-cactus-cd43f0.netlify.app/',
        date: 'fev 2024'
    },
    {
        id: 8,
        title: 'Agenda de controle técnicos de externos',
        description: 'Este sistema serve como facilitador para organizar sua agenda, na descrições utilizados textos padronizados onde sempre usamos para facilitar ainda mais nosso dia a dia, onde direciona direto para a sua agenda do google.',
        image: 'img/Organizadoragenda.PNG',
        category: 'web',
        languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/organizador-de-agenda',
        link: 'https://rayanneernandez.github.io/organizador-de-agenda/',
        date: 'set 2025'
    },
    {
        id: 9,
        title: 'Site de elevador',
        description: 'Modelo de site moderno e responsivo para empresa especializada em soluções completas para elevadores.',
        image: 'img/modelo1-elevador.png',
        category: 'freelancer',
        languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/visiontech',
        link: 'https://rayanneernandez.github.io/visiontech/',
        date: 'ago 2025'
    },
    {
        id: 11,
        title: 'Novo modelo Site de elevador',
        description: 'Modelo de site moderno e responsivo para empresa especializada em soluções completas para elevadores.',
        image: 'img/modelo2-elevador.png',
        category: 'web',
        languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/visiontechelevadores',
        link: 'https://rayanneernandez.github.io/visiontechelevadores/',
        date: 'ago 2025'
    },
    {
        id: 10,
        title: 'Aguarde... Novo Projeto em Desenvolvimento',
        description: 'Este espaço será ocupado por um projeto que promete surpreender. Fique atento!',
        image: 'img/embreve.jpg',
        category: 'web',
        languages: ['HTML', 'TypeScript', 'Tailwind', 'CSS'],
        date: '2026'
    },
    {
        id: 13,
        title: 'Global IA - Base de Conhecimento',
        description: 'Base de Conhecimento para aprender e dominar a Global IA, com acesso a vídeos e guias passo a passo para aproveitar ao máximo a plataforma.',
        image: 'img/base-conhecimento.png',
        category: 'web',
        languages: ['TypeScript'],
        link: 'https://globalia-base-conhecimento.vercel.app/',
        date: '2025'
    },
    {
        id: 14,
        title: 'Vitalongis - Site Institucional',
        description: 'Site instituicional e facilitar o acesso a cuidadores de qualidade para pessoas idosas, conectando famílias a profissionais qualificados e comprometidos, garantindo bem-estar, segurança e dignidade em cada momento da jornada do envelhecimento.',
        image: 'img/vitalongis.png',
        category: 'web',
        languages: ['TypeScript', 'React', 'Vite', 'HTML5', 'CSS3'],
        github: 'https://github.com/rayanneernandez/vitalongis/',
        link: 'https://rayanneernandez.github.io/vitalongis/',
        date: '2025'
    },
    {
        id: 15,
        title: 'VerySing - Assinador de Contratos',
        description: 'Uma solução moderna, segura e eficiente para assinatura digital de documentos. Permite upload de contratos, assinatura manuscrita com canvas, envio de comunicados e formulários por e‑mail, suporte multi-idioma (PT/EN/ES) e interface glassmorphism, com criptografia de ponta a ponta.',
        image: 'img/verysing.png',
        category: 'web',
        languages: ['TypeScript', 'Python', 'CSS', 'JavaScript'],
        github: 'https://github.com/rayanneernandez/verysing',
        link: 'https://verysing.vercel.app/',
        date: '2026'
    },
    {
        id: 12,
        title: 'Atadiesel - Loja Autônoma (Mobile)',
        description: 'Aplicativo mobile com login , catálogo de produtos, detalhes de produto e acesso à loja autônoma via QR Code integrações com o sistema totvs e um sistema próprio web, juntamente a uma IA que reconhece qual produto a pessoa pega assim deixando de forma totalmente autônoma a cobrança.',
        image: 'img/login.png',
        category: 'mobile',
        languages: ['TypeScript'],
        github: 'https://github.com/Caua-coder/atadiesel-main',
        gallery: [
            'img/login.png',
            'img/home.png',
            'img/produtos.png',
            'img/detalhes.png',
            'img/autonoma.png',
            'img/cartoes.png'
        ],
        date: '2026'
    }
];

const certifications = [
    {
        id: 1,
        title: 'Looker Studio - Criando o primeiro relatório',
        issuer: 'Análise de dados',
        date: '2025',
        image: 'img/lookerstudio.png',
        link: 'https://cursos.alura.com.br/certificate/1dcf01b3-bdec-482e-8fed-71078dac2458'
    },
    {
        id: 2,
        title: 'Fundamentos de Minitab',
        issuer: 'Analise de dados',
        date: '2023',
        image: 'img/minitab.jpg',
        link: 'https://imagens-voitto.s3.amazonaws.com/certificados/UkE9Mzc3NytSQj01MzAyMzU=.pdf'
    },
    {
        id: 3,
        title: 'Empreendedorismo Digital',
        issuer: 'Empreendedora',
        date: '2023',
        image: 'img/empreendedorismodigital.jpg',
        link: 'img/empreendedorismodigital.jpg'
    },
    {
        id: 4,
        title: 'Fundamentos do Power Bi',
        issuer: 'Analise de dados',
        date: '2023',
        image: 'img/powerbi.png',
        link: 'https://imagens-voitto.s3.amazonaws.com/certificados/UkE9NDQ0NytSQj01MzAyMzU=.pdf'
    },
    {
        id: 5,
        title: 'Linux I',
        issuer: 'Conhecendo o Terminal',
        date: '2025',
        image: 'img/Linux.jpg',
        link: 'https://cursos.alura.com.br/certificate/111e30d8-904b-47a7-924a-2e2a42e30797'
    },
    {
        id: 6,
        title: 'Fundamentos de Liderança',
        issuer: 'Noções de liderança - Comportamento',
        date: '2024',
        image: 'img/lideranca.jpg',
        link: 'https://imagens-voitto.s3.amazonaws.com/certificados/UkE9NTA5MytSQj01MzAyMzU=.pdf'
    },
    {
        id: 7,
        title: 'Oratória para líderes',
        issuer: 'Como se comunicar profissionalmente',
        date: '2025',
        image: 'img/oratorialider.jpg',
        link: 'https://cursos.alura.com.br/certificate/b096ef72-93e5-4a8a-ac2f-6ac4ac6218ec'
    },
    {
        id: 8,
        title: 'Análise de Dados com Python',
        issuer: 'Análise de dados com Python - Cursando',
        date: '2026',
        image: 'img/embreve.png',
        link: ''
    }
];
