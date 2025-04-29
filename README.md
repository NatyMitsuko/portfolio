# Portfólio de Natália Mitsuko - UX/UI Designer

Este é um site de portfólio para Natália Mitsuko, uma UX/UI Designer. O projeto foi estruturado com componentes isolados para facilitar a manutenção e atualização.

## Estrutura do Projeto

```
📁 Portfolio page/
├── 📁 css/
│   └── 📄 styles.css         # Estilos CSS globais
├── 📁 images/                # Imagens do site
├── 📁 components/            # Componentes HTML isolados
│   ├── 📄 header.html        # Cabeçalho com navegação
│   ├── 📄 hero.html          # Seção hero (introdução)
│   ├── 📄 about.html         # Seção Sobre mim, Habilidades, Ferramentas e Idiomas
│   ├── 📄 experience.html    # Seção de Experiência Profissional
│   ├── 📄 projects.html      # Seção de Projetos Pessoais
│   └── 📄 contact.html       # Seção de Contato
├── 📄 index.html             # Versão PHP (requer servidor PHP)
├── 📄 index-without-php.html # Versão JavaScript (não requer PHP)
└── 📄 README.md              # Este arquivo
```

## Como Usar

### Opção 1: Usando PHP

Se você tem um servidor PHP disponível (como XAMPP, WAMP ou um servidor web com PHP):

1. Coloque todos os arquivos no diretório raiz do seu servidor web
2. Acesse o site através do arquivo `index.html`
3. Os componentes serão incluídos através das diretivas PHP include

### Opção 2: Usando JavaScript (sem PHP)

Se você não tem acesso a um servidor PHP:

1. Renomeie `index-without-php.html` para `index.html` (ou use-o diretamente)
2. Abra o arquivo no navegador
3. Os componentes serão carregados automaticamente via JavaScript fetch API

## Modificando Componentes

Para alterar qualquer parte do site, basta editar o arquivo de componente correspondente:

- Para alterar o cabeçalho: edite `components/header.html`
- Para alterar a seção hero: edite `components/hero.html`
- E assim por diante...

## Estilos

Todos os estilos estão no arquivo `css/styles.css`, organizados por seção:

- Estilos Base (variáveis CSS, reset, tipografia)
- Header
- Hero Section
- About Section
- Skills Section
- Tools and Languages
- Experience Section
- Projects Section
- Contact Section
- Responsividade
- Animações e efeitos visuais

## Responsividade

O site é totalmente responsivo, com adaptações para:

- Desktops (1024px e acima)
- Tablets (768px a 1023px)
- Celulares (abaixo de 768px)
- Celulares pequenos (abaixo de 576px) 