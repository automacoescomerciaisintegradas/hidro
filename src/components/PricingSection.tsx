
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Planos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Atendimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua jornada de recuperação e bem-estar
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Essencial */}
          <Card className="relative overflow-hidden border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-amber-300"></div>
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">💠</div>
              <CardTitle className="text-2xl font-bold text-black">Plano Essencial</CardTitle>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                R$130
                <span className="text-lg text-gray-600">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Ideal para começar a automatização</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Até 10 atendimentos automatizados</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Suporte via WhatsApp</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Configuração básica de IA</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-bold hover:scale-105 transition-all duration-300">
                <a href="#contato">Escolher Plano</a>
              </Button>
            </CardContent>
          </Card>

          {/* Plano Premium */}
          <Card className="relative overflow-hidden border-2 border-yellow-400 hover:border-amber-300 transition-all duration-300 hover:scale-105 shadow-xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-amber-300"></div>
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-300 text-black px-3 py-1 rounded-full text-sm font-bold">
              MAIS POPULAR
            </div>
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-4">👑</div>
              <CardTitle className="text-2xl font-bold text-black">Plano Premium</CardTitle>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                R$300
                <span className="text-lg text-gray-600">/trimestral</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Estratégia personalizada de atração de pacientes</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Assistente de IA exclusivo</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Relatórios de desempenho</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✅</span>
                  <span className="text-gray-700">Suporte prioritário</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                <a href="#contato">Escolher Premium</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
