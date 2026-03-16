# 🚀 Landing Page: Luciano Carvalho - Diretor (2026-2030)

[cite_start]Este projeto consiste em uma Landing Page de alta performance, focada em autoridade acadêmica e conversão direta para a campanha do **Professor Luciano Carvalho** à Direção-Geral do IFSULDEMINAS Campus Machado[cite: 3, 4]. A arquitetura foi desenhada com foco absoluto em **Navegação Mobile**, fluidez de movimento e identidade visual sólida.

---

## 🎨 Especificações de UI (User Interface)

A interface utiliza um contraste de alta energia para transmitir inovação e a sobriedade do azul institucional para confiança.

### Paleta de Cores (Hex)
* **Primary:** `#FFDA01` (Amarelo Principal) - Energia e Atenção.
* **Deep Blue:** `#12315E` (Azul Escuro) - Autoridade e Contraste.
* **Sky Blue:** `#50B7E8` (Azul Claro) - Tecnologia e Fluidez.
* **Neutral:** `#FFFFFF` (Branco) - Respiro e Leitura.

### Tipografia
* **Font Family:** `Poppins`, sans-serif.
* **Letter Spacing:** `-1.4px` (Editorial/Moderno).
* **Regras de Contraste:**
    * Fundo Amarelo ➡️ Texto Azul Escuro (`#12315E`).
    * Fundo Azul Escuro ➡️ Texto Branco (`#FFFFFF`).

---

## 📍 Sistema de Navegação Dinâmica

A navegação foi projetada para ser intuitiva e rápida, especialmente em dispositivos móveis.

### Menu Sticky & Scroll
* **Estilização:** Menu fixo com efeito *glassmorphism* (Azul Claro #50B7E8 com transparência).
* **Interação:** Ao clicar nos itens da lista (âncoras), a página realiza um deslocamento suave até o ID correspondente.
* **Active State:** O item de menu ganha um destaque visual (sublinhado ou mudança de peso da fonte) conforme a seção correspondente entra no viewport.

### Código de Referência (Lógica JS)
```javascript
// Exemplo de implementação para o Agente
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

---

## 📱 Estrutura de Navegação (Mobile-First)

O menu de navegação é fixo com efeito *glassmorphism* para garantir que o usuário nunca perca o contexto.

1.  **Início:** Hero Section com visual de impacto.
2.  **Minha História:** Jornada profissional e pessoal do candidato.
3.  **Gestão:** Os eixos estratégicos do Plano de Trabalho.
4.  **Participação:** Canais diretos de comunicação.

---

## 🛠️ Arquitetura de Seções e UX

### 1. Hero Section (Abertura Impactante)
* [cite_start]**Visual:** Fundo amarelo (`#FFDA01`) com *overlay* de baixa opacidade da foto do Campus Machado[cite: 1].
* [cite_start]**Elemento Central:** Foto do Diretor Luciano Carvalho sobreposta[cite: 8].
* **Animação:** Entrada em *Fade-in Up* dos elementos de texto.
* [cite_start]**Slogan:** "Inovar para Incluir. Conectar para Desenvolver"[cite: 5].

### 2. Seção "Minha História"
Nesta seção, o foco é a conexão emocional e a prova de competência:
* [cite_start]**Trajetória:** Ingresso em 2007 como substituto, retorno como efetivo em 2009[cite: 54, 56].
* [cite_start]**Experiência de Gestão:** 7 anos como Coordenador de Ensino e 3 anos como Diretor na Reitoria[cite: 57].
* [cite_start]**Formação:** Doutor em Biotecnologia/Bioinformática e Mestre em Sistemas de Produção[cite: 7].

### 3. Eixos de Gestão (Cards Interativos)
Exibição fluida das propostas principais utilizando o componente de cards:
* [cite_start]**Ensino:** Tecnologias digitais, IA e ambientes híbridos[cite: 11].
* [cite_start]**Inovação:** Centro de Inovação e Transformação Digital[cite: 17].
* [cite_start]**Esporte:** Resgate da tradição esportiva histórica do Campus[cite: 36].
* [cite_start]**Smart Campus:** Referência em conectividade, eficiência e segurança[cite: 47].
* [cite_start]**Sustentabilidade:** Foco na Fazenda Escola e eficiência energética[cite: 50, 52].

### 4. Direct CTA (Sem Formulários)
Substituição de formulários por botões de ação rápida para reduzir a fricção no mobile:
* **CTA Primário:** "Fale com o Luciano (WhatsApp)" - Link direto para API de conversa.
* **CTA Secundário:** "Envie uma sugestão (E-mail)" - Link `mailto:` institucional.

---

## ✨ Animações e Fluidez
* **Smooth Scrolling:** Navegação suave entre as âncoras do menu.
* **Ticker de Texto:** Implementação da `faixa-texto-continua` com os valores da campanha.
* **Reveal on Scroll:** Os eixos de gestão surgem lateralmente conforme o scroll.
* **Interactive Taps:** Feedback tátil em todos os botões no ambiente mobile.

---