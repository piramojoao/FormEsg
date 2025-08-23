# 🎨 Paletas de Cores Disponíveis - FormIago

## 🌟 Como Trocar de Paleta

Para trocar a paleta de cores, edite o arquivo `src/styles/colors.css`:

1. **Comente** a paleta ativa (Verde)
2. **Descomente** a paleta desejada
3. **Reinicie** o servidor (`npm start`)

## 🎨 Paletas Disponíveis

### 1. 🌿 **Verde Moderno** (ATIVA)
```css
--primary-color: #7CB342;
--primary-dark: #689F38;
```
✅ **Ativa no momento**  
💚 Transmite crescimento, natureza, confiança  
🎯 Ideal para: Empresas sustentáveis, saúde, bem-estar  

---

### 2. 💙 **Azul Profissional**
```css
--primary-color: #2196F3;
--primary-dark: #1976D2;
```
💼 Transmite confiança, profissionalismo  
🎯 Ideal para: Empresas corporativas, tecnologia, consultoria  

---

### 3. 💜 **Roxo Moderno**
```css
--primary-color: #9C27B0;
--primary-dark: #7B1FA2;
```
✨ Transmite criatividade, inovação, luxo  
🎯 Ideal para: Design, arte, produtos premium  

---

### 4. 🧡 **Laranja Energético**
```css
--primary-color: #FF9800;
--primary-dark: #F57C00;
```
🔥 Transmite energia, dinamismo, otimismo  
🎯 Ideal para: Esportes, entretenimento, food delivery  

## 🛠️ Como Criar Paleta Personalizada

### 1. Escolha Sua Cor Principal
Use ferramentas como:
- [Coolors.co](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Material Design Colors](https://materialui.co/colors/)

### 2. Adicione no `colors.css`
```css
/* === SUA PALETA CUSTOMIZADA === */
:root {
  --primary-color: #SUA_COR;
  --primary-dark: #SUA_COR_ESCURA;
  --primary-light: #SUA_COR_CLARA;
  --background-gradient: linear-gradient(135deg, #COR1 0%, #COR2 100%);
  --hover-background: #COR_HOVER;
  --focus-shadow: rgba(R, G, B, 0.1);
  --button-shadow: rgba(R, G, B, 0.4);
}
```

## 🎯 Dicas de Cores por Setor

### 🏥 **Saúde/Medicina**
- Verde: Confiança, cura
- Azul: Profissionalismo, calma

### 💰 **Finanças/Bancos**
- Azul: Confiança, estabilidade  
- Verde: Crescimento, dinheiro

### 🎨 **Criativo/Design**
- Roxo: Criatividade, arte
- Laranja: Energia, inovação

### 🏪 **Varejo/E-commerce**
- Laranja: Urgência, ação
- Vermelho: Ofertas, promoções

### 🏢 **Corporativo/B2B**
- Azul: Profissionalismo
- Cinza: Seriedade, confiança

## 🔄 Mudança Rápida

### Para Azul:
```bash
# No arquivo colors.css, descomente:
/* === AZUL PROFISSIONAL === */
```

### Para Roxo:
```bash
# No arquivo colors.css, descomente:
/* === ROXO MODERNO === */
```

### Para Laranja:
```bash
# No arquivo colors.css, descomente:
/* === LARANJA ENERGÉTICO === */
```

## 🎨 Preview das Paletas

Cada paleta afeta:
- ✅ Fundo da aplicação (gradiente)
- ✅ Botão de envio  
- ✅ Campos em foco
- ✅ Opções selecionadas
- ✅ Efeitos hover
- ✅ Sombras e destaques

---

**💡 Quer uma cor específica? Me diga a cor ou hex code que você prefere!**
