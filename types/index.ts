export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'projects' | 'assortment';
  featured: boolean;
  coverImage: { url: string; alt: string; width: number; height: number; };
  images: Array<{ url: string; alt: string; width: number; height: number; }>;
  date: Date;
  tags?: string[];
}
