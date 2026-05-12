
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-300/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-amber-300/15 to-yellow-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 mb-4 animate-fade-in">
              HIDROREABILITAR
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto rounded-full"></div>
          </div>

          {/* Main headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Movimento sem dor,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
              vida com mais qualidade
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in">
            Da hidroterapia à reabilitação de atletas, nossos especialistas usam o poder terapêutico da água e da fisioterapia para restaurar sua saúde e bem-estar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              asChild
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50"
            >
              <a href="#contato">Agende sua Avaliação</a>
            </Button>
            <Button
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg transition-all duration-300"
            >
              <a href="#tratamentos">Conheça nossos Tratamentos</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center animate-bounce">
            <ArrowDown className="text-yellow-400 w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
