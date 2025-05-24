import { createHeader, initHeader } from './components/header.js';
import { createHero } from './components/hero.js';
import { createAbout } from './components/about.js';
import { createEducation } from './components/education.js';
import { createSkills } from './components/skills.js';
import { createExperience } from './components/experience.js';
import { createProjects } from './components/projects.js';
import { createFeedback } from './components/feedback.js';
import '../css/styles.css';

// Função para criar as estrelas de fundo
function createStars() {
  const stars = document.getElementById('backgroundStars');
  const starCount = 50;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'background-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    star.innerHTML = '✦';
    stars.appendChild(star);
  }
}

// Função para abrir a modal com a imagem ampliada
function openImageModal(imgElement, caption) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('modalCaption');
  const modalContent = document.querySelector('.modal-content');
  
  // Limpar estilos anteriores
  if (modalContent) {
    modalContent.style.opacity = '0';
  }
  
  // Mostrar a modal
  modal.style.display = 'flex';
  
  // Configurar a imagem e legenda
  modalImg.src = imgElement.src;
  captionText.innerHTML = caption;
  
  // Centralizar a modal após carregar a imagem
  modalImg.onload = function() {
    if (modalContent) {
      // Aplicar fade-in após a imagem carregar
      setTimeout(() => {
        modalContent.style.opacity = '1';
      }, 50);
    }
    
    // Scrollar para o topo da modal, considerando o header
    modal.scrollTop = 0;
    
    // Ajustar posição para ficar abaixo do header
    const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 80;
    modal.style.paddingTop = `${headerHeight + 10}px`;
  };
  
  // Impedir rolagem da página quando a modal estiver aberta
  document.body.style.overflow = 'hidden';
}

// Função para fechar a modal
function closeImageModal() {
  const modal = document.getElementById('imageModal');
  
  // Adicionar animação de saída
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) {
    modalContent.style.opacity = '0';
    
    // Aguardar a animação completar antes de esconder a modal
    setTimeout(() => {
      modal.style.display = 'none';
      // Restaurar rolagem da página
      document.body.style.overflow = 'auto';
    }, 200);
  } else {
    modal.style.display = 'none';
    // Restaurar rolagem da página
    document.body.style.overflow = 'auto';
  }
}

// Função para configurar os listeners da modal
function setupModalListeners() {
  // Fechar a modal se o usuário clicar fora dela
  const modal = document.getElementById('imageModal');
  if (modal) {
    window.onclick = function(event) {
      if (event.target === modal) {
        closeImageModal();
      }
    };
  }
}

// Função para configurar o monitoramento de scroll para o menu ativo
function setupActiveMenuOnScroll() {
  const sections = document.querySelectorAll('section[id], div[id="about-me"], div[id="education"], div[id="skills"], div[id="experience"], div[id="projects"]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length === 0 || navLinks.length === 0) {
    console.warn('Elementos não encontrados para o monitoramento de scroll');
    return;
  }
  
  function highlightActiveLink() {
    // Posição do scroll + altura do header para ajuste
    let scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('.main-header')?.offsetHeight || 80;
    scrollPosition += headerHeight + 50;
    
    // Verificar qual seção está visível
    let currentSection = '';
    
    // Ignorar a detecção no topo da página (seção hero)
    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 0;
    
    // Se estiver na seção hero, não marcar nenhum link como ativo
    if (scrollPosition < heroBottom) {
      navLinks.forEach(link => link.classList.remove('active'));
      return;
    }
    
    sections.forEach(section => {
      if (!section || !section.id) return;
      
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.id;
      }
    });
    
    // Atualizar classes nos links
    navLinks.forEach(link => {
      link.classList.remove('active');
      const sectionName = link.getAttribute('data-section');
      
      if (sectionName === currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  // Executar inicialmente e ao rolar
  highlightActiveLink();
  window.addEventListener('scroll', highlightActiveLink);
}

// Função principal para inicializar a aplicação
function initApp() {
  // Criar estrelas de fundo
  createStars();
  
  // Carregar TODOS os componentes de uma vez usando módulos ES6
  document.getElementById('header').innerHTML = createHeader();
  document.getElementById('hero').innerHTML = createHero();
  document.getElementById('about-me').innerHTML = createAbout();
  document.getElementById('education').innerHTML = createEducation();
  document.getElementById('skills').innerHTML = createSkills();
  document.getElementById('experience').innerHTML = createExperience();
  document.getElementById('projects').innerHTML = createProjects();
  document.getElementById('feedback').innerHTML = createFeedback();
  
  // Inicializar funcionalidades dos componentes
  initHeader();
  
  // Configurar os event listeners para modal
  setupModalListeners();
  
  // Disparar evento indicando que todos os componentes foram carregados
  document.dispatchEvent(new CustomEvent('componentsLoaded'));
  
  // Inicializar a detecção da seção atual para atualizar o menu
  setupActiveMenuOnScroll();
  
  console.log('✅ Todos os componentes carregados instantaneamente!');
}

// Tornar funções globais disponíveis para uso em HTML
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initApp); 