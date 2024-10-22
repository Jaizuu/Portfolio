// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
  const modalTriggers = document.querySelectorAll('.case-item');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  // Modal trigger logic using data-target
  modalTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
          const targetModal = document.querySelector(trigger.getAttribute('data-target'));
          if (targetModal) {
              targetModal.classList.add('is-visible');
              targetModal.setAttribute('aria-hidden', 'false');
          } else {
              console.error('Target modal not found for trigger:', trigger);
          }
      });
  });

  // Close modals when close button is clicked
  closeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modal = button.closest('.modal');
          if (modal) {
              modal.classList.remove('is-visible');
              modal.setAttribute('aria-hidden', 'true');
          } else {
              console.error('Modal not found for close button:', button);
          }
      });
  });

  // Close modals when clicking outside the modal content
  modals.forEach(modal => {
      modal.addEventListener('click', (event) => {
          if (event.target === modal) {
              modal.classList.remove('is-visible');
              modal.setAttribute('aria-hidden', 'true');
          }
      });
  });

  // Intersection Observer for fade-in effect
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing once it’s visible
          }
      });
  });

  sections.forEach((section) => {
      observer.observe(section);
  });
});
