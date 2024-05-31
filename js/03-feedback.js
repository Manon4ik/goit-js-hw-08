const form = document.querySelector(".feedback-form")

const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value
}

const localValue = JSON.parse(localStorage.getItem('feedback-form-state'))
if(localValue){
    form.elements.email.value = localValue.email
    form.elements.message.value = localValue.message
}

form.addEventListener('input', function(event) {

    if(event.target.name == 'email'){
        formData.email = event.target.value
    }
    if(event.target.name == 'message'){
        formData.message = event.target.value
    }
    
    localStorage.setItem('feedback-form-state',JSON.stringify(formData)) 

})

form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('form data : ',formData);
    form.reset()
    localStorage.clear();

})

