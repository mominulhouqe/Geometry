function calculatePentagon() {

    const  pentagonBaseInputField = document.getElementById('pentagon-width-input');
    const  pentagonBaseInputFieldString =  pentagonBaseInputField.value;
    const  pentagonBaseInputFieldValue = parseFloat  (pentagonBaseInputFieldString);
  
    const petagonLengthField = document.getElementById('pentagon-length-input');
    const petagonLengthFieldString = petagonLengthField.value;
    const petagonLengthFieldValue = parseFloat(petagonLengthFieldString);
  
    const rectangelTotal = 0.5*  pentagonBaseInputFieldValue * petagonLengthFieldValue;

  
    const resultElement = document.getElementById('pentagon-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(1);

  }
  
 document.getElementById('pentagon-btn').addEventListener('click' , function(){
    calculatePentagon();
 })

 changeBackgroundOnHover('pentagon-bg');