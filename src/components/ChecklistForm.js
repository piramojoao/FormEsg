import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ChecklistForm = () => {
  const { clienteId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    nomeCliente: '',
    telefone: '',
    email: '',
    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: '',
    pergunta5: '',
    pergunta6: '',
    pergunta7: '',
    pergunta8: '',
    pergunta9: '',
    pergunta10: '',
    observacoes: ''
  });

  // Configuração das perguntas do diagnóstico ESG
  const perguntas = [
    {
      id: 'pergunta1',
      texto: 'A empresa monitora e reporta regularmente suas emissões de gases de efeito estufa (GEE) provenientes da frota e operações?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta2',
      texto: 'Existe um plano formal de redução do consumo de combustíveis fósseis e/ou transição para combustíveis limpos (ex: biocombustíveis, elétricos, híbridos)?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta3',
      texto: 'A empresa possui políticas de gestão de resíduos (lubrificantes, pneus, peças, embalagens etc.) com destinação correta e rastreável?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta4',
      texto: 'São realizadas ações de eficiência energética (ex: manutenção preventiva da frota, treinamento de direção econômica)?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta5',
      texto: 'A empresa adota programas formais de saúde e segurança ocupacional para motoristas e colaboradores (incluindo prevenção de acidentes rodoviários)?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta6',
      texto: 'Há políticas de diversidade, equidade e inclusão na contratação e gestão de pessoas (ex: gênero, raça, pessoas com deficiência)?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta7',
      texto: 'A empresa realiza treinamentos periódicos em ESG ou temas socioambientais para seus colaboradores e parceiros?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta8',
      texto: 'Existe um código de ética e conduta aplicado a todos os colaboradores, parceiros e fornecedores?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta9',
      texto: 'A alta liderança (diretoria/gerência) participa ativamente de decisões e metas relacionadas à agenda ESG?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    },
    {
      id: 'pergunta10',
      texto: 'A empresa realiza avaliação socioambiental de fornecedores (ex: origem de peças, combustíveis, prestadores de serviços)?',
      tipo: 'radio',
      opcoes: ['Sim', 'Não']
    }
  ];

  useEffect(() => {
    // Inicializar EmailJS
    emailjs.init("JqwfSf4PVIYfIGovL");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validação básica
    if (!formData.nomeCliente || !formData.telefone) {
      setError('Por favor, preencha o nome da empresa e telefone de contato.');
      setLoading(false);
      return;
    }

    // Verificar se pelo menos algumas perguntas foram respondidas
    const respostasPreenchidas = perguntas.filter(pergunta => formData[pergunta.id]).length;
    if (respostasPreenchidas < 7) {
      setError('Por favor, responda pelo menos 7 perguntas do diagnóstico ESG.');
      setLoading(false);
      return;
    }

    try {
      // Preparar dados para envio
      const emailData = {
        cliente_nome: formData.nomeCliente,
        cliente_telefone: formData.telefone,
        cliente_email: formData.email || 'Não informado',
        cliente_id: clienteId || 'Direto',
        respostas: perguntas.map(pergunta => ({
          pergunta: pergunta.texto,
          resposta: formData[pergunta.id] || 'Não respondida'
        })).filter(item => item.resposta !== 'Não respondida'),
        observacoes: formData.observacoes || 'Nenhuma observação',
        data_resposta: new Date().toLocaleString('pt-BR')
      };

      // Converter respostas para string formatada
      const respostasTexto = emailData.respostas.map((item, index) => 
        `${index + 1}. ${item.pergunta}\nR: ${item.resposta}\n`
      ).join('\n');

      // Criar mensagem completa para EmailJS
      const mensagemCompleta = `
=== DIAGNÓSTICO ESG - ${emailData.cliente_nome} ===

DADOS DA EMPRESA:
Nome da Empresa: ${emailData.cliente_nome}
Telefone: ${emailData.cliente_telefone}
Email: ${emailData.cliente_email}
Empresa ID: ${emailData.cliente_id}
Data do Diagnóstico: ${emailData.data_resposta}

=== RESPOSTAS ===
${respostasTexto}

=== COMENTÁRIOS ADICIONAIS ===
${emailData.observacoes}

--
Instituto Company
Inovação em Sustentabilidade
Diagnóstico ESG System
      `.trim();

      const templateParams = {
        message: mensagemCompleta,
        cliente_nome: emailData.cliente_nome,
        to_email: "iago_piramo@hotmail.com"
      };

      // Enviar email via EmailJS
      await emailjs.send(
        'service_1zjbjmi',
        'template_t80ykxb',
        templateParams
      );

      // Redirecionar para página de sucesso
      navigate('/sucesso');
      
    } catch (error) {
      console.error('Erro ao enviar:', error);
      console.error('Detalhes do erro:', error.response || error.message);
      setError(`Erro ao enviar: ${error.text || error.message || 'Erro desconhecido'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checklist-container">
      <div className="logos-section">
        <div className="logo-container single-logo">
          <img 
            src="/assets/logo-instituto-company.png" 
            alt="Instituto Company - Inovação em Sustentabilidade" 
            className="logo"
            onError={(e) => {e.target.style.display = 'none'}}
          />
          <img 
            src="/assets/logo-instituto-global.png" 
            alt="Instituto Global - Real ESG Strategy" 
            className="logo"
            onError={(e) => {e.target.style.display = 'none'}}
          />
        </div>
      </div>
      
      <div className="header">
        <h1>🌱 DIAGNÓSTICO ESG</h1>
        <p>
          Este diagnóstico avalia as práticas ESG (Ambiental, Social e Governança) da sua empresa. 
          Por favor, responda às perguntas abaixo com base nas políticas e ações efetivamente implementadas.
        </p>
        {clienteId && (
          <p><strong>Cliente ID:</strong> {clienteId}</p>
        )}
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Dados da Empresa */}
        <div className="form-group">
          <label htmlFor="nomeCliente">Nome da Empresa *</label>
          <input
            type="text"
            id="nomeCliente"
            name="nomeCliente"
            value={formData.nomeCliente}
            onChange={handleInputChange}
            placeholder="Digite o nome da empresa"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone de Contato *</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            placeholder="(11) 99999-9999"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail da Empresa (opcional)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="contato@empresa.com.br"
          />
        </div>

        {/* Perguntas do Checklist */}
        {perguntas.map((pergunta, index) => (
          <div key={pergunta.id} className="form-group">
            <label>{index + 1}. {pergunta.texto}</label>
            <div className="radio-group">
              {pergunta.opcoes.map((opcao, opcaoIndex) => (
                <div
                  key={opcaoIndex}
                  className={`radio-option ${formData[pergunta.id] === opcao ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    id={`${pergunta.id}_${opcaoIndex}`}
                    name={pergunta.id}
                    value={opcao}
                    checked={formData[pergunta.id] === opcao}
                    onChange={handleInputChange}
                  />
                  <label htmlFor={`${pergunta.id}_${opcaoIndex}`}>{opcao}</label>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Observações */}
        <div className="form-group">
          <label htmlFor="observacoes">Comentários Adicionais sobre Práticas ESG (Opcional)</label>
          <textarea
            id="observacoes"
            name="observacoes"
            value={formData.observacoes}
            onChange={handleInputChange}
            placeholder="Descreva iniciativas ESG adicionais, desafios enfrentados ou planos futuros da empresa..."
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              Enviando...
            </div>
          ) : (
            '🌱 Enviar Diagnóstico ESG'
          )}
        </button>
      </form>
    </div>
  );
};

export default ChecklistForm;
