import Image from "next/image";

'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  id: number;
  type: 'photo' | 'video' | 'interview';
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    type: 'photo',
    title: 'Luxury Villa Interior',
    description: 'Stunning photography of a modern luxury home in the hills.',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
  },
  {
    id: 2,
    type: 'video',
    title: 'Drone Walkthrough - Oceanfront Property',
    description: 'Aerial drone footage showcasing breathtaking ocean views.',
    url: 'https://assets.mixkit.co/videos/preview/12345/12345-large.mp4', // Replace with real stock
    thumbnail: 'https://picsum.photos/id/1015/600/400',
  },
  {
    id: 3,
    type: 'interview',
    title: 'Realtor Interview: Market Trends',
    description: 'In-depth conversation with top realtor on current market.',
    url: 'https://www.youtube.com/embed/dQw4w9wgxcq', // Placeholder
    thumbnail: 'https://picsum.photos/id/64/600/400',
  },
  {
    id: 4,
    type: 'photo',
    title: 'Modern Kitchen',
    description: 'High-end real estate photography highlighting kitchen details.',
    url: 'https://images.unsplash.com/photo-1556911220-bff31c812db2',
    thumbnail: 'https://images.unsplash.com/photo-1556911220-bff31c812db2?w=600',
  },
  {
    id: 5,
    type: 'video',
    title: 'Property Walkthrough',
    description: 'Virtual tour of a spacious family home.',
    url: 'https://assets.mixkit.co/videos/preview/23456/23456-large.mp4',
    thumbnail: 'https://picsum.photos/id/106/600/400',
  },
];

export default function RealEstatePortfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'photo' | 'video' | 'interview'>('all');

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold">RE</div>
            <div>
              <div className="font-semibold text-xl tracking-tight">VistaLens</div>
              <div className="text-xs text-zinc-400 -mt-1">Real Estate Media</div>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-sm">
            <a href="#work" className="hover:text-amber-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            <button 
              onClick={() => window.open('https://vercel.com', '_blank')}
              className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-amber-400 hover:text-black transition-all"
            >
              Deployed on Vercel
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-800 rounded-full text-sm mb-6">
            📸 Professional Real Estate Photography & Videography
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            Capturing Homes.<br />Elevating Sales.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-10">
            Stunning photography, immersive walkthroughs, realtor interviews, and cinematic drone footage for luxury properties.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl text-lg transition-all inline-flex items-center justify-center">
              View Portfolio
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/30 hover:bg-white/5 rounded-xl text-lg transition-all inline-flex items-center justify-center">
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-amber-500 text-sm mb-2">SHOWCASE</div>
            <h2 className="text-5xl font-bold tracking-tight">Featured Work</h2>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0">
            {['all', 'photo', 'video', 'interview'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-5 py-2 rounded-full text-sm capitalize transition-all ${
                  activeFilter === filter 
                    ? 'bg-amber-500 text-black font-medium' 
                    : 'bg-zinc-900 hover:bg-zinc-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-video bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image 
                src={item.thumbnail || item.url} 
                alt={item.title}
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="uppercase text-xs tracking-widest text-amber-400 mb-2">
                  {item.type.toUpperCase()}
                </div>
                <h3 className="text-3xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400 line-clamp-2">{item.description}</p>
              </div>
              
              <div className="absolute top-6 right-6 px-4 py-1 bg-black/70 text-xs rounded-full">
                {item.type === 'video' ? '▶ Play' : 'View'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="text-amber-500 text-sm tracking-widest mb-4">OUR STORY</div>
              <h2 className="text-5xl font-bold tracking-tighter leading-tight">Professional visual storytelling for real estate.</h2>
            </div>
            <div className="text-lg text-zinc-400 space-y-6">
              <p>
                With over 8 years capturing the essence of properties, we specialize in creating compelling visual content that helps homes sell faster and at higher prices.
              </p>
              <p>
                Our services include high-resolution photography, 4K video walkthroughs, drone cinematography, and professional realtor interviews.
              </p>
              <div className="pt-4 flex gap-8 text-sm">
                <div>
                  <div className="text-4xl font-semibold text-white">150+</div>
                  <div className="text-zinc-500">Properties Captured</div>
                </div>
                <div>
                  <div className="text-4xl font-semibold text-white">98%</div>
                  <div className="text-zinc-500">Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">Ready to showcase your next listing?</h2>
          <p className="text-xl text-zinc-400 mb-10">Let's create visuals that turn browsers into buyers.</p>
          
          <a 
            href="mailto:demo@vistalens.com" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl text-lg font-semibold hover:bg-amber-400 transition-colors"
          >
            Start a Project →
          </a>
          
          <div className="mt-12 text-sm text-zinc-500">
            Demo Portfolio • Built with Next.js + Tailwind • Deployed on Vercel
          </div>
        </div>
      </section>

      {/* Modal for media preview */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6" onClick={() => setSelectedItem(null)}>
          <div className="max-w-5xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <div className="text-amber-400 text-sm">{selectedItem.type.toUpperCase()}</div>
                <h3 className="text-4xl font-semibold">{selectedItem.title}</h3>
              </div>
              <button onClick={() => setSelectedItem(null)} className="text-4xl text-zinc-400 hover:text-white">×</button>
            </div>
            
            {selectedItem.type === 'photo' && (
              <Image 
                src={selectedItem.url} 
                alt={selectedItem.title} 
                width={1200} 
                height={800}
                className="rounded-3xl mx-auto"
              />
            )}
            
            {(selectedItem.type === 'video' || selectedItem.type === 'interview') && (
              <div className="aspect-video bg-black rounded-3xl overflow-hidden">
                {selectedItem.url.includes('youtube') ? (
                  <iframe 
                    src={selectedItem.url} 
                    className="w-full h-full" 
                    allowFullScreen
                  />
                ) : (
                  <video 
                    src={selectedItem.url} 
                    controls 
                    autoPlay 
                    className="w-full h-full"
                  />
                )}
              </div>
            )}
            
            <p className="mt-8 text-zinc-400 text-lg max-w-2xl">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
