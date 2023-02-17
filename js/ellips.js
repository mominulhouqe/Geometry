

function calculateEllipse() {

    const ellipsBaseInputField = document.getElementById('ellips-width-input');
    const ellipsBaseInputFieldString = ellipsBaseInputField.value;
    const ellipsBaseInputFieldValue = parseFloat  (ellipsBaseInputFieldString);
  
    const ellipseLengthField = document.getElementById('ellips-length-input');
    const ellipseLengthFieldString = ellipseLengthField.value;
    const ellipseLengthFieldValue = parseFloat(ellipseLengthFieldString);


    const rectangelTotal = 3.1416 * ellipsBaseInputFieldValue * ellipseLengthFieldValue;

  
    const resultElement = document.getElementById('ellipse-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(1);


  }
  
 document.getElementById('ellipse-btn').addEventListener('click' , function(){
    calculateEllipse();
 })

 changeBackgroundOnHover('ellipse-bg');