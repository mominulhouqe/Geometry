
// Area Field Calculation Value 
function getAreaValue(inputField) {

  const getInputField = document.getElementById(inputField);
  const getInputFieldString = getInputField.value;
  const getInputFieldValue = parseFloat(getInputFieldString);
  getInputField.value = '';
  return getInputFieldValue;
}

// Background Color Changer 
function changeBackgroundOnHover(elementId) {
  const element = document.getElementById(elementId);

  element.addEventListener('mouseover', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = '#' + randomColor;
  });
}

// blog here 
document.getElementById('blog').addEventListener('click', function () {
  window.location.href = 'blog.html';
})




