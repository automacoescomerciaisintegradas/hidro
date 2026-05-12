
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-300/5"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-300/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">pacientes dizem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-white/10 to-gray-800/20 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-black font-bold">M</span>
                </div>
                <h3 className="text-xl font-bold text-white">Marta Silva</h3>
                <p className="text-yellow-400">Paciente de Hidroterapia</p>
              </div>
              
              <div className="text-6xl text-yellow-400 mb-4">"</div>
              
              <blockquote className="text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-6">
                Depois que comecei o tratamento na HIDROREABILITAR, minha vida mudou completamente. A dor nas costas que me acompanhava há anos desapareceu em menos de 2 meses. A equipe é incrível e o atendimento é excepcional!
              </blockquote>
              
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional testimonials in smaller format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-white/5 to-gray-800/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sm text-black font-bold">J</span>
              </div>
              <h4 className="text-white font-bold mb-2">João Santos</h4>
              <p className="text-gray-400 text-sm mb-3">Atleta Profissional</p>
              <p className="text-gray-300 text-sm italic">
                "A reabilitação pós-cirúrgica foi perfeita. Voltei aos treinos mais forte que antes!"
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-white/5 to-gray-800/10 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sm text-black font-bold">A</span>
              </div>
              <h4 className="text-white font-bold mb-2">Ana Costa</h4>
              <p className="text-gray-400 text-sm mb-3">Fisioterapia Neurológica</p>
              <p className="text-gray-300 text-sm italic">
                "O cuidado especializado me ajudou a recuperar movimentos que pensei ter perdido para sempre."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
