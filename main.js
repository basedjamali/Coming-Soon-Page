const borderOfForm = document.getElementById('form')
const emailInput = document.getElementById('email')
const errorIcon = document.getElementById('error')
const submitBtn = document.getElementById('submit')
const errorMessage = document.getElementById('error-message')

// removing the error Icon through JS
errorIcon.style.display = 'none';

submitBtn.addEventListener("click", () => {
  if (emailInput.value == "" || !emailInput.value.includes('@')) {
    errorMessage.style.display = 'block';
    errorIcon.style.display = 'block';
    borderOfForm.style.border = '2px solid hsl(0, 93%, 68%)';
  }
})