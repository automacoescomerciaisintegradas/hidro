
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/5 to-amber-300/5"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-yellow-400/10 to-amber-300/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">HIDROREABILITAR</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Nossa missão é reabilitar vidas, combinando a suavidade da água com a precisão da fisioterapia para devolver a você a alegria de se movimentar.
          </p>
          
          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            Unimos tecnologia e cuidado individualizado para acelerar sua recuperação e elevar seu potencial, dentro e fora da água. Nossa equipe de especialistas está dedicada a transformar a reabilitação em uma experiência de saúde, superação e bem-estar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300 mb-2">
                500+
              </div>
              <div className="text-white font-semibold">Pacientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300 mb-2">
                15+
              </div>
              <div className="text-white font-semibold">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300 mb-2">
                98%
              </div>
              <div className="text-white font-semibold">Satisfação dos Pacientes</div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50"
          >
            Conheça Nossa Equipe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
