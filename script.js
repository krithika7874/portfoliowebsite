var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }
    function closemenu() {
        sidemenu.style.right = "-200px";
    }





  const scriptURL = 'https://script.google.com/macros/s/AKfycbzQKUNmgHHZiI4w11qb2xW0coR9MSr9-9_NFuca1TYW67bhBG6CN0A3DOVgEWJYb0TT/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="your response has been recorded"
        setTimeout(function(){
            msg.innerHTML=""
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  });
