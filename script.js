/* ==========================================================================
   Lucía UGC Portfolio — Interactive Script
   Sections: Sobre Mí, Mis Vídeos, ¿Por Qué Yo?, Contacto
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. MOBILE NAVIGATION TOGGLE ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('is-active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('is-active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // --- 2. VIDEO PLAYERS CONTROLS ---
  const videoCards = document.querySelectorAll('.video-card');
  const allVideos = document.querySelectorAll('.ugc-video-player');

  // Pause all videos except the active one
  function pauseOtherVideos(currentVideo) {
    allVideos.forEach(v => {
      if (v !== currentVideo && !v.paused) {
        v.pause();
        const wrapper = v.closest('.video-wrapper');
        if (wrapper) {
          wrapper.classList.remove('is-playing');
          const playBtn = wrapper.querySelector('.btn-play-toggle i');
          if (playBtn) {
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
          }
        }
      }
    });
  }

  videoCards.forEach(card => {
    const video = card.querySelector('.ugc-video-player');
    const wrapper = card.querySelector('.video-wrapper');
    const playToggleBtn = card.querySelector('.btn-play-toggle');
    const muteToggleBtn = card.querySelector('.btn-mute-toggle');
    const progressFill = card.querySelector('.progress-fill');

    if (!video || !wrapper) return;

    video.muted = false;

    // Toggle Play/Pause Function
    function togglePlay() {
      if (video.paused) {
        pauseOtherVideos(video);
        video.play().then(() => {
          wrapper.classList.add('is-playing');
          if (playToggleBtn) {
            const icon = playToggleBtn.querySelector('i');
            if (icon) {
              icon.classList.remove('fa-play');
              icon.classList.add('fa-pause');
            }
          }
        }).catch(err => {
          console.warn('Autoplay prevented, retrying muted:', err);
          video.muted = true;
          updateMuteIcon();
          video.play();
          wrapper.classList.add('is-playing');
        });
      } else {
        video.pause();
        wrapper.classList.remove('is-playing');
        if (playToggleBtn) {
          const icon = playToggleBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
          }
        }
      }
    }

    if (playToggleBtn) {
      playToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        togglePlay();
      });
    }

    video.addEventListener('click', () => {
      togglePlay();
    });

    // Mute/Unmute Toggle
    function updateMuteIcon() {
      if (!muteToggleBtn) return;
      const icon = muteToggleBtn.querySelector('i');
      if (icon) {
        if (video.muted) {
          icon.classList.remove('fa-volume-high');
          icon.classList.add('fa-volume-xmark');
        } else {
          icon.classList.remove('fa-volume-xmark');
          icon.classList.add('fa-volume-high');
        }
      }
    }

    if (muteToggleBtn) {
      muteToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        updateMuteIcon();
      });
    }

    // Time update progress bar
    video.addEventListener('timeupdate', () => {
      if (progressFill && video.duration) {
        const percent = (video.currentTime / video.duration) * 100;
        progressFill.style.width = `${percent}%`;
      }
    });

    // When video ends
    video.addEventListener('ended', () => {
      wrapper.classList.remove('is-playing');
      if (playToggleBtn) {
        const icon = playToggleBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
        }
      }
      if (progressFill) {
        progressFill.style.width = '0%';
      }
    });
  });

  // --- 3. PORTFOLIO FILTER TABS ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.video-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      items.forEach(item => {
        const categories = item.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 20);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // --- 4. CONTACT FORM SUBMISSION ---
  const contactForm = document.getElementById('contactForm');
  const successAlert = document.getElementById('formSuccessMessage');
  const btnSubmit = document.getElementById('btnSubmit');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const brand = document.getElementById('brandName') ? document.getElementById('brandName').value.trim() : '';
      const email = document.getElementById('contactEmail') ? document.getElementById('contactEmail').value.trim() : '';
      const niche = document.getElementById('nicheSelect') ? document.getElementById('nicheSelect').value : 'General';
      const details = document.getElementById('projectDetails') ? document.getElementById('projectDetails').value.trim() : '';

      if (!brand || !email || !details) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
      }

      // Visual feedback loading
      btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Preparando mensaje...';
      btnSubmit.disabled = true;

      setTimeout(() => {
        btnSubmit.innerHTML = '<i class="fa-solid fa-check"></i> ¡Mensaje Enviado!';
        btnSubmit.classList.remove('btn-primary');
        btnSubmit.style.background = '#10b981';
        btnSubmit.style.color = '#fff';

        if (successAlert) {
          successAlert.style.display = 'flex';
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        contactForm.reset();
      }, 700);
    });
  }

});
