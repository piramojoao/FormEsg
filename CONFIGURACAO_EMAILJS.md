# 📧 Configuração Rápida do EmailJS

## Passo 1: Criar Conta
1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie sua conta gratuita
3. Confirme seu email

## Passo 2: Adicionar Serviço de Email
1. No painel, clique em "Email Services"
2. Clique "Add New Service"
3. Escolha seu provedor (Gmail, Outlook, Yahoo, etc.)
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** (ex: `service_abc123`)

## Passo 3: Criar Template
1. Vá em "Email Templates"
2. Clique "Create New Template"
3. Cole este conteúdo:

**Subject:**
```
Nova Resposta do Checklist - {{cliente_nome}}
```

**Content:**
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

4. Clique "Save"
5. **Anote o Template ID** (ex: `template_xyz789`)

## Passo 4: Obter Chave Pública
1. Vá em "Account" > "General"
2. **Anote a Public Key** (ex: `user_ABC123xyz`)

## Passo 5: Configurar no Projeto
Edite os arquivos:

**1. src/config/emailConfig.js:**
```javascript
export const emailConfig = {
  PUBLIC_KEY: "O6lLF-NxP4eSwQPj2",
  SERVICE_ID: "service_ap0r5ub", 
  TEMPLATE_ID: "template_mb8kh1h",
  DESTINATION_EMAIL: "i.piramo@grupoarnone.com"
};
```

**2. src/components/ChecklistForm.js:**
Substitua nas linhas 86, 123 e 124:
```javascript
emailjs.init("O6lLF-NxP4eSwQPj2");

await emailjs.send(
  'service_ap0r5ub', 
  'template_mb8kh1h',
  templateParams
);
```

## Passo 6: Testar
1. Execute: `npm start`
2. Preencha o formulário
3. Verifique se recebeu o email

## 🔍 Troubleshooting

**Erro "Public key required":**
- Verifique se a Public Key está correta
- Confirme se `emailjs.init()` está sendo chamado

**Erro 400/403:**
- Verifique Service ID e Template ID
- Confirme se o serviço de email está ativo

**Email não chega:**
- Verifique spam/lixo eletrônico  
- Confirme se o template está salvo corretamente
- Teste com outro email

**Rate limit (muitos emails):**
- Plano gratuito: 200 emails/mês
- Aguarde ou considere upgrade

## 💡 Dicas
- Use um email dedicado para receber respostas
- Configure filtros no seu email para organizar
- Teste sempre antes de enviar para clientes
- Mantenha backup das suas configurações

## 📞 Links Úteis
- [Documentação EmailJS](https://www.emailjs.com/docs/)
- [Como configurar Gmail](https://www.emailjs.com/docs/examples/gmail/)
- [Templates avançados](https://www.emailjs.com/docs/user-guide/creating-email-template/)

## 📝 **CRIAR ARQUIVO `.gitignore`:**

**Crie um arquivo chamado `.gitignore` na raiz do projeto** com este conteúdo:

```gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build

# Misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Temporary folders
tmp/
temp/

# Editor directories and files
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# ESLint
.eslintcache

# Serverless directories
.serverless/

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# Yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
```

## ⚡ **COMO CRIAR (3 formas):**

### **Opção 1 - Terminal/CMD:**
```bash
<code_block_to_apply_changes_from>
# Navegar para pasta do projeto
cd FormIago

# Criar arquivo .gitignore
echo "# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories
.vscode/
.idea/

# OS generated files
Thumbs.db" > .gitignore
```

### **Opção 2 - Editor de Código:**
1. **Abra** VS Code ou outro editor
2. **Crie novo arquivo** na raiz: `.gitignore`
3. **Cole** o conteúdo acima
4. **Salve**

### **Opção 3 - Notepad (Windows):**
1. **Abra** Notepad
2. **Cole** o conteúdo
3. **Salvar como**: `.gitignore` (com aspas)
4. **Tipo**: "Todos os arquivos"

## 🎯 **PRINCIPAIS ITENS IGNORADOS:**

### **✅ Mais Importantes:**
- **`node_modules/`** - Dependências (não devem ir para Git)
- **`/build`** - Arquivos de produção gerados
- **`.env.local`** - Variáveis de ambiente locais
- **`npm-debug.log*`** - Logs de erro

### **✅ Outros Importantes:**
- **`.DS_Store`** - Arquivos do macOS
- **`.v
