

function calculateRhombusArea() {
    const rhombusD1InputField = getAreaValue('rhombus-width-input');
    const rhombusD2Field = getAreaValue('rhombus-length-input');
    
    const rectangelTotal = 0.5 * rhombusD1InputField * rhombusD2Field;
  
    const resultElement = document.getElementById('rhombus-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(2);

  }
 document.getElementById('rhombus-btn').addEventListener('click' , function(){
    calculateRhombusArea();

 })
 
changeBackgroundOnHover('colorChange');
