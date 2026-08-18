import React, { useState } from 'react';
import { PRODUCTS_CATALOG } from '../data/mockData';
import { ProductItem } from '../types';
import { buildWhatsAppUrl, PRESET_MESSAGES } from '../utils/whatsapp';
import { 
  ShoppingBag, 
  Search, 
  MessageCircle, 
  Check, 
  Sparkles, 
  ArrowRight,
  Filter
} from 'lucide-react';

export const ProductsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'Todos os Produtos' },
    { id: 'racoes', label: 'Rações' },
    { id: 'petiscos', label: 'Petiscos' },
    { id: 'brinquedos', label: 'Brinquedos' },
    { id: 'higiene', label: 'Higiene & Beleza' },
    { id: 'passaros', label: 'Pássaros' },
    { id: 'acessorios', label: 'Acessórios' },
    { id: 'aquarismo', label: 'Aquarismo' },
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="produtos" className="py-16 md:py-24 bg-[#F5F7FA] relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3.5 py-1 bg-[#063B98]/10 text-[#063B98] text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            Variedade & Qualidade
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#032866] font-heading tracking-tight">
            Nossos Produtos em Destaque
          </h2>

          <p className="mt-3 text-base sm:text-lg text-gray-600 font-medium">
            Trabalhamos com marcas consagradas e produtos selecionados para atender todas as fases e necessidades do seu pet.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por ração, brinquedo, petisco, passarinho..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#063B98] text-sm text-gray-800 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-700 bg-gray-100 px-2 py-0.5 rounded-md"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#063B98] text-white shadow-xs'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product: ProductItem) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#063B98] transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#063B98] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#032866] font-heading group-hover:text-[#063B98] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 font-normal">
                      {product.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-1 pt-1">
                      {product.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00A651] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consult Availability CTA */}
                  <div className="pt-3 border-t border-gray-200">
                    <a
                      id={`product-whatsapp-${product.id}`}
                      href={buildWhatsAppUrl(PRESET_MESSAGES.productInquiry(product.name, product.categoryLabel))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl text-xs font-bold text-white bg-[#00A651] hover:bg-[#008c44] transition-all shadow-2xs active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Consultar disponibilidade</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 max-w-lg mx-auto">
            <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-base font-bold text-gray-700">Nenhum produto encontrado nessa busca</p>
            <p className="text-xs text-gray-500 mt-1 mb-4">Você pode perguntar diretamente para nossa equipe no WhatsApp!</p>
            <a
              href={buildWhatsAppUrl(PRESET_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#00A651]"
            >
              <MessageCircle className="w-4 h-4" />
              Perguntar no WhatsApp
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
