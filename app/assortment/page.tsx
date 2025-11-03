// app/assortment/page.tsx
import { Metadata } from 'next';
import AssortmentGrid from '@/components/AssortmentGrid';
import { AssortmentConfig } from '@/types/assortment';
import assortmentData from '@/public/data/assortment.json';

export const metadata: Metadata = {
  title: 'Assortment - Gunner Lee',
  description: 'A bunch of things I make with my hands. Personal projects, experiments, and handcrafted pieces by Gunner Lee.',
  openGraph: {
    title: 'Assortment - Gunner Lee',
    description: 'Handcrafted pieces and experiments',
    type: 'website',
  },
};

// If you need to fetch the JSON dynamically (e.g., from an API route)
// you can use this function instead of importing directly
async function getAssortmentData(): Promise<AssortmentConfig> {
  // For now, we're using the imported data
  // Later this could be an API call or CMS fetch
  return assortmentData as AssortmentConfig;
}

export default async function AssortmentPage() {
  const data = await getAssortmentData();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            {data.metadata.title || 'assortm3nt'}
          </h1>
          <p className="text-gray-600 text-lg">
            {data.metadata.description || 'A bunch of things I make with my hands.'}
          </p>
        </header>

        {/* Main Content Grid */}
        <AssortmentGrid 
          items={data.items}
          showCaptions={true}
          enableFiltering={false} // Set to true if you want category filtering
        />

        {/* Optional: Add a footer note or update timestamp */}
        {data.metadata.lastUpdated && (
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Last updated: {new Date(data.metadata.lastUpdated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </footer>
        )}
      </div>
    </div>
  );
}