

//  function 2 
function calculateRectangularArea() {
   // First get Value 
    const triangleWidthInputField = getAreaValue('rectangular-width-input');
    // validate width input
   if (isNaN(triangleWidthInputField)) {
      alert('Please enter a valid number for the base.');
      return;
  
    }
    if(triangleWidthInputField <=0){
      alert('You enter negative value ! try positive value');
      return;
    }
  
   //  Second get Value
    const triangleLengthInputField = getAreaValue('rectangular-length-input');
  
      // validate Height input
      if (isNaN(triangleLengthInputField)) {
         alert('Please enter a valid number for the Height.');
         return;
       }
       if (triangleLengthInputField <=0){
         alert('You enter negative value ! try positive value');
         return;
       }

    const rectangelTotal = triangleWidthInputField * triangleLengthInputField;
    const resultElement = document.getElementById('rectangular-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);
    resultElement.innerText = rectangelTotal.toFixed(2);

  }

 document.getElementById('rectangel-btn').addEventListener('click' , function(){
    calculateRectangularArea();
 })
  
 changeBackgroundOnHover('rectangel-bg');