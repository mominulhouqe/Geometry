
/* 
function  calculator(elementId){
    const areaCalculate = document.getElementById(elementId);
    const areaCalculateString = areaCalculate.value;
    const areaCalculateValue = parseFloat(areaCalculateString);

    return areaCalculateValue;
}

function calculateArea(){

    const triangel = calculator('triangel-base-input')
    const rectangel = calculator('rectangular-area-result')

} */














// Displaying Area Calculation 

// document.getElementById('triangel-btnf').addEventListener('click', function(){
// /*   const areaCalculateField = document.getElementById('all-field');
//   const areaCalculateValue = areaCalculateField.innerText;
//   console.log(areaCalculateValue); */

//   // const areaValues = document.getElementById('type-number');
//   // const areaValue = areaValues.value;

//   // const setValues = document.getElementById('area1');
//   // const noValue = document.getElementById('pin-fail');

//   // if(areaValue === areaCalculateValue){
     
//   //   setValues.style.display = 'block';
//   //     noValue.style.display = 'none';
//   // }
//   // else{
    
//   //     noValue.style.display = 'block';
//   //     setValues.style.display = 'none';
//   // }

// })




// Background Color Changer 
function changeBackgroundOnHover(elementId) {
  const element = document.getElementById(elementId);

  element.addEventListener('mouseover', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = '#' + randomColor;
  });
}


// blog here 
document.getElementById('blog').addEventListener('click', function(){
  window.location.href = 'blog.html'
})