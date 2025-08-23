// Configuração do EmailJS
// Para configurar, acesse: https://www.emailjs.com/

export const emailConfig = {
  // Dados configurados do EmailJS
  PUBLIC_KEY: "JqwfSf4PVIYfIGovL",
  SERVICE_ID: "service_1zjbjmi", 
  TEMPLATE_ID: "template_t80ykxb",
  
  // Email de destino (seu email)
  DESTINATION_EMAIL: "iago_piramo@hotmail.com"
};

// Template sugerido para EmailJS:
/* 
Subject: Nova Resposta do Checklist - {{cliente_nome}}

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
*/
