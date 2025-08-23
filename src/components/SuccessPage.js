import React from 'react';

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-icon">
        🌱
      </div>
      <h1>Diagnóstico Concluído!</h1>
      <p>
        Seu Diagnóstico ESG foi enviado com sucesso. 
        Agradecemos por contribuir com nossa avaliação de sustentabilidade.
      </p>
      <p>
        Sua participação é fundamental para promovermos práticas 
        ambientais, sociais e de governança mais responsáveis.
      </p>
      <p style={{ marginTop: '30px', fontSize: '0.9em', color: '#888' }}>
        Esta página pode ser fechada.
      </p>
    </div>
  );
};

export default SuccessPage;
