// components/AssortmentGrid.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AssortmentItem } from '@/types/assortment';

interface AssortmentGridProps {
  items: AssortmentItem[];
  showCaptions?: boolean;
  enableFiltering?: boolean;
}

export default function AssortmentGrid({ 
  items, 
  showCaptions = false,
  enableFiltering = false 
}: AssortmentGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<string>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Get unique categories
  const categories = ['all', ...new Set(items.map(item => item.category)
  .filter((category): category is string => !!category)
)];
  

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  // Sort items by order
  const sortedItems = [...filteredItems].sort((a, b) => a.order - b.order);

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  const handleImageError = (id: string) => {
    console.error(`Failed to load image: ${id}`);
    setImageLoadErrors(prev => new Set([...prev, id]));
  };

  return (
    <div className="w-full">
      {/* Category Filter (optional) */}
      {enableFiltering && categories.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {sortedItems.map((item) => {
          const hasError = imageLoadErrors.has(item.id);
          const isLoaded = loadedImages.has(item.id);
          const isGif = item.src.toLowerCase().endsWith('.gif');

          if (hasError) {
            return (
              <div
                key={item.id}
                className="bg-gray-100 rounded-lg flex items-center justify-center aspect-square"
              >
                <p className="text-gray-500">Image unavailable</p>
              </div>
            );
          }

          return (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg bg-gray-50"
            >
              {/* Loading skeleton */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse" />
              )}

              {/* Image container with aspect ratio preservation */}
              <div className="relative w-full">
                {isGif ? (
                  // For GIFs, use regular img tag to preserve animation
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full h-auto transition-opacity duration-300 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(item.id)}
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  // For static images, use Next.js Image component
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={800}
                    className={`w-full h-auto transition-opacity duration-300 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(item.id)}
                    onError={() => handleImageError(item.id)}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}

                {/* Caption overlay (on hover) */}
                {showCaptions && item.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{item.caption}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}