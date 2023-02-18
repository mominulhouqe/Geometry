

function calculateRhombusArea() {
    const rhombusD1InputField = getAreaValue('rhombus-width-input');
    

    const rhombusD2Field = getAreaValue('rhombus-length-input');
    
    const rectangelTotal = 0.5 * rhombusD1InputField * rhombusD2Field;
  
    const resultElement = document.getElementById('rhombus-area-result');
    const resultElementString = resultElement.innerText;
    let resultElementValue = parseFloat(resultElementString);

    resultElement.innerText = rectangelTotal.toFixed(1);

  }
  

  
 document.getElementById('rhombus-btn').addEventListener('click' , function(){
    calculateRhombusArea();


 })

 const color = document.getElementById('colorChange');

color.addEventListener('mouseover', () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16); // generate a random hex color code
  color.style.backgroundColor = '#' + randomColor; // set the background color of the div to the random color
});


// const colors = document.getElementById('colorChange').addEventListener('mouseover', function(){
//     const randomColors = Math.floor(Math.random()*16777215).toString(16);
//     colors.style.background = '#' + randomColors;
// })
changeBackgroundOnHover('colorChange');
