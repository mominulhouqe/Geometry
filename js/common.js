




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



//  const inputField = document.getElementById('inputField');
const calculateBtn = document.getElementById('triangel-btn');
const outputDiv = document.getElementById('output');

calculateBtn.addEventListener('click', () => {
  // const inputValue =calculateBtn.value;
  // const result = inputValue * 2; // perform some calculation
  
  // const newElement = document.createElement('p'); // create new element
  const textNode = document.createElement('div'); // create text node with output value
  outputDiv.appendChild(textNode); // append text node to new element
  // outputDiv.appendChild(newElement); // append new element to output div
  
  // display the result
  outputDiv.style.display = 'block';
});


