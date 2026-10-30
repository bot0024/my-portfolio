/**
 * =====================================================================
 * DIP NALAWADE — PORTFOLIO ENGINE & INTERACTIVITY
 * =====================================================================
 * This script initializes dynamic rendering from portfolio-data.js,
 * powers the theme engine, scroll reveals, 3D card tilt, typewriter,
 * dialog modals, skill filtering, and achievement counters.
 *
 * All design tokens, animations, effects, and typography are preserved.
 * =====================================================================
 */

(() => {
  'use strict';

  const doc = document;
  const root = doc.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js-motion');

  // ===================================================================
  // 1. DATA-DRIVEN CONTENT RENDERING ENGINE
  // ===================================================================
  const renderPortfolioContent = (data) => {
    if (!data || typeof data !== 'object') return;

    // Helper: Safe string escaping for HTML text content
    const escapeHtml = (str) => {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };

    // A. Render Skills
    const skillsGrid = doc.getElementById('skills-grid');
    if (skillsGrid && Array.isArray(data.skills)) {
      skillsGrid.innerHTML = data.skills.map((skill, idx) => {
        const indexStr = String(idx + 1).padStart(2, '0');
        return `
          <article class="skill-card" data-skill-category="${escapeHtml(skill.category)}">
            <span class="skill-index">${indexStr}</span>
            <span class="skill-symbol"><img src="${escapeHtml(skill.icon)}" alt="${escapeHtml(skill.title)} icon" loading="lazy" width="31" height="31"></span>
            <h3>${escapeHtml(skill.title)}</h3>
            <p>${escapeHtml(skill.description)}</p>
            <span class="skill-category">${escapeHtml(skill.categoryLabel)}</span>
          </article>
        `.trim();
      }).join('');

      // Update total skill count badge on filter button
      const allFilterCount = doc.querySelector('[data-skill-filter="all"] span');
      if (allFilterCount) allFilterCount.textContent = String(data.skills.length);
    }

    // B. Render Projects
    const projectGrid = doc.getElementById('project-grid');
    if (projectGrid && Array.isArray(data.projects)) {
      projectGrid.innerHTML = data.projects.map((project) => {
        const featuredClass = project.featured ? ' project-featured' : '';
        const badgeMarkup = project.badgeType === 'status'
          ? `<span class="project-status"><i></i> ${escapeHtml(project.badgeText)}</span>`
          : `<span class="project-type">${escapeHtml(project.badgeText)}</span>`;

        let artMarkup = '';
        if (project.imageUrl) {
          artMarkup = `
            <div class="project-art">
              <img src="${escapeHtml(project.imageUrl)}" alt="${escapeHtml(project.title)}" style="width:100%;height:100%;object-fit:cover;" />
            </div>
          `;
        } else if (project.artType === 'soar') {
          artMarkup = `
            <div class="project-art art-soar">
              <div class="node node-a">SIEM alert</div>
              <div class="node node-b">Tines</div>
              <div class="node node-c">Wazuh</div>
              <div class="node node-d">Endpoint</div>
              <div class="connector con-a"></div>
              <div class="connector con-b"></div>
              <div class="connector con-c"></div>
              <span class="art-center">SOAR</span>
            </div>
          `;
        } else if (project.artType === 'siem') {
          artMarkup = `
            <div class="project-art art-siem">
              <div class="terminal">
                <div class="terminal-bar"><i></i><i></i><i></i><span>security-events.log</span></div>
                <p><b>&gt;</b> Event received <em>OK</em></p>
                <p><b>&gt;</b> Process: powershell.exe</p>
                <p><b>&gt;</b> Rule matched <em>HIGH</em></p>
                <p><b>&gt;</b> Investigation queued_</p>
              </div>
            </div>
          `;
        } else if (project.artType === 'network') {
          artMarkup = `
            <div class="project-art art-network">
              <div class="network-lines"></div>
              <div class="network-node n1">KALI</div>
              <div class="network-node n2">PCAP</div>
              <div class="network-node n3">LAN</div>
              <div class="network-node n4">ANALYZE</div>
              <div class="wave-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            </div>
          `;
        } else if (project.artType === 'scan') {
          artMarkup = `
            <div class="project-art art-scan">
              <div class="scan-ring ring1"></div>
              <div class="scan-ring ring2"></div>
              <div class="scan-cross">+</div>
              <div class="scan-label">SCAN / REVIEW / REPORT</div>
            </div>
          `;
        }

        const techListMarkup = (project.technologies || []).map(t => `<span>${escapeHtml(String(t).trim())}</span>`).join('');

        return `
          <article class="project-card${featuredClass}">
            <div class="project-top">
              <span class="project-number">${escapeHtml(project.number)}</span>
              ${badgeMarkup}
            </div>
            ${artMarkup}
            <div class="project-info">
              <div>
                <h3>${escapeHtml(project.title)}</h3>
                <p>${escapeHtml(project.description)}</p>
              </div>
              <div class="project-footer">
                <div class="tech-list">
                  ${techListMarkup}
                </div>
                <a class="icon-link" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noreferrer" aria-label="View project on GitHub">↗</a>
              </div>
            </div>
          </article>
        `.trim();
      }).join('');
    }

    // C. Render Medium articles. Four cards are shown at a time and rotate like achievements.
    const blogGrid = doc.getElementById('blog-grid');
    if (blogGrid && Array.isArray(data.blogNotes)) {
      const blogSection = blogGrid.closest('.blog-section');
      const blogItems = data.blogNotes;
      const blogPageStep = 3;
      const blogPageCount = Math.max(1, Math.ceil(blogItems.length / blogPageStep));
      let blogPageIndex = 0;
      let blogRotationTimer = null;
      let blogPaused = false;
      let blogControls = blogSection?.querySelector('.blog-controls');
      if (!blogControls && blogSection) {
        blogControls = doc.createElement('div');
        blogControls.className = 'achievement-controls blog-controls';
        blogControls.innerHTML = `
          <button type="button" class="achievement-nav blog-prev" aria-label="Previous blog articles">← <span>Previous</span></button>
          <div class="achievement-pagination blog-pagination" role="group" aria-label="Blog article pages"></div>
          <button type="button" class="achievement-nav blog-next" aria-label="Next blog articles"><span>Next</span> →</button>`;
        blogGrid.insertAdjacentElement('afterend', blogControls);
      }
      const blogPagination = blogControls?.querySelector('.blog-pagination');
      if (blogPagination) blogPagination.innerHTML = Array.from({ length: blogPageCount }, (_, i) =>
        `<button type="button" class="achievement-page-dot${i === 0 ? ' is-active' : ''}" data-blog-page="${i}" aria-label="Show blog page ${i + 1}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`
      ).join('');

      const renderBlogCard = (note, noteIdx) => {
        let visualMarkup = '';
        if (note.visualType === 'flow') visualMarkup = `<div class="blog-visual blog-visual-flow" aria-hidden="true"><div class="flow-beam beam-one"></div><div class="flow-beam beam-two"></div><span class="flow-node node-alert">RESEARCH</span><span class="flow-node node-enrich">ANALYZE</span><span class="flow-node node-respond">DOCUMENT</span><span class="flow-matrix">MED / 0${noteIdx + 1}<br>CTI / LAB<br>NOTE / 2025</span><span class="visual-corner">MEDIUM ARTICLE</span></div>`;
        else if (note.visualType === 'terminal') visualMarkup = `<div class="blog-visual blog-visual-terminal" aria-hidden="true"><span class="terminal-tag">article-notes.md</span><p><i>01</i> Topic researched <b>OK</b></p><p><i>02</i> Findings reviewed</p><p><i>03</i> Lessons captured <b>READY</b></p><p><i>04</i> Published_</p></div>`;
        else visualMarkup = `<div class="blog-visual blog-visual-packet" aria-hidden="true"><div class="packet-grid"></div><span class="packet-chip chip-a">LEARN</span><span class="packet-chip chip-b">TEST</span><span class="packet-chip chip-c">WRITE</span><div class="packet-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>`;
        if (note.imageUrl) visualMarkup = `<div class="blog-visual blog-visual-image"><img src="${escapeHtml(note.imageUrl)}" alt="Article cover: ${escapeHtml(note.title)}" loading="lazy" decoding="async" referrerpolicy="no-referrer"><span class="image-source-label">MEDIUM ARTICLE</span></div>`;
        return `<article class="blog-card${noteIdx % blogPageStep === 0 ? ' blog-card-featured' : ''}" data-reveal>
          ${visualMarkup}
          <div class="blog-card-content">
            <div class="blog-meta"><span>${escapeHtml(note.categoryLabel)}</span><span class="draft-status">${escapeHtml(note.draftStatus || 'MEDIUM')}</span></div>
            <h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.description)}</p>
            <div class="blog-card-actions"><a class="blog-open" href="${escapeHtml(note.articleUrl || 'https://medium.com/@BotHacks')}" target="_blank" rel="noopener noreferrer">Read on Medium <span aria-hidden="true">↗</span></a></div>
          </div></article>`;
      };
      const renderBlogPage = (nextPage, animate = true) => {
        blogPageIndex = (nextPage + blogPageCount) % blogPageCount;
        const visible = blogItems.slice(blogPageIndex * blogPageStep, (blogPageIndex + 1) * blogPageStep);
        if (animate && !reduceMotion) blogGrid.classList.add('blog-page-changing');
        blogGrid.innerHTML = visible.map((note, i) => renderBlogCard(note, blogPageIndex * blogPageStep + i)).join('');
        if (animate && !reduceMotion) window.requestAnimationFrame(() => {
          blogGrid.classList.remove('blog-page-changing');
          blogGrid.classList.add('blog-page-enter');
          window.setTimeout(() => blogGrid.classList.remove('blog-page-enter'), 550);
        });
        if (blogPagination) Array.from(blogPagination.querySelectorAll('[data-blog-page]')).forEach((dot, i) => {
          dot.classList.toggle('is-active', i === blogPageIndex);
          dot.setAttribute('aria-current', i === blogPageIndex ? 'true' : 'false');
        });
      };
      const stopBlogTimer = () => { if (blogRotationTimer) window.clearInterval(blogRotationTimer); blogRotationTimer = null; };
      const restartBlogTimer = () => { stopBlogTimer(); if (!reduceMotion && blogItems.length > blogPageStep) blogRotationTimer = window.setInterval(() => { if (!doc.hidden && !blogPaused) renderBlogPage(blogPageIndex + 1); }, 6500); };
      const goToBlogPage = page => { renderBlogPage(page); restartBlogTimer(); };
      blogControls?.querySelector('.blog-prev')?.addEventListener('click', () => goToBlogPage(blogPageIndex - 1));
      blogControls?.querySelector('.blog-next')?.addEventListener('click', () => goToBlogPage(blogPageIndex + 1));
      blogPagination?.addEventListener('click', event => { const dot = event.target.closest('[data-blog-page]'); if (dot) goToBlogPage(Number(dot.dataset.blogPage)); });
      blogSection?.addEventListener('mouseenter', () => { blogPaused = true; });
      blogSection?.addEventListener('mouseleave', () => { blogPaused = false; });
      blogSection?.addEventListener('focusin', () => { blogPaused = true; });
      blogSection?.addEventListener('focusout', event => { if (!blogSection.contains(event.relatedTarget)) blogPaused = false; });
      renderBlogPage(0, false);
      restartBlogTimer();
    }

    // D. Render Achievements. All four visible cards rotate through the full
    // collection in overlapping sets of two, keeping the 2-column grid stable.
    const achievementsGrid = doc.getElementById('achievements-grid');
    if (achievementsGrid && Array.isArray(data.achievements)) {
      const renderAchievementCard = (item) => {
        const featuredClass = item.featured ? ' achievement-featured' : '';
        let statMarkup = '';
        if (item.type === 'big') {
          statMarkup = `<div class="achievement-big">${item.valueHtml}</div>`;
        } else if (item.type === 'count') {
          const value = `${formatAchievementCount(item.count, item.separator || '')}${item.suffix || ''}`;
          statMarkup = `<div class="achievement-stat"><span data-count="${item.count}" data-suffix="${escapeHtml(item.suffix || '')}" data-separator="${escapeHtml(item.separator || '')}">${value}</span></div>`;
        } else if (item.type === 'cert') {
          statMarkup = `<div class="achievement-cert-mark">${item.markHtml}</div>`;
        }
        return `
          <article class="achievement-card${featuredClass}" data-reveal aria-label="${escapeHtml(item.title)}">
            <div class="achievement-topline"><span>${escapeHtml(item.topline)}</span><span class="achievement-symbol">${escapeHtml(item.symbol)}</span></div>
            ${statMarkup}
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <div class="achievement-bottom"><span>${escapeHtml(item.bottomText)}</span><span class="achievement-dot"></span></div>
            ${item.linkUrl ? `<a class="achievement-card-link" href="${escapeHtml(item.linkUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(item.title)} credential or profile in a new tab"></a>` : ''}
          </article>
        `.trim();
      };
      const formatAchievementCount = (value, separator) => separator === ',' ? Math.round(Number(value) || 0).toLocaleString('en-US') : String(Math.round(Number(value) || 0));
      const items = data.achievements;
      const pageStep = 4;
      const pageCount = Math.max(1, Math.ceil(items.length / pageStep));
      let pageIndex = 0;
      let rotationTimer = null;
      const section = achievementsGrid.closest('.achievements-section');
      let paused = false;
      let countsArmed = false;

      let controls = section?.querySelector('.achievement-controls');
      if (!controls && section) {
        controls = doc.createElement('div');
        controls.className = 'achievement-controls';
        controls.innerHTML = `
          <button type="button" class="achievement-nav achievement-prev" aria-label="Previous achievements">← <span>Previous</span></button>
          <div class="achievement-pagination" role="group" aria-label="Achievement pages"></div>
          <button type="button" class="achievement-nav achievement-next" aria-label="Next achievements"><span>Next</span> →</button>
        `;
        achievementsGrid.insertAdjacentElement('afterend', controls);
      }
      const pagination = controls?.querySelector('.achievement-pagination');
      if (pagination) {
        pagination.innerHTML = Array.from({ length: pageCount }, (_, i) =>
          `<button type="button" class="achievement-page-dot${i === 0 ? ' is-active' : ''}" data-page="${i}" aria-label="Show achievement set ${i + 1}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`
        ).join('');
      }

      const animateVisibleCounts = () => {
        const counters = Array.from(achievementsGrid.querySelectorAll('[data-count]'));
        counters.forEach(el => {
          const target = Number(el.dataset.count || 0);
          const suffix = el.dataset.suffix || '';
          const separator = el.dataset.separator || '';
          if (reduceMotion) { el.textContent = `${formatAchievementCount(target, separator)}${suffix}`; return; }
          const duration = target > 10000 ? 1150 : 750;
          const started = performance.now();
          const step = now => {
            if (!el.isConnected) return;
            const ratio = Math.min(1, (now - started) / duration);
            const eased = 1 - Math.pow(1 - ratio, 3);
            el.textContent = `${formatAchievementCount(target * eased, separator)}${suffix}`;
            if (ratio < 1) window.requestAnimationFrame(step);
          };
          el.textContent = `${formatAchievementCount(0, separator)}${suffix}`;
          window.requestAnimationFrame(step);
        });
      };

      const renderPage = (nextPage, animate = true) => {
        pageIndex = (nextPage + pageCount) % pageCount;
        const startIndex = pageIndex * pageStep;
        const visibleItems = items.slice(startIndex, startIndex + pageStep);
        if (animate && !reduceMotion) achievementsGrid.classList.add('achievement-page-changing');
        achievementsGrid.innerHTML = visibleItems.map(renderAchievementCard).join('');
        if (animate && !reduceMotion) {
          window.requestAnimationFrame(() => {
            achievementsGrid.classList.remove('achievement-page-changing');
            achievementsGrid.classList.add('achievement-page-enter');
            window.setTimeout(() => achievementsGrid.classList.remove('achievement-page-enter'), 550);
          });
        }
        if (pagination) Array.from(pagination.querySelectorAll('.achievement-page-dot')).forEach((dot, i) => {
          dot.classList.toggle('is-active', i === pageIndex);
          dot.setAttribute('aria-current', i === pageIndex ? 'true' : 'false');
        });
        if (countsArmed) animateVisibleCounts();
      };
      const goToPage = nextPage => { renderPage(nextPage); restartTimer(); };
      const stopTimer = () => { if (rotationTimer) window.clearInterval(rotationTimer); rotationTimer = null; };
      const restartTimer = () => {
        stopTimer();
        if (!reduceMotion && items.length > 4) rotationTimer = window.setInterval(() => {
          if (!doc.hidden && !paused) renderPage(pageIndex + 1);
        }, 5000);
      };

      controls?.querySelector('.achievement-prev')?.addEventListener('click', () => goToPage(pageIndex - 1));
      controls?.querySelector('.achievement-next')?.addEventListener('click', () => goToPage(pageIndex + 1));
      pagination?.addEventListener('click', event => {
        const dot = event.target.closest('[data-page]');
        if (dot) goToPage(Number(dot.dataset.page));
      });
      section?.addEventListener('mouseenter', () => { paused = true; });
      section?.addEventListener('mouseleave', () => { paused = false; });
      section?.addEventListener('focusin', () => { paused = true; });
      section?.addEventListener('focusout', event => { if (!section.contains(event.relatedTarget)) paused = false; });

      renderPage(0, false);
      restartTimer();
      if (reduceMotion || !('IntersectionObserver' in window)) {
        countsArmed = true;
      } else {
        const countObserver = new IntersectionObserver((entries, observer) => {
          if (entries.some(e => e.isIntersecting)) {
            countsArmed = true;
            animateVisibleCounts();
            observer.disconnect();
          }
        }, { threshold: 0.4 });
        countObserver.observe(achievementsGrid);
      }
    }

    // E. Render Experience
    const experienceList = doc.getElementById('experience-list');
    if (experienceList && Array.isArray(data.experience)) {
      experienceList.innerHTML = data.experience.map((item) => {
        const badgeMarkup = item.badge ? `<span class="experience-badge">${escapeHtml(item.badge)}</span>` : '';
        const bulletListMarkup = (item.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join('');

        return `
          <article class="experience-item">
            <div class="experience-date">${escapeHtml(item.period)} <span>${escapeHtml(item.periodLabel)}</span></div>
            <div class="experience-main">
              <div class="experience-title">
                <h3>${escapeHtml(item.title)}</h3>
                ${badgeMarkup}
              </div>
              <p>${escapeHtml(item.summary)}</p>
              <ul>
                ${bulletListMarkup}
              </ul>
            </div>
          </article>
        `.trim();
      }).join('');
    }

    // F. Render Education
    const educationCards = doc.getElementById('education-cards');
    if (educationCards && Array.isArray(data.education)) {
      educationCards.innerHTML = data.education.map((item) => {
        return `
          <article class="education-card">
            <div class="edu-icon">${escapeHtml(item.index)}</div>
            <div>
              <span class="edu-date">${escapeHtml(item.status)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </div>
            <span class="edu-arrow">↗</span>
          </article>
        `.trim();
      }).join('');
    }

    // G. Bind Profile Info (Email, Social, Resume)
    if (data.profile) {
      const p = data.profile;
      const setText = (id, text) => { const el = doc.getElementById(id); if (el && text) el.textContent = text; };
      setText('hero-intro', p.heroIntro);
      setText('contact-copy', p.contact?.copy);
      setText('resume-copy', p.resume?.description);

      if (Array.isArray(p.heroHighlights)) {
        const meta = doc.getElementById('hero-meta');
        if (meta) meta.innerHTML = p.heroHighlights.map(h => `<div><strong>${escapeHtml(h.id)}</strong><span>${escapeHtml(h.label)}</span></div>`).join('');
      }
      if (Array.isArray(p.tickerKeywords) && p.tickerKeywords.length) {
        const ticker = doc.getElementById('ticker');
        if (ticker) ticker.innerHTML = p.tickerKeywords.map(k => `<span>${escapeHtml(k)}</span>`).join('<i>✳</i>');
      }
      if (p.about) {
        const content = doc.getElementById('about-content');
        const tags = doc.getElementById('about-tags');
        if (content && tags && Array.isArray(p.about.paragraphs)) {
          content.querySelectorAll(':scope > p').forEach(el => el.remove());
          p.about.paragraphs.forEach(text => {
            const para = doc.createElement('p');
            para.textContent = text;
            content.insertBefore(para, tags);
          });
        }
        if (tags && Array.isArray(p.about.tags)) {
          tags.innerHTML = p.about.tags.map(t => `<span>${escapeHtml(t)}</span>`).join('');
        }
      }

      const email = data.profile.contact?.email;
      if (email) {
        doc.querySelectorAll('.contact-email').forEach(el => {
          el.setAttribute('href', `mailto:${email}`);
          el.innerHTML = `${escapeHtml(email)} <span>↗</span>`;
        });
        const copyEmailBtn = doc.getElementById('copy-email');
        if (copyEmailBtn) {
          copyEmailBtn.dataset.email = email;
        }
      }

      if (data.profile.contact?.githubUrl) {
        doc.querySelectorAll('a[href*="github.com"]').forEach(el => {
          // Don't overwrite project-specific GitHub links
          if (!el.closest('.project-card')) {
            el.setAttribute('href', data.profile.contact.githubUrl);
          }
        });
      }

      if (data.profile.contact?.linkedinUrl) {
        doc.querySelectorAll('a[href*="linkedin.com"]').forEach(el => {
          el.setAttribute('href', data.profile.contact.linkedinUrl);
        });
      }

      if (data.profile.resume?.filePath) {
        doc.querySelectorAll('.resume-download').forEach(el => {
          el.setAttribute('href', data.profile.resume.filePath);
          el.setAttribute('download', data.profile.resume.fileName || 'Resume.pdf');
        });
        doc.querySelectorAll('.resume-preview-link').forEach(el => {
          el.setAttribute('href', data.profile.resume.filePath);
        });
      }
    }
  };

  // Run dynamic render immediately so DOM is populated before attaching observers
  if (typeof PORTFOLIO_DATA !== 'undefined') {
    renderPortfolioContent(PORTFOLIO_DATA);
  }

  // ===================================================================
  // 2. MOBILE NAVIGATION
  // ===================================================================
  const toggle = doc.querySelector('.menu-toggle');
  const nav = doc.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = '☰';
  }));

  // Dynamic footer year
  const yearEl = doc.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===================================================================
  // 3. SCROLL PROGRESS INDICATOR
  // ===================================================================
  const progress = doc.querySelector('.scroll-progress');
  let scrollTicking = false;
  const updateProgress = () => {
    if (!progress) return;
    const max = doc.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
    scrollTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateProgress);
    }
  }, { passive: true });
  updateProgress();

  // ===================================================================
  // 4. VIEWPORT SCROLL REVEALS
  // ===================================================================
  const revealTargets = [
    '.about-layout > *', '.project-card', '.experience-item', '.education-card', '.section-heading',
    '.skills-intro', '.skill-card', '.blog-card', '.achievement-card', '.resume-copy', '.resume-preview-card',
    '.contact-heading-wrap', '.contact-panel'
  ].flatMap(selector => Array.from(doc.querySelectorAll(selector)));
  const uniqueTargets = [...new Set(revealTargets)];
  uniqueTargets.forEach((el, index) => {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`);
  });
  if (reduceMotion || !('IntersectionObserver' in window)) {
    uniqueTargets.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    uniqueTargets.forEach(el => revealObserver.observe(el));
  }

  // ===================================================================
  // 5. ROTATING TYPEWRITER ROLE EFFECT
  // ===================================================================
  const roleText = doc.getElementById('role-text');
  const roles = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.profile?.roles)
    ? PORTFOLIO_DATA.profile.roles
    : ['SOC operations', 'Security automation', 'Incident response', 'SIEM monitoring'];

  if (roleText && !reduceMotion) {
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true;
    const typeNext = () => {
      const current = roles[roleIndex];
      if (deleting) {
        charIndex = Math.max(0, charIndex - 1);
        roleText.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          window.setTimeout(typeNext, 280);
          return;
        }
        window.setTimeout(typeNext, 35);
      } else {
        const next = roles[roleIndex];
        charIndex = Math.min(next.length, charIndex + 1);
        roleText.textContent = next.slice(0, charIndex);
        if (charIndex === next.length) {
          deleting = true;
          window.setTimeout(typeNext, 1450);
          return;
        }
        window.setTimeout(typeNext, 62);
      }
    };
    window.setTimeout(() => { deleting = true; typeNext(); }, 1900);
  }

  // ===================================================================
  // 6. CONTACT HEADLINE ENTRANCE
  // ===================================================================
  const headline = doc.querySelector('[data-headline-reveal]');
  if (headline) {
    if (reduceMotion || !('IntersectionObserver' in window)) headline.classList.add('is-visible');
    else {
      const headlineObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            headlineObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35 });
      headlineObserver.observe(headline);
    }
  }

  // ===================================================================
  // 7. ACTIVE NAVIGATION OBSERVER
  // ===================================================================
  const navAnchors = Array.from(doc.querySelectorAll('.nav-links a[href^="#"]'));
  const sectionAnchors = navAnchors.map(anchor => ({ anchor, section: doc.querySelector(anchor.getAttribute('href')) })).filter(item => item.section);
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        sectionAnchors.forEach(({ anchor, section }) => {
          const active = section === entry.target;
          anchor.classList.toggle('is-current', active);
          if (active) anchor.setAttribute('aria-current', 'location');
          else anchor.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-24% 0px -62% 0px', threshold: 0 });
    sectionAnchors.forEach(({ section }) => navObserver.observe(section));
  }

  // ===================================================================
  // 8. CARD SPOTLIGHT & 3D PERSPECTIVE TILT
  // ===================================================================
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHover && !reduceMotion) {
    doc.querySelectorAll('.project-card').forEach(card => {
      let frame = 0;
      card.addEventListener('pointermove', event => {
        if (frame) window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty('--spot-x', `${x * 100}%`);
          card.style.setProperty('--spot-y', `${y * 100}%`);
          card.style.setProperty('--tilt-y', `${(x - 0.5) * 3.5}deg`);
          card.style.setProperty('--tilt-x', `${(0.5 - y) * 3.2}deg`);
        });
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-y', '0deg');
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--spot-x', '50%');
        card.style.setProperty('--spot-y', '50%');
      });
    });
  }

  // ===================================================================
  // 9. SKILL CATEGORY FILTERING
  // ===================================================================
  const skillFilters = Array.from(doc.querySelectorAll('[data-skill-filter]'));
  const skillCards = Array.from(doc.querySelectorAll('.skill-card[data-skill-category]'));
  skillFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.skillFilter;
      skillFilters.forEach(button => {
        const selected = button === filter;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      skillCards.forEach(card => {
        const show = category === 'all' || card.dataset.skillCategory === category;
        card.hidden = !show;
        card.classList.remove('filter-enter');
        if (show && !reduceMotion) {
          void card.offsetWidth;
          card.classList.add('filter-enter');
        }
      });
      const count = skillCards.filter(card => !card.hidden).length;
      const status = doc.getElementById('skills-status');
      if (status) status.textContent = `${count} skills shown`;
    });
  });

  // ===================================================================
  // 10. BLOG FIELD NOTE DIALOG PREVIEWS
  // ===================================================================
  const dialog = doc.getElementById('blog-dialog');
  const dialogCategory = doc.getElementById('blog-dialog-category');
  const dialogTitle = doc.getElementById('blog-dialog-title');
  const dialogBody = doc.getElementById('blog-dialog-body');
  const closeDialog = () => { if (dialog?.open) dialog.close(); };

  doc.querySelectorAll('.blog-open').forEach(button => {
    button.addEventListener('click', () => {
      const blogId = button.dataset.blogId;
      const noteItem = (typeof PORTFOLIO_DATA !== 'undefined' && Array.isArray(PORTFOLIO_DATA.blogNotes))
        ? PORTFOLIO_DATA.blogNotes.find(n => n.id === blogId)
        : null;
      const note = noteItem?.dialog;
      if (!note || !dialog || !dialogTitle || !dialogBody || !dialogCategory) return;

      dialogCategory.textContent = note.category;
      dialogTitle.textContent = note.title;
      dialogBody.replaceChildren();
      note.paragraphs.forEach(content => {
        const p = doc.createElement('p');
        p.textContent = content;
        dialogBody.appendChild(p);
      });
      const list = doc.createElement('ul');
      note.bullets.forEach(content => {
        const li = doc.createElement('li');
        li.textContent = content;
        list.appendChild(li);
      });
      dialogBody.appendChild(list);

      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
  });

  dialog?.querySelector('.dialog-close')?.addEventListener('click', closeDialog);
  dialog?.querySelector('.dialog-done')?.addEventListener('click', closeDialog);
  dialog?.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
  dialog?.addEventListener('keydown', event => { if (event.key === 'Escape') closeDialog(); });

  // ===================================================================
  // 12. EMAIL CLIPBOARD COPY
  // ===================================================================
  const copyButton = doc.getElementById('copy-email');
  copyButton?.addEventListener('click', async () => {
    const email = copyButton.dataset.email || 'dipnalawade24@gmail.com';
    const feedback = doc.querySelector('.copy-feedback');
    try {
      await navigator.clipboard.writeText(email);
      if (feedback) feedback.textContent = 'Email copied to clipboard.';
    } catch {
      if (feedback) feedback.textContent = `Email: ${email}`;
    }
  });

  // ===================================================================
  // 13. THEME TOGGLE & ABOUT SECTION ACTIVE STATE
  // ===================================================================
  const themeButton = doc.getElementById('theme-toggle');
  const themeColor = doc.querySelector('meta[name="theme-color"]');
  const setTheme = (theme, persist = true) => {
    const dark = theme === 'dark';
    if (dark) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    if (themeButton) {
      themeButton.setAttribute('aria-pressed', String(dark));
      themeButton.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      themeButton.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    if (themeColor) themeColor.setAttribute('content', dark ? '#000000' : '#ffffff');
    if (persist) {
      try { window.localStorage.setItem('dip-portfolio-theme', dark ? 'dark' : 'light'); } catch (_) {}
    }
  };
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
  themeButton?.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // About divider reveal trigger
  const about = doc.getElementById('about');
  if (about) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      about.classList.add('is-active');
    } else {
      const aboutObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            about.classList.add('is-active');
            aboutObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      aboutObserver.observe(about);
    }
  }
})();
