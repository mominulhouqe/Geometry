function calculateParallelGramArea() {
    const paralleloGramHieghtInputField = document.getElementById('parallelo-width-input');
    const paralleloGramHieghtInputFieldString = paralleloGramHieghtInputField.value;
    const paralleloGramHieghtInputFieldValue = parseFloat(paralleloGramHieghtInputFieldString);
  
    const paralleloGramLengthField = document.getElementById('parallelo-length-input');
    const paralleloGramLengthFieldString = paralleloGramLengthField.value;
    const paralleloGramLengthFieldValue = parseFloat(paralleloGramLengthFieldString);
  
    const rectangelTotal = paralleloGramHieghtInputFieldValue * paralleloGramLengthFieldValue;

  
    const resultElement = document.getElementById('paralleloGram-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(1);

  }
  
 document.getElementById('paralleloGram-btn').addEventListener('click' , function(){
    calculateParallelGramArea();
 })
 changeBackgroundOnHover('param-bg');