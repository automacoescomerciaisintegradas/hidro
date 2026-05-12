
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "HIDROGINÁSTICA",
      description: "Exercícios aquáticos que fortalecem músculos e articulações com baixo impacto",
      icon: "🏊‍♀️"
    },
    {
      title: "HIDROTERAPIA",
      description: "Tratamento terapêutico na água para reabilitação e alívio da dor",
      icon: "💧"
    },
    {
      title: "FISIOTERAPIA NEUROLÓGICA",
      description: "Reabilitação especializada para condições neurológicas",
      icon: "🧠"
    },
    {
      title: "FISIOTERAPIA DOMICILIAR",
      description: "Atendimento personalizado no conforto da sua casa",
      icon: "🏠"
    },
    {
      title: "REABILITAÇÃO DE ATLETAS",
      description: "Recuperação pré e pós-cirúrgica para alta performance",
      icon: "🏃‍♂️"
    },
    {
      title: "LIBERAÇÃO MIOFASCIAL",
      description: "Técnicas avançadas para liberação de tensões musculares",
      icon: "💪"
    },
    {
      title: "MASSAGEM RELAXANTE",
      description: "Terapias para relaxamento e bem-estar completo",
      icon: "🤲"
    },
    {
      title: "FISIOTERAPIA COMPLETA",
      description: "Tratamento integral para todas as suas necessidades",
      icon: "⚕️"
    }
  ];

  return (
    <section id="tratamentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Tratamentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em saúde e reabilitação, com tecnologia de ponta e cuidado humanizado
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
