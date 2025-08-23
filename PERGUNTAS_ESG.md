# 🌱 Perguntas do Diagnóstico ESG

## 📋 **10 Perguntas Implementadas:**

### **🌍 AMBIENTAL (Environmental)**

**1.** A empresa monitora e reporta regularmente suas emissões de gases de efeito estufa (GEE) provenientes da frota e operações?
- **Respostas:** Sim / Não

**2.** Existe um plano formal de redução do consumo de combustíveis fósseis e/ou transição para combustíveis limpos (ex: biocombustíveis, elétricos, híbridos)?
- **Respostas:** Sim / Não

**3.** A empresa possui políticas de gestão de resíduos (lubrificantes, pneus, peças, embalagens etc.) com destinação correta e rastreável?
- **Respostas:** Sim / Não

**4.** São realizadas ações de eficiência energética (ex: manutenção preventiva da frota, treinamento de direção econômica)?
- **Respostas:** Sim / Não

### **👥 SOCIAL (Social)**

**5.** A empresa adota programas formais de saúde e segurança ocupacional para motoristas e colaboradores (incluindo prevenção de acidentes rodoviários)?
- **Respostas:** Sim / Não

**6.** Há políticas de diversidade, equidade e inclusão na contratação e gestão de pessoas (ex: gênero, raça, pessoas com deficiência)?
- **Respostas:** Sim / Não

**7.** A empresa realiza treinamentos periódicos em ESG ou temas socioambientais para seus colaboradores e parceiros?
- **Respostas:** Sim / Não

### **🏢 GOVERNANÇA (Governance)**

**8.** Existe um código de ética e conduta aplicado a todos os colaboradores, parceiros e fornecedores?
- **Respostas:** Sim / Não

**9.** A alta liderança (diretoria/gerência) participa ativamente de decisões e metas relacionadas à agenda ESG?
- **Respostas:** Sim / Não

**10.** A empresa realiza avaliação socioambiental de fornecedores (ex: origem de peças, combustíveis, prestadores de serviços)?
- **Respostas:** Sim / Não

---

## 📊 **Características do Diagnóstico:**

### **✅ Formato de Resposta:**
- **Tipo:** Sim/Não (binário)
- **Vantagem:** Objetivo e fácil de responder
- **Análise:** Permite calcular % de aderência ESG

### **🎯 Foco Setorial:**
- **Setor:** Transporte e Logística
- **Áreas:** Frota, combustível, motoristas, fornecedores
- **Escopo:** Ambiental, Social e Governança

### **📈 Pontuação:**
- **Cada "Sim":** 1 ponto
- **Cada "Não":** 0 pontos
- **Máximo:** 10 pontos (100% ESG)
- **Mínimo recomendado:** 7 respostas para envio

---

## 🔧 **Como Personalizar as Perguntas:**

### **Editar Perguntas:**
Arquivo: `src/components/ChecklistForm.js`
Linha: ~28 (array `perguntas`)

```javascript
{
  id: 'pergunta1',
  texto: 'SUA PERGUNTA AQUI?',
  tipo: 'radio',
  opcoes: ['Sim', 'Não']
}
```

### **Adicionar Mais Perguntas:**
1. Adicione no array `perguntas`
2. Adicione no `formData` inicial
3. Teste o formulário

### **Mudar Tipo de Resposta:**
```javascript
opcoes: ['Sim', 'Não', 'Em implementação', 'Não se aplica']
```

---

## 📧 **Como as Respostas Chegam no Email:**

```
=== DIAGNÓSTICO ESG - Nome da Empresa ===

DADOS DA EMPRESA:
Nome da Empresa: Transportes ABC Ltda
Telefone: (11) 99999-9999
Email: contato@transportesabc.com.br
Data do Diagnóstico: 15/01/2024 14:30:25

=== RESPOSTAS ===
1. A empresa monitora e reporta regularmente suas emissões de GEE?
R: Sim

2. Existe um plano formal de redução do consumo de combustíveis fósseis?
R: Não

[...todas as 10 respostas]

=== COMENTÁRIOS ADICIONAIS ===
Estamos implementando um programa de renovação da frota com veículos híbridos...

--
Instituto Company
Inovação em Sustentabilidade
Diagnóstico ESG System
```

---

## 🎯 **Próximas Melhorias Possíveis:**

### **📊 Dashboard de Resultados:**
- Gráfico de % de aderência ESG
- Comparativo por empresa
- Relatórios por período

### **🔄 Perguntas Avançadas:**
- Escalas de 1-5
- Perguntas abertas
- Uploads de evidências

### **🏆 Certificação:**
- Selo ESG por pontuação
- Recomendações de melhoria
- Plano de ação personalizado

---

**💡 O diagnóstico está pronto e focado no setor de transporte/logística!**
