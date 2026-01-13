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
            coverImage: 'img/bua_trip/0N2A2260.jpg',
            images: [
                'img/bua_trip/0N2A2175.JPG',
                'img/bua_trip/0N2A2191.JPG',
                'img/bua_trip/0N2A2248.JPG',
                'img/bua_trip/0N2A2260.jpg',
                'img/bua_trip/0N2A2274.jpg',
                'img/bua_trip/0N2A1974.jpeg',
                'img/bua_trip/0N2A2025.jpeg',
                'img/bua_trip/0N2A2049.jpeg'
            ]
        },
        {
            id: '2',
            slug: 'o-bordado',
            name: 'O Bordado',
            description: 'Fotografia gastronómica e de ambiente para o restaurante O Bordado. Imagens que realçam a apresentação artística dos pratos, a atmosfera acolhedora e a experiência culinária autêntica.',
            category: 'Restaurante',
            coverImage: 'img/O Bordado/0N2A2418.jpg',
            images: [
                'img/O Bordado/0N2A2324.jpg',
                'img/O Bordado/0N2A2351.jpg',
                'img/O Bordado/0N2A2352.jpg',
                'img/O Bordado/0N2A2411.jpg',
                'img/O Bordado/0N2A2418.jpg',
                'img/O Bordado/0N2A8353.jpg',
                'img/O Bordado/IMG_6748.jpg'
            ]
        },
        {
            id: '3',
            slug: 'curta-metragem',
            name: 'Curta Metragem',
            description: 'Fotografia de bastidores para uma curta-metragem, documentando o processo cinematográfico. Capturas que revelam a magia por trás das câmeras, a dedicação da equipa e os momentos criativos da produção.',
            category: 'Cinema',
            coverImage: 'img/curta metragem/0N2A1354.jpg',
            images: [
                'img/curta metragem/0N2A0450.jpg',
                'img/curta metragem/0N2A0476.jpg',
                'img/curta metragem/0N2A0534.jpg',
                'img/curta metragem/0N2A1354.jpg',
                'img/curta metragem/0N2A1376.jpg',
                'img/curta metragem/0N2A1428.jpg',
                'img/curta metragem/0N2A1453.jpg',
                'img/curta metragem/0N2A1464.jpg',
                'img/curta metragem/0N2A9979.jpg'
            ]
        },
        {
            id: '4',
            slug: 'classicos',
            name: 'Clássicos',
            description: 'Sessão fotográfica de automóveis clássicos, capturando a elegância atemporal e o charme vintage de carros históricos. Cada imagem celebra a engenharia e o design icónico destas máquinas lendárias.',
            category: 'Automóvel',
            coverImage: 'img/Classicos/0N2A8539.jpg',
            images: [
                'img/Classicos/0N2A7313.jpg',
                'img/Classicos/0N2A7318.jpg',
                'img/Classicos/0N2A7324.jpg',
                'img/Classicos/0N2A7331.jpg',
                'img/Classicos/0N2A8539.jpg',
                'img/Classicos/0N2A8550.jpg',
                'img/Classicos/0N2A8596.jpg',
                'img/Classicos/0N2A8599.jpg'
            ]
        },
        {
            id: '5',
            slug: 'casa-olival',
            name: 'Casa Olival',
            description: 'Fotografia profissional de uma casa de férias moderna para listagem no Airbnb. Imagens que destacam os espaços interiores elegantes, design contemporâneo e ambientes acolhedores, ideais para atrair hóspedes.',
            category: 'Imobiliário',
            coverImage: 'img/Casa Olival/0036D1B4-3382-494B-A029-69A342BF7940.jpg',
            images: [
                'img/Casa Olival/0036D1B4-3382-494B-A029-69A342BF7940.jpg',
                'img/Casa Olival/045F1B2F-1F55-4A43-86AD-970E7BA391E6.jpg',
                'img/Casa Olival/18CAFB48-168F-45F4-B753-39D0BDF50F8A.jpg',
                'img/Casa Olival/60B7971F-0DB4-4A6F-89AC-32A520FC05FC.jpg',
                'img/Casa Olival/6813182C-D4A6-4C22-9DB6-24BC2E0CEB92.jpg',
                'img/Casa Olival/B2D07CAF-5572-4009-9880-7ED13475B767.jpg'
            ]
        },
        {
            id: '6',
            slug: 'macau',
            name: 'Macau',
            description: 'Sessão fotográfica encantadora do querido cão Macau. Retratos cheios de personalidade que capturam a alegria, brincadeira e momentos especiais deste adorável companheiro de quatro patas.',
            category: 'Animais',
            coverImage: 'img/Macau/IMG_9499.jpg',
            images: [
                'img/Macau/0N2A7386.jpg',
                'img/Macau/EGZV9639.jpg',
                'img/Macau/IMG_0017.jpg',
                'img/Macau/IMG_1885.jpg',
                'img/Macau/IMG_2223.jpg',
                'img/Macau/IMG_9499.jpg',
                'img/Macau/IMG_9500.jpg',
                'img/Macau/IMG_9501.jpg',
                'img/Macau/JCXA5078.jpg',
                'img/Macau/MRZP9495.jpg'
            ]
        },
        {
            id: '7',
            slug: 'campeonato-motonautica',
            name: 'Campeonato de Motonautica',
            description: 'Cobertura fotográfica do emocionante Campeonato de Motonáutica, capturando a velocidade, adrenalina e espetáculo das embarcações em alta competição. Momentos dinâmicos de ação e desporto aquático.',
            category: 'Desporto',
            coverImage: 'img/motonautica/SVAL4367.jpg',
            images: [
                'img/motonautica/SVAL4312.jpg',
                'img/motonautica/SVAL4317.jpg',
                'img/motonautica/SVAL4354.jpg',
                'img/motonautica/SVAL4367.jpg',
                'img/motonautica/SVAL4419.jpg',
                'img/motonautica/SVAL4461.jpg',
                'img/motonautica/SVAL4472.jpg',
                'img/motonautica/SVAL4487.jpg',
                'img/motonautica/SVAL4491.jpg',
                'img/motonautica/SVAL4503.jpg'
            ]
        },
        {
            id: '8',
            slug: 'o-cardo',
            name: 'O Cardo',
            description: 'Sessão fotográfica para o restaurante O Cardo, documentando a qualidade e sofisticação da sua oferta gastronómica. Fotografias que transmitem a paixão pela cozinha e a dedicação aos detalhes.',
            category: 'Restaurante',
            coverImage: 'img/O Cardo/IMG_9414.jpg',
            images: [
                'img/O Cardo/IMG_9411.jpg',
                'img/O Cardo/IMG_9412.jpg',
                'img/O Cardo/IMG_9413.jpg',
                'img/O Cardo/IMG_9414.jpg',
                'img/O Cardo/IMG_9415.jpg',
                'img/O Cardo/IMG_9416.jpg',
                'img/O Cardo/IMG_9417.jpg',
                'img/O Cardo/IMG_9418.jpg',
                'img/O Cardo/IMG_9419.jpg',
                'img/O Cardo/IMG_9420.jpg'
            ]
        },
        {
            id: '9',
            slug: 'nisa',
            name: 'Nisa',
            description: 'Fotografia documental da encantadora vila portuguesa de Nisa. Imagens que capturam a beleza arquitectónica, paisagens naturais e o charme autêntico desta região do Alentejo.',
            category: 'Paisagem',
            coverImage: 'img/Nisa/0N2A7818.jpg',
            images: [
                'img/Nisa/0N2A1505.jpg',
                'img/Nisa/0N2A7813.jpg',
                'img/Nisa/0N2A7818.jpg',
                'img/Nisa/0N2A7819.jpg',
                'img/Nisa/IMG_0032.jpg',
                'img/Nisa/IMG_0038.jpg',
                'img/Nisa/IMG_0497.jpg',
                'img/Nisa/IMG_0531.jpg',
                'img/Nisa/IMG_0939.jpg'
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
