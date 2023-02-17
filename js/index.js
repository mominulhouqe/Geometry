


// function 1
  function calculateTriangleArea() {
    const triangleBaseInputField = document.getElementById('triangel-base-input');
    const triangleBaseInputFieldString = triangleBaseInputField.value;
    const triangleBaseInputFieldValue = parseFloat(triangleBaseInputFieldString);
  
    const triangleHeightInputField = document.getElementById('triangel-hieght-input');
    const triangleHeightInputFieldString = triangleHeightInputField.value;
    const triangleHeightInputFieldValue = parseFloat(triangleHeightInputFieldString);
  
    const triangleArea = 0.5 * triangleBaseInputFieldValue * triangleHeightInputFieldValue;
  
    const resultElement = document.getElementById('triangle-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = triangleArea.toFixed(1);

  }
  
 document.getElementById('triangel-btn').addEventListener('click' , function(){
    calculateTriangleArea();
 })
  
