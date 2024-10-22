// Modal functionality
const modalTriggers = document.querySelectorAll('.case-item');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.querySelector('#contactModal .close'); // Close button for contact modal

// Select CTA Button
const ctaButton = document.querySelector('#cta-button');  // Updated to match the ID in the HTML

ctaButton?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    contactModal.classList.add('is-visible'); // Open the contact modal when CTA is clicked
    contactModal.setAttribute('aria-hidden', 'false');
});

contactBtn?.addEventListener('click', () => {
    contactModal.classList.add('is-visible');
    contactModal.setAttribute('aria-hidden', 'false');
});

closeContactModal?.addEventListener('click', () => { // Close the contact modal when the close button is clicked
    contactModal.classList.remove('is-visible');
    contactModal.setAttribute('aria-hidden', 'true');
});

// Close modal if clicked outside
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.classList.remove('is-visible');
        contactModal.setAttribute('aria-hidden', 'true');
    }
});

// Modal trigger logic using data-target
modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const targetModal = document.querySelector(trigger.getAttribute('data-target'));
        targetModal.classList.add('is-visible');
        targetModal.setAttribute('aria-hidden', 'false');
    });
});

// Close modals when close button is clicked
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
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
