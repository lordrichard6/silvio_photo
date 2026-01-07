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
            slug: 'o-bordado',
            name: 'O Bordado',
            description: 'Fotografia para o restaurante O Bordado, capturando a essência das suas criações culinárias e ambiente.',
            category: 'Restaurante',
            coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop'
            ]
        },
        {
            id: '2',
            slug: 'bua-trip',
            name: 'Bua Trip',
            description: 'Capturando a energia vibrante e os momentos inesquecíveis do festival Bua Trip.',
            category: 'Festival',
            coverImage: 'https://images.unsplash.com/photo-1459749411177-27595ac6948fa',
            images: [
                'https://images.unsplash.com/photo-1459749411177-27595ac6948fa?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1470229722913-7c0d2dbbafd3?q=80&w=1000&auto=format&fit=crop'
            ]
        },
        {
            id: '3',
            slug: 'curta-metragem',
            name: 'Curta Metragem',
            description: 'Fotografia de bastidores para uma curta-metragem, documentando o processo cinematográfico.',
            category: 'Cinema',
            coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1000&auto=format&fit=crop'
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
