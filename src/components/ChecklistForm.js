import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ChecklistForm = () => {
  const { clienteId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState(0); // 0: dados, 1: ambiental, 2: social, 3: governança, 4: resultado
  
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
    pergunta11: '',
    pergunta12: '',
    pergunta13: '',
    pergunta14: '',
    pergunta15: '',
    pergunta16: '',
    pergunta17: '',
    pergunta18: '',
    pergunta19: '',
    pergunta20: '',
    pergunta21: '',
    pergunta22: '',
    pergunta23: '',
    pergunta24: '',
    pergunta25: '',
    pergunta26: '',
    pergunta27: '',
    pergunta28: '',
    pergunta29: '',
    pergunta30: '',
    observacoes: ''
  });

  // Configuração das etapas do diagnóstico ESG
  const etapas = [
    {
      id: 0,
      nome: 'Dados da Empresa',
      titulo: '📋 Informações da Empresa',
      descricao: 'Por favor, forneça os dados básicos da sua empresa.'
    },
    {
      id: 1,
      nome: 'Ambiental',
      titulo: '🌍 Ambiental',
      descricao: 'Avalie as práticas ambientais da sua empresa.',
      imagem: '/assets/ambiental.png',
      perguntas: [
        {
          id: 'pergunta1',
          texto: 'A empresa monitora e reporta regularmente suas emissões de gases de efeito estufa (GEE)?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta2',
          texto: 'A empresa mapeia seu consumo de água, energia, combustíveis, insumos?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta3',
          texto: 'Existe um plano formal de redução de CO2? (uso de água, energia, combustíveis, insumos)',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta4',
          texto: 'A empresa realiza ações de cunho ambiental?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta5',
          texto: 'A empresa possui políticas de gestão de resíduos e/ou um PGRS (Programa de Gerenciamento de Resíduo Sólidos)?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta6',
          texto: 'São realizados treinamentos focados em Educação ambiental ou temas similares?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta7',
          texto: 'A empresa possui uma Política de Fornecedores? Caso o tenha, possui critérios considerando aspectos ambientais?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta8',
          texto: 'A empresa possui um Sistema de Gestão Ambiental (ex. 14001) ou alguma certificação ambiental?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta9',
          texto: 'A organização planeja os produtos com uma perspectiva de redução de impactos no ciclo de vida?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta10',
          texto: 'A empresa realiza/reporta o relatório de sustentabilidade?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        }
      ]
    },
    {
      id: 2,
      nome: 'Social',
      titulo: '👥 Social',
      descricao: 'Avalie as práticas sociais e de relacionamento com stakeholders.',
      imagem: '/assets/social.png',
      perguntas: [
        {
          id: 'pergunta11',
          texto: 'A empresa adota programas formais de saúde e segurança ocupacional para colaboradores?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta12',
          texto: 'A empresa realiza algum tipo de ação social pontual ou contínua?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta13',
          texto: 'Há políticas e práticas de diversidade, equidade e inclusão na contratação e gestão de pessoas (ex: gênero, raça, pessoas com deficiência)?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta14',
          texto: 'A empresa realiza treinamentos periódicos em ESG ou temas socioambientais para seus colaboradores e parceiros?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta15',
          texto: 'A empresa realiza algum tipo de investimento social privado?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta16',
          texto: 'A empresa está em processo de implementação de canais de comunicação?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta17',
          texto: 'A empresa atende ao exigido na legislação trabalhista?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta18',
          texto: 'A empresa promove o desenvolvimento profissional de seus trabalhadores?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta19',
          texto: 'A empresa realiza algum diálogo ou envolvimento com a comunidade ao entorno?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta20',
          texto: 'A empresa possui alguma certificação social? (ex: ISO 16001, 26001, B-corp)',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        }
      ]
    },
    {
      id: 3,
      nome: 'Governança',
      titulo: '⚖️ Governança',
      descricao: 'Avalie as práticas de governança corporativa e transparência.',
      imagem: '/assets/governanca.png',
      perguntas: [
        {
          id: 'pergunta21',
          texto: 'Existe um código de ética e conduta aplicado a todos os colaboradores, parceiros e fornecedores?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta22',
          texto: 'A empresa possui Política de Transparência e/ou realiza alguma auditoria interna ou externa em seus demonstrativos?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta23',
          texto: 'A alta liderança (diretoria/gerência) participa ativamente de decisões e metas relacionadas à agenda ESG?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta24',
          texto: 'A empresa possui organograma estabelecido?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta25',
          texto: 'A empresa possui política de gestão de pessoas?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta26',
          texto: 'A empresa realiza treinamentos periódicos quanto ao código de ética?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta27',
          texto: 'A empresa possui uma política de compliance e/ou programa de integridade?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta28',
          texto: 'A empresa realiza gestão de segurança da informação (LGPD)?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta29',
          texto: 'A empresa possui alguma certificação anti corrupção ou compliance? (ex: ISO 37001)',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        },
        {
          id: 'pergunta30',
          texto: 'A empresa possui uma canal de denúncia?',
          tipo: 'radio',
          opcoes: ['Sim', 'Não']
        }
      ]
    }
  ];

  // Todas as perguntas em um array plano para facilitar processamento
  const todasPerguntas = etapas.slice(1).flatMap(etapa => etapa.perguntas);

  useEffect(() => {
    // Inicializar EmailJS
    emailjs.init("VvtogxodNgvHjcywO");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Função para navegar entre etapas
  const nextStep = () => {
    if (currentStep < etapas.length) {
      setCurrentStep(currentStep + 1);
      setError('');
      // Scroll para o topo da página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setError('');
      // Scroll para o topo da página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Função para classificar nível baseado na pontuação (para dimensões individuais)
  const classificarNivel = (pontos) => {
    // Garantir que é um número válido
    const pts = Number(pontos) || 0;
    
    if (pts >= 6) return 'Talent';      // 6 ou mais = Talent
    if (pts > 4) return 'Growth';       // 5 pontos = Growth
    return 'Beyond';                    // 0-4 pontos = Beyond (nível mínimo)
  };

  // Função para classificar nível geral (baseado no total de 30 perguntas)
  const classificarNivelGeral = (pontos) => {
    // Garantir que é um número válido
    const pts = Number(pontos) || 0;
    
    if (pts >= 18) return 'Talent';     // 18+ pontos = Talent (6+ por dimensão)
    if (pts > 12) return 'Growth';      // 13-17 pontos = Growth (mais que 4 por dimensão)
    return 'Beyond';                    // 0-12 pontos = Beyond (nível mínimo)
  };

  // Função para calcular pontuação ESG
  const calcularPontuacao = () => {
    const pontuacoes = {
      ambiental: 0,
      social: 0,
      governanca: 0,
      total: 0
    };

    // Calcular pontuação por dimensão
    etapas.slice(1).forEach(etapa => {
      const respostasSimNaEtapa = etapa.perguntas.filter(pergunta => 
        formData[pergunta.id] === 'Sim'
      ).length;
      
      
      const dimensao = etapa.nome.toLowerCase();
      if (dimensao === 'ambiental') {
        pontuacoes.ambiental = respostasSimNaEtapa;
      } else if (dimensao === 'social') {
        pontuacoes.social = respostasSimNaEtapa;
      } else if (dimensao === 'governança') {
        pontuacoes.governanca = respostasSimNaEtapa;
      }
    });

    pontuacoes.total = pontuacoes.ambiental + pontuacoes.social + pontuacoes.governanca;
    
    // Adicionar níveis para cada dimensão
    pontuacoes.nivelAmbiental = classificarNivel(pontuacoes.ambiental);
    pontuacoes.nivelSocial = classificarNivel(pontuacoes.social);
    pontuacoes.nivelGovernanca = classificarNivel(pontuacoes.governanca);
    pontuacoes.nivelGeral = classificarNivelGeral(pontuacoes.total); // Usa função específica para nível geral
    
    return pontuacoes;
  };

  // Função para validar etapa atual
  const validarEtapaAtual = () => {
    if (currentStep === 0) {
      // Validar dados da empresa
      if (!formData.nomeCliente || !formData.telefone) {
        setError('Por favor, preencha o nome da empresa e telefone de contato.');
        return false;
      }
    } else if (currentStep >= 1 && currentStep <= 3) {
      // Validar se todas as perguntas da etapa foram respondidas
      const etapaAtual = etapas[currentStep];
      const perguntasNaoRespondidas = etapaAtual.perguntas.filter(
        pergunta => !formData[pergunta.id]
      );
      
      if (perguntasNaoRespondidas.length > 0) {
        setError('Por favor, responda todas as perguntas desta etapa antes de continuar.');
        return false;
      }
    }
    return true;
  };

  // Função para avançar para a próxima etapa ou finalizar
  const handleNext = (e) => {
    e.preventDefault();
    if (!validarEtapaAtual()) {
      return;
    }

    if (currentStep === 3) {
      // Última etapa de perguntas, ir para resultado
      setCurrentStep(4);
      // Scroll para o topo da página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      nextStep();
    }
  };

  // Função para gerar resultado personalizado
  const gerarResultado = () => {
    const pontuacao = calcularPontuacao();
    let nivelESG = pontuacao.nivelGeral;
    let mensagem = '';
    let cor = '';

    // Definir cor e mensagem baseado no nível geral
    switch (nivelESG) {
      case 'Talent':
        cor = 'success';
        mensagem = 'Sua empresa já demonstra excelência, com práticas consolidadas que a posicionam como referência em sustentabilidade. Seguindo nesta trajetória, vocês têm potencial para se tornar protagonistas, inspirando outras organizações e fortalecendo todo o setor.';
        break;
      case 'Growth':
        cor = 'success';
        mensagem = 'Sua empresa já possui práticas e processos estruturados, evidenciando um compromisso consistente com a sustentabilidade. Mantendo essa evolução, vocês estão no caminho certo para alcançar níveis ainda mais altos de maturidade e gerar valor estratégico para o negócio e para a sociedade.';
        break;
      case 'Beyond':
        cor = 'warning';
        mensagem = 'Sua empresa está dando os primeiros passos, o que já demonstra visão de futuro e compromisso com a sustentabilidade. Com foco e planejamento, este é o início de um caminho sólido rumo a um impacto positivo e duradouro.';
        break;
    }

    return {
      pontuacao,
      nivelESG,
      mensagem,
      cor
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const pontuacao = calcularPontuacao();
      
      // Preparar dados para envio
      const emailData = {
        cliente_nome: formData.nomeCliente,
        cliente_telefone: formData.telefone,
        cliente_email: formData.email || 'Não informado',
        cliente_id: clienteId || 'Direto',
        pontuacao_total: pontuacao.total,
        pontuacao_ambiental: pontuacao.ambiental,
        pontuacao_social: pontuacao.social,
        pontuacao_governanca: pontuacao.governanca,
        nivel_ambiental: pontuacao.nivelAmbiental,
        nivel_social: pontuacao.nivelSocial,
        nivel_governanca: pontuacao.nivelGovernanca,
        nivel_geral: pontuacao.nivelGeral,
        respostas: todasPerguntas.map(pergunta => ({
          pergunta: pergunta.texto,
          resposta: formData[pergunta.id] || 'Não respondida'
        })),
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

=== PONTUAÇÃO E NÍVEIS ESG ===
🌍 AMBIENTAL: ${emailData.pontuacao_ambiental}/10 pontos - Nível: ${emailData.nivel_ambiental}
👥 SOCIAL: ${emailData.pontuacao_social}/10 pontos - Nível: ${emailData.nivel_social}  
⚖️ GOVERNANÇA: ${emailData.pontuacao_governanca}/10 pontos - Nível: ${emailData.nivel_governanca}

📊 TOTAL: ${emailData.pontuacao_total}/30 pontos - Nível Geral: ${emailData.nivel_geral}

=== CLASSIFICAÇÃO DE NÍVEIS ===
POR DIMENSÃO (10 perguntas cada):
• 0-4 pontos = Beyond
• 5 pontos = Growth  
• 6+ pontos = Talent

NÍVEL GERAL (30 perguntas total):
• 0-12 pontos = Beyond
• 13-17 pontos = Growth
• 18+ pontos = Talent

=== RESPOSTAS DETALHADAS ===
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
        'service_xp2cec9',
        'template_9x6oqt3',
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

      {/* Indicador de Progresso */}
      {currentStep < 4 && (
        <div className="progress-bar">
          <div className="progress-steps">
            {etapas.map((etapa, index) => (
              <div 
                key={etapa.id} 
                className={`progress-step ${currentStep >= index ? 'active' : ''} ${currentStep === index ? 'current' : ''}`}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-name">{etapa.nome}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="header">
        {currentStep < 4 ? (
          <>
            <h1>{etapas[currentStep]?.titulo || '🌱 DIAGNÓSTICO ESG'}</h1>
            {etapas[currentStep]?.imagem && (
              <div className="etapa-image">
                <img 
                  src={etapas[currentStep].imagem} 
                  alt={`Imagem representativa da dimensão ${etapas[currentStep].nome}`}
                  className="dimensao-image"
                  onError={(e) => {e.target.style.display = 'none'}}
                />
              </div>
            )}
            <p>{etapas[currentStep]?.descricao || 'Diagnóstico ESG da sua empresa.'}</p>
            {clienteId && currentStep === 0 && (
              <p><strong>Cliente ID:</strong> {clienteId}</p>
            )}
          </>
        ) : (
          <>
            <h1>📊 Resultado do Diagnóstico ESG</h1>
            <p>Veja abaixo o resultado da avaliação da sua empresa:</p>
          </>
        )}
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={currentStep === 4 ? handleSubmit : handleNext}>
        {/* Etapa 0: Dados da Empresa */}
        {currentStep === 0 && (
          <>
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
          </>
        )}

        {/* Etapas 1, 2, 3: Perguntas ESG */}
        {currentStep >= 1 && currentStep <= 3 && etapas[currentStep] && (
          <>
            {etapas[currentStep].perguntas.map((pergunta, index) => (
              <div key={pergunta.id} className="form-group">
                <label className="question-label">{index + 1}. {pergunta.texto}</label>
                <div className="radio-group">
                  {pergunta.opcoes.map((opcao, opcaoIndex) => (
                    <div
                      key={opcaoIndex}
                      className={`radio-option ${formData[pergunta.id] === opcao ? 'selected' : ''}`}
                      onClick={() => {
                        const event = {
                          target: {
                            name: pergunta.id,
                            value: opcao
                          }
                        };
                        handleInputChange(event);
                      }}
                    >
                      <input
                        type="radio"
                        id={`${pergunta.id}_${opcaoIndex}`}
                        name={pergunta.id}
                        value={opcao}
                        checked={formData[pergunta.id] === opcao}
                        onChange={handleInputChange}
                        tabIndex={-1}
                      />
                      <label htmlFor={`${pergunta.id}_${opcaoIndex}`}>{opcao}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {/* Etapa 4: Resultado */}
        {currentStep === 4 && (
          <>
            {(() => {
              const resultado = gerarResultado();
              return (
                <div className="resultado-container">
                  <div className={`resultado-card ${resultado.cor}`}>
                    <h2>Nível ESG: {resultado.nivelESG}</h2>
                    <div className="pontuacao-total">
                      <h3>Pontuação Total: {resultado.pontuacao.total}/30</h3>
                      <div className="pontuacao-dimensoes">
                        <div className="dimensao">
                          <span>🌍 Ambiental</span>
                          <span>{resultado.pontuacao.ambiental}/10 pontos</span>
                          <span className="nivel">Nível: {resultado.pontuacao.nivelAmbiental}</span>
                        </div>
                        <div className="dimensao">
                          <span>👥 Social</span>
                          <span>{resultado.pontuacao.social}/10 pontos</span>
                          <span className="nivel">Nível: {resultado.pontuacao.nivelSocial}</span>
                        </div>
                        <div className="dimensao">
                          <span>⚖️ Governança</span>
                          <span>{resultado.pontuacao.governanca}/10 pontos</span>
                          <span className="nivel">Nível: {resultado.pontuacao.nivelGovernanca}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mensagem">
                      <h3>Análise:</h3>
                      <p>{resultado.mensagem}</p>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="observacoes">Comentários Adicionais (Opcional)</label>
                    <textarea
                      id="observacoes"
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleInputChange}
                      placeholder="Descreva iniciativas ESG adicionais, desafios enfrentados ou planos futuros da empresa..."
                      rows="4"
                    />
                  </div>
                </div>
              );
            })()}
          </>
        )}

        {/* Botões de Navegação */}
        <div className="navigation-buttons">
          {currentStep > 0 && currentStep < 4 && (
            <button
              type="button"
              onClick={prevStep}
              className="nav-button prev-button"
            >
              ← Anterior
            </button>
          )}

          {currentStep < 3 && (
            <button
              type="submit"
              className="nav-button next-button"
            >
              Próximo →
            </button>
          )}

          {currentStep === 3 && (
            <button
              type="submit"
              className="nav-button next-button"
            >
              Ver Resultado →
            </button>
          )}

          {currentStep === 4 && (
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
                '🌱 Finalizar Diagnóstico ESG'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChecklistForm;
