import throttle from 'lodash.throttle';
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

function setLocalData(event) {
    const {name , value} = event.target;
    formData[name] = value
    try {
        localStorage.setItem('feedback-form-state',JSON.stringify(formData))         
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('input', throttle(setLocalData, 500))

form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('form data : ',formData);
    form.reset()
    localStorage.clear();

})

