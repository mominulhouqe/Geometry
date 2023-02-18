

function calculateEllipse() {

    const ellipsBaseInputField = getAreaValue('ellips-width-input');

    const ellipseLengthField = getAreaValue('ellips-length-input');

    const rectangelTotal = 3.1416 * ellipsBaseInputField * ellipseLengthField;
    
   //  final result set
    const resultElement = document.getElementById('ellipse-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);
    resultElement.innerText = rectangelTotal.toFixed(2);
  }
  
 document.getElementById('ellipse-btn').addEventListener('click' , function(){
    calculateEllipse();
 })

 changeBackgroundOnHover('ellipse-bg');