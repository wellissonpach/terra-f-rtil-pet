import React from 'react';
import { INSTAGRAM_POSTS_DATA } from '../data/mockData';
import { COMPANY_CONTACTS } from '../utils/whatsapp';
import { Instagram, Heart, MessageSquare, ExternalLink, Sparkles, UserPlus, Grid } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-16 md:py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block px-3.5 py-1 bg-pink-50 text-pink-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
              {COMPANY_CONTACTS.instagram}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#032866] font-heading tracking-tight">
              Acompanhe a Terra Fértil Pet
            </h2>

            <p className="mt-2 text-base sm:text-lg text-gray-600 font-medium max-w-xl">
              Dicas, novidades, produtos, cuidados e tudo sobre o mundo dos pets direto no nosso feed.
            </p>
          </div>

          {/* Social Stats & Follow CTA */}
          <div className="flex items-center gap-3">
            <div className="p-3 px-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center">
              <span className="block text-lg font-black text-[#032866]">{COMPANY_CONTACTS.instagramFollowers}</span>
              <span className="text-[11px] text-gray-500 font-medium">Seguidores</span>
            </div>

            <div className="p-3 px-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center">
              <span className="block text-lg font-black text-[#032866]">{COMPANY_CONTACTS.instagramPosts}</span>
              <span className="text-[11px] text-gray-500 font-medium">Publicações</span>
            </div>

            <a
              id="instagram-follow-cta"
              href={COMPANY_CONTACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-sm font-bold text-white bg-[#063B98] hover:bg-[#032866] transition-all shadow-sm active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir</span>
            </a>
          </div>
        </div>

        {/* Instagram Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS_DATA.map((post) => (
            <a
              key={post.id}
              href={COMPANY_CONTACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F5F7FA] rounded-2xl overflow-hidden border border-gray-200 hover:border-[#063B98] transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-200">
                <img
                  src={post.image}
                  alt={post.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-sm">
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Caption & Brand Signature */}
              <div className="p-4 space-y-2">
                <p className="text-xs text-gray-700 leading-relaxed line-clamp-2 group-hover:text-gray-900 font-normal">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#063B98] font-bold pt-1">
                  <span>@terrafertilpet</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Facebook Link Banner */}
        <div className="mt-8 text-center text-xs text-gray-500 font-medium">
          Você também pode nos encontrar no Facebook:{' '}
          <a
            href={COMPANY_CONTACTS.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#063B98] hover:underline"
          >
            {COMPANY_CONTACTS.facebook}
          </a>
        </div>

      </div>
    </section>
  );
};
