const projects = [
    {
        id: 1,
        title: 'Controle de Solicitações',
        description: 'Este projeto foi desenvolvido para facilitar o gerenciamento e organização de solicitações de melhorias em sistemas corporativos. Com ele, você pode substituir planilhas manuais por uma solução mais eficiente e centralizada, permitindo um controle mais estruturado e ágil dos pedidos.',
        image: 'img/painel_de_solicitacoes.PNG',
        category: 'web',
        languages: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/rayanneernandez/controle-de-solicitacoes',
        link: 'https://rayanneernandez.github.io/controle-de-solicitacoes/painel.html'
    },
    {
        id: 2,
        title: 'Elemental - Saúde Mental',
        description: 'Esse app tem como principal objetivo apoiar os usuários na criação de uma rotina saudável e promover o bem-estar mental.<br><br> Em breve saindo link do aplicativo.',
        image: 'img/elemental.jpg',
        category: 'mobile',
        languages: ['Ionic','TypeScript','JavaScript'],
        github: 'https://github.com/rayanneernandez/elementalapp'
    },
    {
        id: 3,
        title: 'Site - Rede de Hoteis',
        description: 'Site de divulgação dos hoteis, quartos e serviços desta rede.',
        image: 'img/redehoteis.PNG',
        category: 'academico',
        languages: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/hotel',
        link: 'https://rayanneernandez.github.io/hotel/'
    },
    {
        id: 4,
        title: 'Gerenciamento interno de hotéis',
        description: 'Nesta plataforma irá conseguir gerenciar as reservas, ter controle dos funcionários e todo o gerenciamento do hotel.',
        image: 'img/gerenciamento-hotel.PNG',
        category: 'academico',
        languages: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/gerenciamento-hotel-interno',
        link: 'https://rayanneernandez.github.io/gerenciamento-hotel-interno/'
    },
    {
        id: 5,
        title: 'Ranking de Técnicos',
        description: 'Sistema de Ranking de Técnicos desenvolvido para otimizar o acompanhamento de performance em equipes técnicas! <br><br> Em breve diponibilizando o link.',
        image: 'img/rankingtecnicos.jpg',
        category: 'web',
        languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/gerenciamento-hotel-interno',
    },
    {
        id: 6,
        title: 'Controle de Estoque',
        description: 'Controle de estoque apenas para uso mobile, resolução mobile.',
        image: 'img/controleestoque.jpg',
        category: 'mobile',
        languages: ['TypeScript', 'Tailwind'],
        github: 'https://github.com/rayanneernandez/controleestoque',
        link: 'https://rayanneernandez.github.io/controleestoque/'
    },
    {
        id: 7,
        title: 'Sistema de Análise e Visualização de Notas Universitário',
        description: 'Aplicativo Python que ajuda universidades a acompanhar o desempenho dos alunos com importação automática de dados, visualizações interativas, análise de tendências e relatórios customizáveis, tudo com uma interface limpa e segura.',
        image: 'img/sistemanotas.PNG',
        category: 'pessoal',
        languages: ['python', 'HTML', 'CSS', 'TypeScript', 'JavaScipt'],
        github: 'https://github.com/rayanneernandez/gerenciamento-hotel-interno',
        link: 'https://tubular-cactus-cd43f0.netlify.app/'
    },
    {
        id: 8,
        title: 'Agenda de controle técnicos de externos',
        description: 'Este sistema serve como facilitador para organizar sua agenda, na descrições utilizados textos padronizados onde sempre usamos para facilitar ainda mais nosso dia a dia, onde direciona direto para a sua agenda do google.',
        image: 'img/Organizadoragenda.PNG',
        category: 'web',
        languages: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/rayanneernandez/organizador-de-agenda',
        link: 'https://rayanneernandez.github.io/organizador-de-agenda/'
    },
    {
        id: 9,
        title: 'Aguarde... Novo Projeto em Desenvolvimento',
        description: 'Este espaço será ocupado por um projeto que promete surpreender. Fique atento!',
        image: 'img/embreve.jpg',
        category: 'web',
        languages: ['HTML', 'TypeScript', 'Tailwind', 'CSS']
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
        date: '2025',
        image: 'img/embreve.png',
        link: ''
    }
];
