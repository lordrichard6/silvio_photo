import { Injectable } from '@angular/core';

export interface PortfolioClient {
    id: string;
    slug: string;
    name: string;
    description: string;
    coverImage: string;
    images: string[];
    category?: string;
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private clients: PortfolioClient[] = [
        {
            id: '1',
            slug: 'bua-trip',
            name: 'Bua Trip',
            description: 'Capturando a energia vibrante e os momentos inesquecíveis do festival Bua Trip. Fotografia de evento que documenta a atmosfera festiva, performances ao vivo e a conexão entre artistas e público.',
            category: 'Festival',
            coverImage: 'img/bua_trip/0N2A2260.webp',
            images: [
                'img/bua_trip/0N2A2175.webp',
                'img/bua_trip/0N2A2191.webp',
                'img/bua_trip/0N2A2248.webp',
                'img/bua_trip/0N2A2260.webp',
                'img/bua_trip/0N2A2274.webp',
                'img/bua_trip/0N2A1974.webp',
                'img/bua_trip/0N2A2025.webp',
                'img/bua_trip/0N2A2049.webp'
            ]
        },
        {
            id: '2',
            slug: 'o-bordado',
            name: 'O Bordado',
            description: 'Fotografia gastronómica e de ambiente para o restaurante O Bordado. Imagens que realçam a apresentação artística dos pratos, a atmosfera acolhedora e a experiência culinária autêntica.',
            category: 'Restaurante',
            coverImage: 'img/O Bordado/0N2A2418.webp',
            images: [
                'img/O Bordado/0N2A2324.webp',
                'img/O Bordado/0N2A2351.webp',
                'img/O Bordado/0N2A2352.webp',
                'img/O Bordado/0N2A2411.webp',
                'img/O Bordado/0N2A2418.webp',
                'img/O Bordado/0N2A8353.webp',
                'img/O Bordado/IMG_6748.webp'
            ]
        },
        {
            id: '3',
            slug: 'curta-metragem',
            name: 'Curta Metragem',
            description: 'Fotografia de bastidores para uma curta-metragem, documentando o processo cinematográfico. Capturas que revelam a magia por trás das câmeras, a dedicação da equipa e os momentos criativos da produção.',
            category: 'Cinema',
            coverImage: 'img/curta metragem/0N2A1428.webp',
            images: [
                'img/curta metragem/0N2A0450.webp',
                'img/curta metragem/0N2A0476.webp',
                'img/curta metragem/0N2A0534.webp',
                'img/curta metragem/0N2A1354.webp',
                'img/curta metragem/0N2A1376.webp',
                'img/curta metragem/0N2A1428.webp',
                'img/curta metragem/0N2A1453.webp',
                'img/curta metragem/0N2A1464.webp',
                'img/curta metragem/0N2A9979.webp'
            ]
        },
        {
            id: '4',
            slug: 'classicos',
            name: 'Clássicos',
            description: 'Sessão fotográfica de automóveis clássicos, capturando a elegância atemporal e o charme vintage de carros históricos. Cada imagem celebra a engenharia e o design icónico destas máquinas lendárias.',
            category: 'Automóvel',
            coverImage: 'img/Classicos/0N2A8539.webp',
            images: [
                'img/Classicos/0N2A7313.webp',
                'img/Classicos/0N2A7318.webp',
                'img/Classicos/0N2A7324.webp',
                'img/Classicos/0N2A7331.webp',
                'img/Classicos/0N2A8539.webp',
                'img/Classicos/0N2A8550.webp',
                'img/Classicos/0N2A8596.webp',
                'img/Classicos/0N2A8599.webp'
            ]
        },
        {
            id: '5',
            slug: 'casa-olival',
            name: 'Casa Olival',
            description: 'Fotografia profissional de uma casa de férias moderna para listagem no Airbnb. Imagens que destacam os espaços interiores elegantes, design contemporâneo e ambientes acolhedores, ideais para atrair hóspedes.',
            category: 'Imobiliário',
            coverImage: 'img/Casa Olival/0036D1B4-3382-494B-A029-69A342BF7940.webp',
            images: [
                'img/Casa Olival/0036D1B4-3382-494B-A029-69A342BF7940.webp',
                'img/Casa Olival/045F1B2F-1F55-4A43-86AD-970E7BA391E6.webp',
                'img/Casa Olival/18CAFB48-168F-45F4-B753-39D0BDF50F8A.webp',
                'img/Casa Olival/60B7971F-0DB4-4A6F-89AC-32A520FC05FC.webp',
                'img/Casa Olival/6813182C-D4A6-4C22-9DB6-24BC2E0CEB92.webp',
                'img/Casa Olival/B2D07CAF-5572-4009-9880-7ED13475B767.webp'
            ]
        },
        {
            id: '6',
            slug: 'macau',
            name: 'Macau',
            description: 'Sessão fotográfica encantadora do querido cão Macau. Retratos cheios de personalidade que capturam a alegria, brincadeira e momentos especiais deste adorável companheiro de quatro patas.',
            category: 'Animais',
            coverImage: 'img/Macau/IMG_9499.webp',
            images: [
                'img/Macau/0N2A7386.webp',
                'img/Macau/EGZV9639.webp',
                'img/Macau/IMG_0017.webp',
                'img/Macau/IMG_1885.webp',
                'img/Macau/IMG_2223.webp',
                'img/Macau/IMG_9499.webp',
                'img/Macau/IMG_9500.webp',
                'img/Macau/IMG_9501.webp',
                'img/Macau/JCXA5078.webp',
                'img/Macau/MRZP9495.webp'
            ]
        },
        {
            id: '7',
            slug: 'campeonato-motonautica',
            name: 'Campeonato de Motonautica',
            description: 'Cobertura fotográfica do emocionante Campeonato de Motonáutica, capturando a velocidade, adrenalina e espetáculo das embarcações em alta competição. Momentos dinâmicos de ação e desporto aquático.',
            category: 'Desporto',
            coverImage: 'img/motonautica/SVAL4367.webp',
            images: [
                'img/motonautica/SVAL4312.webp',
                'img/motonautica/SVAL4317.webp',
                'img/motonautica/SVAL4354.webp',
                'img/motonautica/SVAL4367.webp',
                'img/motonautica/SVAL4419.webp',
                'img/motonautica/SVAL4461.webp',
                'img/motonautica/SVAL4472.webp',
                'img/motonautica/SVAL4487.webp',
                'img/motonautica/SVAL4491.webp',
                'img/motonautica/SVAL4503.webp'
            ]
        },
        {
            id: '8',
            slug: 'o-cardo',
            name: 'O Cardo',
            description: 'Sessão fotográfica para o restaurante O Cardo, documentando a qualidade e sofisticação da sua oferta gastronómica. Fotografias que transmitem a paixão pela cozinha e a dedicação aos detalhes.',
            category: 'Restaurante',
            coverImage: 'img/O Cardo/IMG_9414.webp',
            images: [
                'img/O Cardo/IMG_9411.webp',
                'img/O Cardo/IMG_9412.webp',
                'img/O Cardo/IMG_9413.webp',
                'img/O Cardo/IMG_9414.webp',
                'img/O Cardo/IMG_9415.webp',
                'img/O Cardo/IMG_9416.webp',
                'img/O Cardo/IMG_9417.webp',
                'img/O Cardo/IMG_9418.webp',
                'img/O Cardo/IMG_9419.webp',
                'img/O Cardo/IMG_9420.webp'
            ]
        },
        {
            id: '9',
            slug: 'nisa',
            name: 'Nisa',
            description: 'Fotografia documental da encantadora vila portuguesa de Nisa. Imagens que capturam a beleza arquitectónica, paisagens naturais e o charme autêntico desta região do Alentejo.',
            category: 'Paisagem',
            coverImage: 'img/Nisa/0N2A7818.webp',
            images: [
                'img/Nisa/0N2A1505.webp',
                'img/Nisa/0N2A7813.webp',
                'img/Nisa/0N2A7818.webp',
                'img/Nisa/0N2A7819.webp',
                'img/Nisa/IMG_0032.webp',
                'img/Nisa/IMG_0038.webp',
                'img/Nisa/IMG_0497.webp',
                'img/Nisa/IMG_0531.webp',
                'img/Nisa/IMG_0939.webp'
            ]
        }
    ];

    getClients(): PortfolioClient[] {
        return this.clients;
    }

    getClientBySlug(slug: string): PortfolioClient | undefined {
        return this.clients.find(client => client.slug === slug);
    }
}
