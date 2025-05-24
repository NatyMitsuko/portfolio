export function createExperience() {
  return `
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
  `;
} 