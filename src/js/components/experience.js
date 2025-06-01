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
                  <li>Lead and mentor UX/UI Design processes</li>
                  <li>Conduct interviews with users and stakeholders</li>
                  <li>Create wireframes, style guide and high-fidelity designs</li>
                  <li>Handoff design projects to developers</li>
                  <li>Collaborate with the team to ensure proper implementation</li>
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
                  <li>Conduct UX research in collaboration with other designers on the team</li>
                  <li>Transform business requirements into user-centered solutions</li>
                  <li>Produce responsive wireframes across multiple levels of fidelity</li>
                  <li>Handoff style guides, user flows, and interactive prototypes to the development team</li>
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
                  <li>Design user interfaces for graduation ceremony management platform</li>
                  <li>Create visual identity assets and scalable design system components</li>
                  <li>Improve user journey and overall experience for high-impact features</li>
                  <li>Collaborate with developers to ensure cohesive implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
} 