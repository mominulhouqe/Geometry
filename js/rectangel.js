

//  function 2 
function calculateRectangularArea() {
    const triangleWidthInputField = document.getElementById('rectangular-width-input');
    const triangleWidthInputFieldString = triangleWidthInputField.value;
    const triangleWidthInputFieldValue = parseFloat(triangleWidthInputFieldString);
  
    const triangleLengthInputField = document.getElementById('rectangular-length-input');
    const triangleLengthInputFieldString = triangleLengthInputField.value;
    const triangleLengthInputFieldValue = parseFloat(triangleLengthInputFieldString);
  
    const rectangelTotal = triangleWidthInputFieldValue * triangleLengthInputFieldValue;
  
    const resultElement = document.getElementById('rectangular-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(1);

  }
  
 document.getElementById('rectangel-btn').addEventListener('click' , function(){
    calculateRectangularArea();
 })
  