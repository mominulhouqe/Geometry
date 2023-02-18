function calculatePentagon() {

    const  pentagonBaseInputField = getAreaValue('pentagon-width-input');
   
    const petagonLengthField = getAreaValue('pentagon-length-input');

    const rectangelTotal = 0.5 *  pentagonBaseInputField * petagonLengthField;

    const resultElement = document.getElementById('pentagon-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(1);

  }
 document.getElementById('pentagon-btn').addEventListener('click' , function(){
    calculatePentagon();
 })
 
 changeBackgroundOnHover('pentagon-bg');