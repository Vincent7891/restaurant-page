
function createContact(){

  const main = document.createElement('main');

  const h1 = document.createElement('h1');
  h1.textContent = 'Contact Us!';
  main.appendChild(h1);

  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  const form = document.createElement('form');
  form.action = '';
  form.method = 'post';

  const fields = [
    { label: 'First Name:', type: 'text', id: 'firstName', name: 'firstName', required: true },
    { label: 'Second Name:', type: 'text', id: 'secondName', name: 'secondName', required: true },
    { label: 'Any Additional Requirements?:', type: 'textarea', id: 'anythingElse', name: 'anythingElse', rows: 4, cols: 50 },
    { label: 'Date of Booking:', type: 'date', id: 'dateOfBooking', name: 'dateOfBooking', required: true }
  ];

  fields.forEach(field => {
    const label = document.createElement('label');
    label.htmlFor = field.id;
    label.textContent = field.label;

    let input;
    if (field.type === 'textarea') {
      input = document.createElement('textarea');
      input.rows = field.rows;
      input.cols = field.cols;
    } else {
      input = document.createElement('input');
      input.type = field.type;
    }

    input.id = field.id;
    input.name = field.name;

    if (field.required) {
      input.required = true;
    }

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement('br'));
  });
  let linkElement = document.createElement('link');
  linkElement.id = 'contact-style'; 
  linkElement.rel = 'stylesheet';
  linkElement.type = 'text/css';
  linkElement.href = 'styles/contact-style.css';
  document.head.appendChild(linkElement);
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';
  form.appendChild(submitButton);
  formContainer.appendChild(form);
  main.appendChild(formContainer);
  document.body.appendChild(main);

}

export default createContact