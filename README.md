# 🌱 Diagnóstico ESG - Instituto Company

Um sistema React para realizar diagnósticos ESG (Ambiental, Social e Governança) que podem ser enviados via link para stakeholders, com as respostas sendo enviadas diretamente para seu email.

## 🚀 Funcionalidades

- ✅ Diagnóstico ESG com 10 perguntas personalizáveis
- 🏢 Logo institucional (Instituto Company)
- 📱 Interface responsiva otimizada para mobile
- 🔗 Links únicos para identificar stakeholders
- 📧 Envio automático de diagnósticos por email
- 🌱 Design verde focado em sustentabilidade
- 🌟 Página de confirmação após envio

## 📋 Como Usar

### Para Empresas Participantes
1. Acesse o link enviado pelo WhatsApp/SMS
2. Preencha nome da empresa e telefone de contato
3. Responda às 10 perguntas do diagnóstico ESG (Sim/Não)
4. Clique em "🌱 Enviar Diagnóstico ESG"
5. Aguarde a confirmação de envio

### Para Você (Administrador)
1. Envie links para empresas: `https://seudominio.com/cliente/NOME_EMPRESA`
2. Receba os diagnósticos ESG no seu email
3. Acompanhe as práticas de sustentabilidade das empresas participantes

## 🛠️ Instalação e Configuração

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar EmailJS

1. Acesse [EmailJS.com](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Configure um serviço de email (Gmail, Outlook, etc.)
4. Crie um template com as variáveis do arquivo `src/config/emailConfig.js`
5. Obtenha suas chaves: `PUBLIC_KEY`, `SERVICE_ID` e `TEMPLATE_ID`

### 3. Configurar Suas Chaves

Edite o arquivo `src/config/emailConfig.js`:
```javascript
export const emailConfig = {
  PUBLIC_KEY: "sua_chave_publica_aqui",
  SERVICE_ID: "seu_service_id_aqui", 
  TEMPLATE_ID: "seu_template_id_aqui",
  DESTINATION_EMAIL: "i.piramo@grupoarnone.com"
};
```

### 4. Atualizar o Componente

Edite `src/components/ChecklistForm.js` e substitua:
- `"YOUR_PUBLIC_KEY"` pela sua chave pública
- `"YOUR_SERVICE_ID"` pelo seu Service ID  
- `"YOUR_TEMPLATE_ID"` pelo seu Template ID

### 5. Executar o Projeto
```bash
npm start
```

## 📧 Template do EmailJS

Use este template no EmailJS:

**Subject:** Nova Resposta do Checklist - {{cliente_nome}}

**Body:**
```
Olá!

Você recebeu uma nova resposta do checklist de avaliação.

=== DADOS DO CLIENTE ===
Nome: {{cliente_nome}}
Telefone: {{cliente_telefone}}
Email: {{cliente_email}}
Cliente ID: {{cliente_id}}
Data da Resposta: {{data_resposta}}

=== RESPOSTAS ===
{{respostas_texto}}

=== OBSERVAÇÕES ===
{{observacoes}}

--
FormIago Checklist System
```

## 🔗 URLs Disponíveis

- **Formulário Geral:** `/`
- **Formulário por Cliente:** `/cliente/NOME_CLIENTE`
- **Página de Sucesso:** `/sucesso`

### Exemplos de Links para Enviar aos Clientes:
- `https://seudominio.com/cliente/João Silva`
- `https://seudominio.com/cliente/Maria Santos`
- `https://seudominio.com/cliente/Empresa ABC`

## 📱 Como Enviar para Clientes

### WhatsApp
```
Olá [EMPRESA]! 🌱

Convidamos sua empresa para participar do nosso Diagnóstico ESG.
Avaliem suas práticas ambientais, sociais e de governança!

👆 Acesse: https://seudominio.com/cliente/[EMPRESA]

São apenas 10 perguntas objetivas (Sim/Não). 
Instituto Company - Inovação em Sustentabilidade
```

### SMS
```
[EMPRESA], participe do Diagnóstico ESG: https://seudominio.com/cliente/[EMPRESA]
10 perguntas sobre sustentabilidade. Instituto Company 🌱
```

## 🎨 Personalização

### Modificar Perguntas
Edite o array `perguntas` em `src/components/ChecklistForm.js`:

```javascript
const perguntas = [
  {
    id: 'pergunta1',
    texto: 'Sua pergunta aqui?',
    tipo: 'radio',
    opcoes: ['Opção 1', 'Opção 2', 'Opção 3']
  },
  // ... mais perguntas
];
```

### Alterar Cores
Modifique as cores em `src/App.css`:
```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cor de destaque */
border-color: #667eea;
```

## 🚀 Deploy

### Netlify (Recomendado)
1. Faça build: `npm run build`
2. Arraste a pasta `build` para [Netlify Drop](https://app.netlify.com/drop)
3. Configure redirects criando `public/_redirects`:
```
/*    /index.html   200
```

### Vercel
1. Instale Vercel CLI: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções

## 📊 Estrutura do Projeto

```
FormIago/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChecklistForm.js
│   │   └── SuccessPage.js
│   ├── config/
│   │   └── emailConfig.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🔧 Tecnologias Utilizadas

- React 18
- React Router DOM
- EmailJS
- CSS3 com Flexbox/Grid
- Design Responsivo

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique se todas as configurações do EmailJS estão corretas
2. Confirme se o template do EmailJS está configurado
3. Teste primeiro em ambiente local

## 📝 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

---

**Desenvolvido para facilitar a coleta de feedback dos seus clientes! 🚀**
