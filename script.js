const scriptURL = 'https://script.google.com/macros/s/AKfycbyCGxJlpBdd_Mp6ZXsCBc5G9vdlprQyitVja_Cab2eLk2DEwdiYUzuuzUVaS8U5a4x42A/exec'
const form = document.forms['formemail']

form.addEventListener('submit', e => {

    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    // .then(response => alert("Thank you! Form is submitted"))
    .then(() => {window.location.href = 'download.html'; })
    .catch(error => console.error('error!', error.message))
})