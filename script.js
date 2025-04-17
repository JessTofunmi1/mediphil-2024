const scriptURL = 'https://script.google.com/macros/s/AKfycbwljngLl3_t5JG8GfykRs3atL2CRAn39jg-8oHM0XOQxdIGfW-VMqAMWcZJyzQ5Xfzc/exec'
const form = document.forms['formemail']

form.addEventListener('submit', e => {

    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    // .then(response => alert("Thank you! Form is submitted"))
    .then(() => {window.location.href = 'download.html'; })
    .catch(error => console.error('error!', error.message))
})