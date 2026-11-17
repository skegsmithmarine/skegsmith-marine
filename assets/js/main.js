(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      navigation.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
        navigation.classList.remove('is-open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const enquiryForm = document.querySelector('#enquiry-form');
  if (enquiryForm) {
    const listingName = new URLSearchParams(window.location.search).get('listing');
    if (listingName) {
      const topicField = enquiryForm.querySelector('[name="topic"]');
      const messageField = enquiryForm.querySelector('[name="message"]');
      if (topicField) topicField.value = 'Outboard engine enquiry';
      if (messageField && !messageField.value) {
        messageField.value = `I am enquiring about the ${listingName} listing. Please let me know its current price, availability and any further details.`;
      }
    }

    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!enquiryForm.reportValidity()) return;

      const formData = new FormData(enquiryForm);
      const subject = `Website enquiry: ${formData.get('topic')}`;
      const body = [
        `Name: ${formData.get('name')}`,
        `Email: ${formData.get('email')}`,
        `Phone: ${formData.get('phone') || 'Not provided'}`,
        `Enquiry: ${formData.get('topic')}`,
        '',
        'Message:',
        formData.get('message')
      ].join('\n');

      const mailto = `mailto:info@skegsmithmarine.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const status = document.querySelector('#form-note');
      if (status) status.textContent = 'Your email app should open with the enquiry filled in. Please send the email from there to complete your message.';
      window.location.href = mailto;
    });
  }
})();
