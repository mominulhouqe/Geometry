

function calculateRhombusArea() {
    const rhombusD1InputField = document.getElementById('rhombus-width-input');
    const rhombusD1InputFieldString = rhombusD1InputField.value;
    const rhombusD1InputFieldValue = parseFloat(rhombusD1InputFieldString);
  
    const rhombusD2Field = document.getElementById('rhombus-length-input');
    const rhombusD2FieldString = rhombusD2Field.value;
    const rhombusD2FieldValue = parseFloat(rhombusD2FieldString);
  
    const rectangelTotal = 0.5 * rhombusD1InputFieldValue * rhombusD2FieldValue;
  
    const resultElement = document.getElementById('rhombus-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(1);

  }
  
 document.getElementById('rhombus-btn').addEventListener('click' , function(){
    calculateRhombusArea();
 })
  