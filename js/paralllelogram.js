function calculateParallelGramArea() {

    const paralleloGramHieghtInputField = getAreaValue('parallelo-width-input');
    
    const paralleloGramLengthField = getAreaValue('parallelo-length-input');
   
    const rectangelTotal = paralleloGramHieghtInputField * paralleloGramLengthField;

  
    const resultElement = document.getElementById('paralleloGram-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(1);

  }
  
 document.getElementById('paralleloGram-btn').addEventListener('click' , function(){
    calculateParallelGramArea();
 })
 changeBackgroundOnHover('param-bg');