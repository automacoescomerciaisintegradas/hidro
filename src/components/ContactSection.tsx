
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Pronto para começar sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">jornada de recuperação?</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Entre em contato conosco e agende sua consulta. Nossa equipe especializada está pronta para cuidar de você.
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-yellow-400 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🕒</div>
                <h3 className="text-xl font-bold text-black mb-3">Horário de Atendimento</h3>
                <p className="text-gray-600">
                  <strong>Segunda a Sexta:</strong> 24h por dia<br />
                  <strong>Sábado:</strong> Somente com horário agendado
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-400 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-black mb-3">Localização</h3>
                <p className="text-gray-600">
                  Centro de Reabilitação<br />
                  HIDROREABILITAR<br />
                  Atendimento presencial e domiciliar
                </p>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp Contact */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-amber-300/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Fale diretamente com nossa especialista
            </h3>
            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Dra. Camila Mendes</strong>
              </p>
              <p className="text-gray-600">Fisioterapeuta Especialista</p>
            </div>
            
            <Button
              asChild
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <a
                href="https://wa.me/5588996425515"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                (88) 99642-5515
              </a>
            </Button>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-amber-300 text-black font-bold px-12 py-4 text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50"
            >
              <a
                href="https://wa.me/5588996425515"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta Agora
              </a>
            </Button>
            <p className="text-gray-500 mt-4 text-sm">
              Resposta garantida em até 30 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
