# 🏢 Como Adicionar as Logos dos Institutos

## 📁 **Passos para Adicionar as Logos:**

### 1. **Salvar as Imagens**
Salve as duas logos que você enviou com esses nomes exatos:

- **Instituto Company**: `logo-instituto-company.png`
- **Instituto Global**: `logo-instituto-global.png`

### 2. **Colocar na Pasta Correta**
Coloque ambas as imagens na pasta:
```
FormIago/public/assets/
```

**Estrutura final:**
```
FormIago/
├── public/
│   ├── assets/
│   │   ├── logo-instituto-company.png
│   │   └── logo-instituto-global.png
│   └── index.html
└── src/
    └── ...
```

### 3. **Formatos Aceitos**
- ✅ **PNG** (recomendado - fundo transparente)
- ✅ **JPG/JPEG** 
- ✅ **SVG** (melhor qualidade)
- ✅ **WebP**

### 4. **Tamanhos Recomendados**
- **Largura**: 300-500px
- **Altura**: 80-120px
- **Proporção**: Mantenha a original
- **Qualidade**: Alta resolução para dispositivos mobile

## 🎨 **Como as Logos Aparecem:**

### **Layout no Formulário:**
```
┌─────────────────────────────────────────────┐
│  [Logo Instituto Company]  [Logo Instituto Global]  │
│  ─────────────────────────────────────────  │
│           🌱 DIAGNÓSTICO ESG              │
│                                           │
│  Olá! Sua participação é fundamental...   │
└─────────────────────────────────────────────┘
```

### **Características:**
- ✅ Centralizadas lado a lado
- ✅ Separadas por linha elegante
- ✅ Responsivas (adaptam ao mobile)
- ✅ Efeito hover sutil (crescem 5%)
- ✅ Fallback: se não carregarem, ficam invisíveis

## 📱 **Responsivo:**
- **Desktop**: Logos lado a lado
- **Mobile**: Mantém o layout, mas menores
- **Tablet**: Ajuste automático

## 🛠️ **Resolução de Problemas:**

### **Logo não aparece:**
1. ✅ Verifique se o nome está EXATO
2. ✅ Confirme se está na pasta `public/assets/`
3. ✅ Teste recarregando a página (Ctrl+F5)

### **Logo muito grande/pequena:**
- As logos são limitadas a 60px de altura
- Largura máxima de 180px
- Proporção mantida automaticamente

### **Logo com fundo:**
- Prefira PNG com fundo transparente
- JPG pode ter fundo branco visível

## 🔧 **Personalização Avançada:**

### **Alterar tamanho:**
Edite em `src/App.css` na classe `.logo`:
```css
.logo {
  max-height: 80px;  /* Mude aqui */
  max-width: 200px;  /* E aqui */
}
```

### **Mudar posicionamento:**
Edite `.logos-section` em `src/App.css`:
```css
.logos-section {
  gap: 40px;  /* Espaçamento entre logos */
}
```

## 🚀 **Depois de Adicionar:**

1. **Reinicie o servidor**: `npm start`
2. **Teste no navegador**: `http://localhost:3000`
3. **Teste no mobile**: Use DevTools (F12)
4. **Faça deploy**: Build e suba no servidor

---

## ⚡ **Ação Rápida:**
Arraste as duas logos para a pasta `FormIago/public/assets/` e reinicie o servidor!

**As logos vão aparecer automaticamente! 🎉**
