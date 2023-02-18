

function calculateTriangleArea() {
  // first field 
  const triangleBaseInputField = getAreaValue('triangel-base-input');
   // validate Base input
   if (isNaN(triangleBaseInputField)) {
    alert('Please enter a valid number for the base.');
    return;
  }
  if(triangleBaseInputField <=0){
    alert('You enter negative value ! try positive value');
    return;
  }
  //  Second Field Value
  const triangleHeightInputField = getAreaValue('triangel-hieght-input');
 
  // validate Height input
    if (isNaN(triangleBaseInputField)) {
      alert('Please enter a valid number for the Height.');
      return;
    }
    if (triangleHeightInputField <=0){
      alert('You enter negative value ! try positive value');
      return;
    }
   
  const triangleArea = 0.5 * triangleBaseInputField * triangleHeightInputField;

  const resultElement = document.getElementById('triangle-area-result');
  const resultElementString = resultElement.innerText;
  let resultElementValue = parseFloat(resultElementString);
  resultElement.innerText = triangleArea.toFixed(1);
}

 document.getElementById('triangel-btn').addEventListener('click' , function(){

  calculateTriangleArea()
})

changeBackgroundOnHover('triangel-bg');


