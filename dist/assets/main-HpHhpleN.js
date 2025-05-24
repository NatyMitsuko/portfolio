(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function v(){return`
    <header class="main-header">
      <div class="container">
        <div class="logo">
          <span>UX/UI Designer</span>
        </div>
        <button class="menu-toggle" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_1960_1484" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect x="0.236572" y="0.643555" width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_1960_1484)">
              <path d="M4.48657 18.2778C4.27407 18.2778 4.09599 18.2059 3.95232 18.062C3.80849 17.9184 3.73657 17.7402 3.73657 17.5275C3.73657 17.315 3.80849 17.137 3.95232 16.9933C4.09599 16.8498 4.27407 16.778 4.48657 16.778H19.9866C20.1991 16.778 20.3772 16.8499 20.5208 16.9935C20.6647 17.1374 20.7366 17.3156 20.7366 17.5283C20.7366 17.7408 20.6647 17.9189 20.5208 18.0625C20.3772 18.206 20.1991 18.2778 19.9866 18.2778H4.48657ZM4.48657 13.3933C4.27407 13.3933 4.09599 13.3214 3.95232 13.1775C3.80849 13.0337 3.73657 12.8555 3.73657 12.643C3.73657 12.4304 3.80849 12.2523 3.95232 12.1088C4.09599 11.9651 4.27407 11.8933 4.48657 11.8933H19.9866C20.1991 11.8933 20.3772 11.9652 20.5208 12.109C20.6647 12.2529 20.7366 12.431 20.7366 12.6435C20.7366 12.8562 20.6647 13.0343 20.5208 13.1778C20.3772 13.3215 20.1991 13.3933 19.9866 13.3933H4.48657ZM4.48657 8.50854C4.27407 8.50854 4.09599 8.43671 3.95232 8.29304C3.80849 8.14921 3.73657 7.97096 3.73657 7.75829C3.73657 7.54579 3.80849 7.36771 3.95232 7.22404C4.09599 7.08054 4.27407 7.00879 4.48657 7.00879H19.9866C20.1991 7.00879 20.3772 7.08071 20.5208 7.22454C20.6647 7.36821 20.7366 7.54637 20.7366 7.75904C20.7366 7.97154 20.6647 8.14962 20.5208 8.29329C20.3772 8.43679 20.1991 8.50854 19.9866 8.50854H4.48657Z" fill="#893cff"/>
            </g>
          </svg>
        </button>
        <nav class="main-nav">
          <ul>
            <li><a href="#about-me" class="nav-link" data-section="about-me">About me</a></li>
            <li><a href="#education" class="nav-link" data-section="education">Education</a></li>
            <li><a href="#skills" class="nav-link" data-section="skills">My skills</a></li>
            <li><a href="#experience" class="nav-link" data-section="experience">Professional Experience</a></li>
            <li><a href="#projects" class="nav-link" data-section="projects">Projects</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `}function u(){const i=document.querySelector(".menu-toggle"),e=document.querySelector(".main-nav"),n=document.querySelectorAll(".nav-link");i==null||i.addEventListener("click",function(){e==null||e.classList.toggle("active"),i==null||i.classList.toggle("active")}),n.forEach(t=>{t.addEventListener("click",function(a){n.forEach(s=>s.classList.remove("active")),this.classList.add("active"),window.innerWidth<=768&&(e==null||e.classList.remove("active"),i==null||i.classList.remove("active"))})}),document.addEventListener("click",function(t){const a=e==null?void 0:e.classList.contains("active"),s=e==null?void 0:e.contains(t.target),o=i==null?void 0:i.contains(t.target);a&&!s&&!o&&(e==null||e.classList.remove("active"),i==null||i.classList.remove("active"))})}function h(){return`
    <section id="hero-section" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Hi, I'm Natália Mitsuko</h1>
          <p>With a background in Psychology and expertise in user experience, I create intuitive and accessible digital solutions that balance business goals with human needs.</p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/natymitsuko/" class="social-icon" target="_blank">
              <img src="/Linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.behance.net/natymitsuko" class="social-icon" target="_blank">
              <img src="/Behance.svg" alt="Behance" />
            </a>
            <a href="https://dribbble.com/natymitsuko" class="social-icon" target="_blank">
              <img src="/Dribbble.svg" alt="Dribbble" />
            </a>
            <a href="https://github.com/NatyMitsuko" class="social-icon" target="_blank">
              <img src="/Github.svg" alt="GitHub" />
            </a>
          </div>
        </div>
        <div class="hero-image">
          <!-- Imagem do perfil -->
          <img src="/Minha-foto.jpg" alt="Natália Mitsuko" class="profile-photo" />
          <span class="star star-lg" style="top: 10%; left: -5%;">✦</span>
          <span class="star star-md" style="bottom: 15%; right: -5%;">✦</span>
        </div>
      </div>
    </section>
  `}function g(){return`
    <section id="about-me" class="about-me">
      <div class="container">
        <div class="about-content">
          <div class="about-header">
            <h2>About me</h2>
          </div>
          <p>I'm a UX/UI Designer from Maceió, Brazil since 2021. My background in Psychology enhances my understanding of human behavior and digital interactions. With an MBA in UX Design and professional expertise since mid-2021, I specialize in user research, analysis, prototyping, and usability testing.
            Proficient in Figma and design collaboration tools, I excel at translating complex user needs into intuitive interfaces. My passion lies in creating accessible digital experiences that solve real user problems while driving business goals forward.</p>
          <div class="resume-button">
            <a href="/Natália Mitsuko - Resume.pdf" class="btn btn-outline" style="text-decoration: none;" download="Natália Mitsuko - Resume.pdf">
              <img src="/cloud_download.svg" alt="Download" style="width: 24px; height: 24px;">
              Download my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  `}function f(){return`
    <section class="section education-section">
      <div class="container">
        <h2 class="section-title">Education background</h2>
        <div class="section-content">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-item-content">
                <span class="timeline-date">2024</span>
                <h3 class="timeline-title">MBA UX Design and User Research</h3>
                <p class="timeline-institution">Leandro Rezende / Unifast</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-item-content">
                <span class="timeline-date">2023</span>
                <h3 class="timeline-title">UX Unicorn Program (Course)</h3>
                <p class="timeline-institution">Leandro Rezende</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-item-content">
                <span class="timeline-date">2021</span>
                <h3 class="timeline-title">UI Design with visual references</h3>
                <p class="timeline-institution">Udemy</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-item-content">
                <span class="timeline-date">2021</span>
                <h3 class="timeline-title">Figma: Collaborative Design</h3>
                <p class="timeline-institution">Udemy</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-item-content">
                <span class="timeline-date">2016-2020</span>
                <h3 class="timeline-title">Psychology Graduation</h3>
                <p class="timeline-institution">UNIT - AL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function y(){return`
    <section id="skills" class="skills">
      <div class="container">
        <div class="skills-section">
          <h2>My skills</h2>
          <div class="skills-columns">
            <div class="skills-column">
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">Design thinking</span>
              </div>
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">Design Systems</span>
              </div>
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">Prototyping</span>
              </div>
            </div>
            <div class="skills-column">
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">Research</span>
              </div>
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">Wireframing</span>
              </div>
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">Userflow</span>
              </div>
            </div>
            <div class="skills-column">
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">Style Guides</span>
              </div>
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">Wireflow</span>
              </div>
              <div class="skill-item">
                <span class="skill-check">✓</span>
                <span class="skill-name">User Testing</span>
              </div>
            </div>
          </div>
        </div>
  
        <div class="tools-languages">
          <div class="tools">
            <h2>Tools</h2>
            <div class="tools-grid">
              <div class="tool-circle">
                <svg class="circle-progress" viewBox="0 0 36 36" width="110" height="110">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#ff00ff" />
                      <stop offset="100%" stop-color="#893cff" />
                    </linearGradient>
                  </defs>
                  <path class="circle-bg" d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(16, 16, 30, 0.5)"
                    stroke-width="4" />
                  <path class="circle-fill" d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#gradient)"
                    stroke-width="4" stroke-dasharray="85, 100" stroke-linecap="round" />
                  <text x="18" y="19" class="circle-number" text-anchor="middle" fill="var(--text-color)">85%</text>
                </svg>
                <div class="tool-name">Figma</div>
              </div>
              <div class="tool-circle">
                <svg class="circle-progress" viewBox="0 0 36 36" width="110" height="110">
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#ff00ff" />
                      <stop offset="100%" stop-color="#893cff" />
                    </linearGradient>
                  </defs>
                  <path class="circle-bg" d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(16, 16, 30, 0.5)"
                    stroke-width="4" />
                  <path class="circle-fill" d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="url(#gradient2)"
                    stroke-width="4" stroke-dasharray="70, 100" stroke-linecap="round" />
                  <text x="18" y="19" class="circle-number" text-anchor="middle" fill="var(--text-color)">70%</text>
                </svg>
                <div class="tool-name">Figjam</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function k(){return`
    <section id="experience" class="experience">
      <div class="container">
        <h2>Professional Experience</h2>
        <div class="experience-grid">
          <!-- EDGE Innovation Center -->
          <div class="experience-card" onclick="openImageModal(document.querySelector('.experience-card:nth-child(1) .company-logo-img'), 'EDGE Innovation Center')">
            <div class="experience-header">
              <h3 class="experience-title">EDGE Innovation Center</h3>
            </div>
            <div class="experience-body">
              <div class="company-logo-container">
                <img src="/EDGE.png" alt="EDGE Innovation Center" class="company-logo-img">
              </div>
              <div class="experience-details">
                <p class="job-title">UI/UX Designer</p>
                <p class="job-period">November 2022 - Present</p>
                <ul class="job-responsibilities">
                  <li>Lead UX research and design for university innovation projects</li>
                  <li>Conduct user interviews and usability testing sessions</li>
                  <li>Create wireframes, prototypes, and high-fidelity designs</li>
                  <li>Collaborate with developers to ensure design implementation</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Engineering and Systems Research Center - EASY -->
          <div class="experience-card" onclick="openImageModal(document.querySelector('.experience-card:nth-child(2) .company-logo-img'), 'Engineering and Systems Research Center - EASY')">
            <div class="experience-header">
              <h3 class="experience-title">Engineering and Systems Research Center - EASY</h3>
            </div>
            <div class="experience-body">
              <div class="company-logo-container">
                <img src="/EASY.png" alt="Engineering and Systems Research Center - EASY" class="company-logo-img">
              </div>
              <div class="experience-details">
                <p class="job-title">UI/UX Designer</p>
                <p class="job-period">April 2022 - June 2023</p>
                <ul class="job-responsibilities">
                  <li>Designed user interfaces for research applications</li>
                  <li>Created user flows and interactive prototypes</li>
                  <li>Conducted usability tests and implemented feedback</li>
                  <li>Collaborated with researchers to translate complex data</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Sua Formatura (Startup) -->
          <div class="experience-card" onclick="openImageModal(document.querySelector('.experience-card:nth-child(3) .company-logo-img'), 'Sua Formatura (Startup)')">
            <div class="experience-header">
              <h3 class="experience-title">Sua Formatura (Startup)</h3>
            </div>
            <div class="experience-body">
              <div class="company-logo-container">
                <img src="/SF.png" alt="Sua Formatura (Startup)" class="company-logo-img">
              </div>
              <div class="experience-details">
                <p class="job-title">UI Designer</p>
                <p class="job-period">June 2021 - January 2023</p>
                <ul class="job-responsibilities">
                  <li>Designed user interfaces for graduation ceremony platform</li>
                  <li>Created visual identity elements and design system components</li>
                  <li>Improved user journey and experience for critical app features</li>
                  <li>Collaborated with developers on implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function b(){return`
    <section id="projects" class="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <img src="/First-project-2021.png" alt="Nome do Projeto 1">
              <div class="project-year">2023</div>
              <div class="project-info">
                <h3>Nome do Projeto 1</h3>
                <div class="project-description">
                  <p>Breve descrição sobre este projeto incrível</p>
                </div>
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="/Contas-casal-2022.png" alt="Nome do Projeto 2">
              <div class="project-year">2022</div>
              <div class="project-info">
                <h3>Nome do Projeto 2</h3>
                <div class="project-description">
                  <p>Breve descrição sobre este projeto incrível</p>
                </div>
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="/First-project-2021.png" alt="Nome do Projeto 3">
              <div class="project-year">2021</div>
              <div class="project-info">
                <h3>Nome do Projeto 3</h3>
                <div class="project-description">
                  <p>Breve descrição sobre este projeto incrível</p>
                </div>
              </div>
            </div>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="/Contas-casal-2022.png" alt="Nome do Projeto 4">
              <div class="project-year">2020</div>
              <div class="project-info">
                <h3>Nome do Projeto 4</h3>
                <div class="project-description">
                  <p>Breve descrição sobre este projeto incrível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function x(){return`
    <section id="feedback" class="feedback">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Salsa&display=swap');
        
        .company-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(90deg, #FF00FF, #893CFF);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 10px rgba(137, 60, 255, 0.3);
        }

        .feedback-text::before {
          content: '"';
          display: block;
          font-size: 80px;
          font-family: 'Salsa', cursive;
          background: linear-gradient(90deg, #FF00FF, #893CFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .author-name {
          font-weight: 500;
          color: #FF00FF;
        }

        .author-title {
          display: block;
          font-size: 0.9em;
          color: var(--primary-color-dark);
          margin-top: 4px;
        }
        
        .feedback-card a {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .feedback-card a:hover {
          text-decoration: none;
        }
      </style>
      <div class="container">
        <h2>Feedback from coworkers</h2>
        <div class="feedback-grid" style="display: flex; flex-direction: column; gap: 20px;">
          <div class="feedback-card">
            <a href="https://www.linkedin.com/in/natymitsuko/details/recommendations/?detailScreenTabIndex=0&locale=en_US">
              <span class="company-tag">EDGE Innovation Center</span>
              <div class="feedback-content">
                <p class="feedback-text">"I had the pleasure of leading Natália for two years and I can say that she is a
                  competent and dedicated professional. Her Figma skills and attention to detail contributed significantly to
                  our projects. Natália has always shown herself to be agile, organized and proactive, ready to help with
                  questions from developers and less experienced colleagues and is always looking to update herself. She has a
                  collaborative approach that helps maintain a good working environment and always tries to balance the needs
                  of the clients with the constraints of the project. She is a reliable and efficient professional and an
                  excellent addition to any design team."</p>
                <div class="feedback-author">
                  <span class="author-name">Tainá Ribeiro</span>
                  <span class="author-title">Senior UI/UX Designer</span>
                </div>
              </div>
            </a>
          </div>
          <div class="feedback-card">
            <a href="https://www.linkedin.com/in/natymitsuko/details/recommendations/?detailScreenTabIndex=0&locale=en_US">
              <span class="company-tag">EDGE Innovation Center</span>
              <div class="feedback-content">
                <p class="feedback-text">"Natália is a highly talented professional known for her creativity, attention to detail, impeccable organization and resourcefulness at Figma. She not only contributes exemplary technical skills, but also fosters a collaborative and positive spirit within the team. Natália is an invaluable addition to any project that values creative excellence and efficiency."</p>
                <div class="feedback-author">
                  <span class="author-name">Ilanna Lins</span>
                  <span class="author-title">UI/UX Designer | Product Designer</span>
                </div>
              </div>
            </a>
          </div>
          <div class="feedback-card">
            <a href="https://www.linkedin.com/in/natymitsuko/details/recommendations/?detailScreenTabIndex=0&locale=en_US">
              <span class="company-tag">EDGE Innovation Center</span>
              <div class="feedback-content">
                <p class="feedback-text">"Natália worked as a Designer in the teams I led, always proactive and available to help us with layout doubts and also in discovering new features. An exceptional designer who not only considers the client's needs but also the teams' ability to implement such demands."</p>
                <div class="feedback-author">
                  <span class="author-name">Luiz Barroca</span>
                  <span class="author-title">Tech Leader | Developer</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  `}function w(){const i=document.getElementById("backgroundStars"),e=50;for(let n=0;n<e;n++){const t=document.createElement("div");t.className="background-star",t.style.left=`${Math.random()*100}%`,t.style.top=`${Math.random()*100}%`,t.style.animationDelay=`${Math.random()*4}s`,t.innerHTML="✦",i.appendChild(t)}}function j(i,e){const n=document.getElementById("imageModal"),t=document.getElementById("modalImage"),a=document.getElementById("modalCaption"),s=document.querySelector(".modal-content");s&&(s.style.opacity="0"),n.style.display="flex",t.src=i.src,a.innerHTML=e,t.onload=function(){s&&setTimeout(()=>{s.style.opacity="1"},50),n.scrollTop=0;const o=document.querySelector("header")?document.querySelector("header").offsetHeight:80;n.style.paddingTop=`${o+10}px`},document.body.style.overflow="hidden"}function d(){const i=document.getElementById("imageModal"),e=document.querySelector(".modal-content");e?(e.style.opacity="0",setTimeout(()=>{i.style.display="none",document.body.style.overflow="auto"},200)):(i.style.display="none",document.body.style.overflow="auto")}function E(){const i=document.getElementById("imageModal");i&&(window.onclick=function(e){e.target===i&&d()})}function C(){const i=document.querySelectorAll('section[id], div[id="about-me"], div[id="education"], div[id="skills"], div[id="experience"], div[id="projects"]'),e=document.querySelectorAll(".nav-link");if(i.length===0||e.length===0){console.warn("Elementos não encontrados para o monitoramento de scroll");return}function n(){var r;let t=window.scrollY;const a=((r=document.querySelector(".main-header"))==null?void 0:r.offsetHeight)||80;t+=a+50;let s="";const o=document.querySelector(".hero"),p=o?o.offsetTop+o.offsetHeight:0;if(t<p){e.forEach(l=>l.classList.remove("active"));return}i.forEach(l=>{if(!l||!l.id)return;const c=l.offsetTop,m=l.offsetHeight;t>=c&&t<c+m&&(s=l.id)}),e.forEach(l=>{l.classList.remove("active"),l.getAttribute("data-section")===s&&l.classList.add("active")})}n(),window.addEventListener("scroll",n)}function I(){w(),document.getElementById("header").innerHTML=v(),document.getElementById("hero").innerHTML=h(),document.getElementById("about-me").innerHTML=g(),document.getElementById("education").innerHTML=f(),document.getElementById("skills").innerHTML=y(),document.getElementById("experience").innerHTML=k(),document.getElementById("projects").innerHTML=b(),document.getElementById("feedback").innerHTML=x(),u(),E(),document.dispatchEvent(new CustomEvent("componentsLoaded")),C(),console.log("✅ Todos os componentes carregados instantaneamente!")}window.openImageModal=j;window.closeImageModal=d;document.addEventListener("DOMContentLoaded",I);
