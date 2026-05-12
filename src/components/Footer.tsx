
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300 mb-4">
            HIDROREABILITAR
          </h3>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 mx-auto mb-6 rounded-full"></div>
          
          {/* Services */}
          <div className="mb-8">
            <p className="text-gray-400 mb-4">Especialistas em:</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">Hidroterapia</span>
              <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">Fisioterapia Neurológica</span>
              <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">Reabilitação de Atletas</span>
              <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full">Fisioterapia Domiciliar</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-8 text-gray-400">
            <p className="mb-2">📞 (88) 99642-5515</p>
            <p className="mb-2">📧 contato@hidroreabilitar.com.br</p>
            <p>🕒 Segunda a Sexta: 24h | Sábado: Agendamento</p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 HIDROREABILITAR. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Desenvolvido com 💛 para transformar vidas através da reabilitação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
