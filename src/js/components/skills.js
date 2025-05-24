export function createSkills() {
  return `
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
  `;
} 