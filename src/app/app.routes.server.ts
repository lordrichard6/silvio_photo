import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Static routes
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'portfolio', renderMode: RenderMode.Prerender },
  { path: 'termos', renderMode: RenderMode.Prerender },
  { path: 'politica-privacidade', renderMode: RenderMode.Prerender },

  // Service detail pages — prerender all known slugs
  {
    path: 'servicos/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { slug: 'sessoes-de-retrato' },
      { slug: 'fotografia-de-eventos' },
      { slug: 'fotografia-comercial' }
    ]
  },

  // Portfolio detail pages — prerender all known slugs
  {
    path: 'portfolio/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { slug: 'bua-trip' },
      { slug: 'o-bordado' },
      { slug: 'curta-metragem' },
      { slug: 'classicos' },
      { slug: 'casa-olival' },
      { slug: 'macau' },
      { slug: 'campeonato-motonautica' },
      { slug: 'o-cardo' },
      { slug: 'nisa' },
      { slug: 'ziva' }
    ]
  },

  // Catch-all: any unknown route falls back to client-side rendering
  { path: '**', renderMode: RenderMode.Client }
];
