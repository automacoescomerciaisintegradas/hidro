
# PLANNING.md - Sistema de Agendamento HIDROREABILITAR

## 📋 Visão Geral do Projeto

### Objetivo Principal
Desenvolver um sistema completo de agendamento para a clínica HIDROREABILITAR, permitindo:
- Gestão eficiente de consultas e sessões
- Automatização do processo de agendamento
- Redução de conflitos de horários
- Melhoria na experiência do paciente

### Público-Alvo
- **Pacientes**: Pessoas que buscam tratamentos de fisioterapia, hidroterapia e reabilitação
- **Administradores**: Equipe da clínica responsável pela gestão de agendamentos
- **Profissionais**: Fisioterapeutas e especialistas da clínica

## 🎯 Objetivos de Negócio

### Principais Metas
1. **Aumentar a captação de pacientes** - landing page otimizada para conversão
2. **Automatizar o atendimento** - reduzir trabalho manual da equipe
3. **Garantir previsibilidade** - relatórios e dashboard de performance
4. **Eliminar conflitos de horário** - sistema de verificação de disponibilidade
5. **Melhorar a experiência** - interface intuitiva e responsiva

### KPIs de Sucesso
- Redução de 70% no tempo de agendamento manual
- Aumento de 40% na taxa de conversão de leads
- Diminuição de 90% em conflitos de horários
- Satisfação do cliente acima de 4.5/5

## 🛠️ Stack Tecnológica

### Frontend
- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Shadcn/UI** para componentes base
- **React Router** para navegação
- **React Hook Form** para formulários
- **Tanstack Query** para gerenciamento de estado

### Backend & Database
- **Supabase** como BaaS (Backend as a Service)
- **PostgreSQL** (via Supabase)
- **Row Level Security (RLS)** para segurança
- **Supabase Auth** para autenticação
- **Supabase Realtime** para atualizações em tempo real

### Integrações
- **WhatsApp Business API** para notificações
- **Email Service** (via Supabase Edge Functions)
- **Calendar API** para sincronização
- **Payment Gateway** (futuro)

### Deployment
- **Vercel/Netlify** para frontend
- **Supabase Cloud** para backend
- **Custom Domain** via Lovable

## 🏗️ Arquitetura do Sistema

### Estrutura de Pastas
```
src/
├── components/
│   ├── ui/              # Componentes base (shadcn)
│   ├── forms/           # Formulários específicos
│   ├── dashboard/       # Componentes do dashboard
│   └── landing/         # Componentes da landing page
├── pages/
│   ├── Landing.tsx      # Página principal
│   ├── Dashboard.tsx    # Painel administrativo
│   ├── Booking.tsx      # Sistema de agendamento
│   └── Profile.tsx      # Perfil do usuário
├── hooks/               # Custom hooks
├── services/            # Integrações e APIs
├── types/               # Definições TypeScript
└── utils/               # Funções utilitárias
```

### Banco de Dados (Supabase Schema)

#### Tabelas Principais

**profiles**
```sql
id: uuid (PK, references auth.users)
full_name: text
phone: text
email: text
role: enum ('admin', 'patient', 'therapist')
created_at: timestamp
updated_at: timestamp
```

**services**
```sql
id: uuid (PK)
name: text
description: text
duration: integer (minutes)
price: decimal
is_active: boolean
created_at: timestamp
```

**appointments**
```sql
id: uuid (PK)
patient_id: uuid (FK -> profiles.id)
therapist_id: uuid (FK -> profiles.id)
service_id: uuid (FK -> services.id)
appointment_date: date
start_time: time
end_time: time
status: enum ('scheduled', 'confirmed', 'cancelled', 'completed')
notes: text
created_at: timestamp
updated_at: timestamp
```

**availability**
```sql
id: uuid (PK)
therapist_id: uuid (FK -> profiles.id)
day_of_week: integer (0-6)
start_time: time
end_time: time
is_active: boolean
```

**settings**
```sql
id: uuid (PK)
clinic_name: text
working_hours: jsonb
whatsapp_number: text
email_notifications: boolean
```

## 👥 Fluxo de Usuário

### Para Pacientes
1. **Landing Page** → Conhecer serviços e preços
2. **Formulário de Contato** → Capturar leads
3. **WhatsApp/Ligação** → Primeiro contato humano
4. **Agendamento** → Escolher serviço, data e horário
5. **Confirmação** → Receber confirmação por WhatsApp/Email
6. **Lembrete** → Notificação 24h antes
7. **Check-in** → Confirmar presença
8. **Reagendamento** → Possibilidade de alterar se necessário

### Para Administradores
1. **Dashboard** → Visão geral dos agendamentos
2. **Gestão de Pacientes** → CRUD completo
3. **Gestão de Horários** → Definir disponibilidade
4. **Relatórios** → Analytics e performance
5. **Configurações** → Personalizar sistema

## 🔧 Componentes Específicos Necessários

### Landing Page
- HeroSection ✅
- ServicesSection ✅  
- AboutSection ✅
- PricingSection ✅
- TestimonialSection ✅
- ContactSection ✅
- Footer ✅

### Sistema de Agendamento
- ServiceSelector
- DateTimePicker
- TherapistSelector
- AppointmentForm
- ConfirmationModal
- PaymentForm (futuro)

### Dashboard
- AppointmentCalendar
- PatientList
- AppointmentStats
- RevenueChart
- SettingsPanel

### Componentes Comuns
- LoadingSpinner
- ErrorBoundary
- ConfirmDialog
- NotificationToast
- SearchInput
- FilterDropdown

## 🔐 Segurança e Autenticação

### Níveis de Acesso
- **Público**: Landing page, formulário de contato
- **Paciente**: Agendamentos próprios, perfil
- **Terapeuta**: Agenda própria, pacientes atribuídos
- **Admin**: Acesso total ao sistema

### Implementação de Segurança
- RLS (Row Level Security) no Supabase
- Autenticação via email/senha
- Validação de dados no frontend e backend
- Rate limiting para APIs
- Sanitização de inputs

## 📱 Responsividade e UX

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

### Princípios de UX
- Mobile-first design
- Navegação intuitiva
- Feedback visual claro
- Carregamento rápido
- Acessibilidade (WCAG 2.1)

## 🚀 Estratégia de Deploy

### Ambiente de Desenvolvimento
- Supabase local para desenvolvimento
- Vite dev server
- Hot reload ativado

### Ambiente de Produção
- Supabase Cloud (produção)
- Lovable hosting ou Vercel
- Custom domain configurado
- SSL/HTTPS obrigatório

## 📊 Métricas e Analytics

### Métricas de Negócio
- Taxa de conversão da landing page
- Número de agendamentos por dia/mês
- Taxa de no-show
- Receita mensal
- Satisfação do cliente

### Métricas Técnicas
- Performance da aplicação
- Uptime do sistema
- Tempo de resposta das APIs
- Erros de sistema

## 🔄 Integrações Futuras

### Fase 2 (Futuro)
- Sistema de pagamento online
- Integração com calendário Google/Outlook
- App mobile nativo
- Sistema de avaliações
- Programa de fidelidade
- Telemedicina/Consultas online

### Fase 3 (Longo Prazo)
- IA para otimização de horários
- Análise preditiva de no-shows
- Integração com sistemas hospitalares
- Multi-clínicas (franquia)
