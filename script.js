document.addEventListener('DOMContentLoaded', function() {
    const newContentButton = document.getElementById('newContentButton');
    const contentArea = document.getElementById('contentArea');
  
    newContentButton.addEventListener('click', function() {
      const newContent = document.createElement('p');
      newContent.textContent = 'This is new dynamic content added to the page!';
      contentArea.appendChild(newContent);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        alert(`You clicked on: ${this.innerText}`);
      });
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      // Here you can handle the form data, e.g., send it to a server
      console.log(data);
  
      formResponse.innerText = 'Thank you for your message!';
      form.reset();
    });
  });
  document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.querySelector('.icon').textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
  });
  