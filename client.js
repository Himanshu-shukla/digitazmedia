emailjs.init("l0hyNiPBYyn4M6Igu");


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const inputNumberGroup = document.querySelector('.InputNumber-group');
  const inputNameGroup = document.querySelector('.name-group');
  const inputEmailGroup = document.querySelector('.email-group');
  const inputLocationGroup = document.querySelector('.location-group');

  const name = document.getElementById('inputName').value;
  const contact = document.getElementById('InputNumber').value;
  const email = document.getElementById('email').value;
  const location = document.getElementById('InputLocation').value;

  // Get current date
  const currentDate = new Date();
  const dateFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-IN', dateFormatOptions).format(currentDate);

  // Get current Time
  const timeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
  const formattedTime = new Intl.DateTimeFormat('en-US', timeFormatOptions).format(new Date());

  const templateParams = {
    name: name,
    email: email,
    contact: contact,
    location: location,
    date: formattedDate,
    time: formattedTime
  };

  emailjs.send("service_bacp2yv", "template_gdlbhfy", templateParams).then(
    function (response) {
      console.log("Email sent successfully", response);
      document.getElementById('InputNumber').value = ""
      inputNumberGroup.querySelectorAll('.palceholder').forEach(element => {
        element.style.display = 'block';
      });

      document.getElementById('inputName').value = ""
      inputNameGroup.querySelectorAll('.palceholder').forEach(element => {
        element.style.display = 'block';
      });
      document.getElementById('email').value = ""
      inputEmailGroup.querySelectorAll('.palceholder').forEach(element => {
        element.style.display = 'block';
      });
      document.getElementById('InputLocation').value = ""
      inputLocationGroup.querySelectorAll('.palceholder').forEach(element => {
        element.style.display = 'block';
      });
    },
    function (error) {
      alert("Problem with connection", error);
    }
  );
});
