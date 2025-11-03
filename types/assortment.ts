// types/assortment.ts

export interface AssortmentItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
  order: number;
  featured?: boolean;
}

export interface AssortmentConfig {
  items: AssortmentItem[];
  metadata: {
    title: string;
    description: string;
    lastUpdated?: string;
    displayMode?: 'grid' | 'masonry' | 'list';
  };
}

export type AssortmentCategory = 
  | 'carving'
  | 'mixed-media'
  | 'candles'
  | 'leatherwork'
  | 'fabrication'
  | 'woodworking'
  | 'process'
  | 'electronics'
  | 'photography'
  | 'drawing'
  | 'ceramics'
  | 'lighting'
  | 'experiment';